import { all, put } from 'redux-saga/effects';
import {
    __CHANGE_IS_LOGGED,
    __SET_MY_USERS_CHAT,
    __SET_ALL_CHAT_USERS,
    __SET_ACTIVE_USER,
    __SET_ACTIVE_USER_MESSAGES
} from '../actions';
import store from 'store';
import fire from "config/fire";


export function* __SET_LOGGED(action) {
    yield put(store.dispatch(__CHANGE_IS_LOGGED(action)));
}

export async function* __GET_ALL_USERS (data) {
    if (data) {
        yield put(store.dispatch(__SET_ALL_CHAT_USERS(null)));
        return;
    }
    const db = fire.firestore();
    const fakeObj = [];
    await db.collection('users')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const _data = doc.data();
                delete _data.messages;
                fakeObj.push({..._data})
            });
        });
    yield put(store.dispatch(__SET_ALL_CHAT_USERS(fakeObj)))
}
let unsubscribeUsers;
export async function* __GET_CHAT_USERS(data) {
    if (unsubscribeUsers) unsubscribeUsers();

    const db = fire.firestore();
    let usersData = [];
    if (data) {
        yield put(store.dispatch(__SET_MY_USERS_CHAT(data)));
    } else {
        unsubscribeUsers = db.collection('users').where("email", "==", fire.auth().currentUser.email)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    usersData = doc.data().messages;

                    const userId = store.getState().chat.activeUser?.id || usersData[0]?.id;

                    doc.data().messages.forEach((user, index) => {
                        if (user.id === userId) {
                            const _cloneActiveUser = JSON.parse(JSON.stringify(usersData[index]));
                            _cloneActiveUser.letters = _cloneActiveUser.letters.slice(-1).pop();
                            store.dispatch(__SET_ACTIVE_USER(_cloneActiveUser));
                        }
                        usersData[index].letters = user.letters.slice(-1).pop();
                    });
                    store.dispatch(__SET_MY_USERS_CHAT(usersData));
                });
            });
        yield usersData;
    }
}

export async function* __CHANGE_IS_SEEN ({senderID, myID}) {
    // Change my seen

    const db = fire.firestore();
    await db.collection('users').doc(myID).get().then(res => {
        const myObj = db.doc(`users/${myID}`);
        let _messagesMy = res.data()?.messages;
        if (!_messagesMy) return;
        const _findIndex = res.data().messages.findIndex(item => item.id === senderID);
        if (_findIndex !== -1) {
            _messagesMy[_findIndex].isSeen = true;
            _messagesMy[_findIndex].countMessagesDelivered = 0;
        }
        myObj.update('messages', _messagesMy);
    });
    await db.collection('users').doc(senderID).get().then(res => {
        const senderObj = db.doc(`users/${senderID}`);
        let _messagesMy = res.data()?.messages;
        if (!_messagesMy) return;
        const _findIndex = res.data().messages.findIndex(item => item.id === myID);
        if (_findIndex !== -1) {
            _messagesMy[_findIndex].isSeen = true;
            _messagesMy[_findIndex].countMessagesDelivered = 0;
        }
        senderObj.update('messages', _messagesMy);
    });
    yield;
}

let unsubscribe;
export async function* __GET_ACTIVE_USERS_MESSAGES (data) {
    if (unsubscribe) {
        unsubscribe();
    }
    let _messages = [];
    const db = fire.firestore();
    await new Promise (resolve => {
        unsubscribe = db.collection('users').where("email", "==", fire.auth().currentUser.email)
            .onSnapshot((res) => {
                res.forEach(doc => {
                    const _findIndex = doc.data()?.messages.findIndex(item => item.id === data);
                    if (_findIndex !== -1) {
                        _messages = doc.data().messages[_findIndex];
                        store.dispatch(__SET_ACTIVE_USER_MESSAGES([..._messages.letters]));
                        resolve();
                    }
                })
            });
    });
    yield _messages;
}

export async function* __IS_TYPING_TO_ACTIVE_USER (hint, toUserId, myId) {
    let friendUsers = null;
    const db        = fire.firestore();

    await db.collection('users').doc(toUserId).get().then(res => {
        const myObj = db.doc(`users/${toUserId}`);
        friendUsers = res.data();
        let _messagesMy = res.data().messages;
        const _findIndex = res.data().messages.findIndex(item => item.id === myId);
        if (_findIndex !== -1) {
            _messagesMy[_findIndex].isTyping = hint;
            myObj.update('messages', _messagesMy);
        }
    });
}

export async function* __GO_PRIVATE_CHAT (idUser, loggedId) {
    const usersData      = store.getState().chat.myChatUsers;
    const findActiveUser = usersData.find(user => user.id === idUser);
    if (findActiveUser) {
        store.dispatch(__SET_ACTIVE_USER( findActiveUser));
    }

    let friendChatMyObj = {};
    await __CHANGE_IS_SEEN({senderID: idUser, myID: loggedId}).next();
    yield friendChatMyObj
}

let unsubscribeAddMessageMy;
let unsubscribeAddMessageFriend;
export async function* __ADD_MESSAGE({friend, my}) {
    if (unsubscribeAddMessageMy) unsubscribeAddMessageMy();
    if (unsubscribeAddMessageFriend) unsubscribeAddMessageFriend();

    const db                = fire.firestore();
    const updateMyUsers     = db.collection('users').doc(my.loggedUser.id);
    let friendUsers = {};
    await db.collection('users').doc(my.friendId).get().then(res => {
        friendUsers = res.data();
    });
    unsubscribeAddMessageMy = updateMyUsers.onSnapshot((querySnapshot) => {
        const myUsers = querySnapshot.data();
        if(!myUsers) return;
        const _findIndex = myUsers.messages.findIndex(item => item.id === my.friendId);

        if (_findIndex === -1) {
            myUsers.messages.unshift({
                id: my.friendId,
                isSeen: true,
                isTyping: false,
                isSender: true,
                countMessagesDelivered: 0,
                color: friendUsers.color,
                fullName: friendUsers.fullName,
                letters: [my.msgData]
            });
            updateMyUsers.update('messages', myUsers.messages);
        } else if (!myUsers.messages[_findIndex].letters.filter(msg => msg.time === my.msgData.time).length) {
            const _saveData = myUsers.messages[_findIndex];
            if (myUsers.messages[_findIndex].letters.length === 1 && myUsers.messages[_findIndex].letters[0].time === null) {
                myUsers.messages[_findIndex].letters[0] = my.msgData;
            } else {
                myUsers.messages[_findIndex].letters.push(my.msgData);
            }
            myUsers.messages[_findIndex].isSeen = false;
            myUsers.messages[_findIndex].isTyping = false;
            myUsers.messages[_findIndex].isSender = true;
            myUsers.messages.splice(_findIndex, 1);
            myUsers.messages.unshift(_saveData);
            updateMyUsers.update('messages', myUsers.messages);
        }
    });
    if(!friend) return;

    const updateFriendUsers = db.collection('users').doc(friend.friendId);
    unsubscribeAddMessageFriend = updateFriendUsers.onSnapshot((querySnapshot) => {
        const friendUsers = querySnapshot.data();
        if(!friendUsers) return;
        const _findIndex = friendUsers.messages.findIndex(item => item.id === friend.loggedUser?.id);
        if (_findIndex === -1) {
            friendUsers.messages.push({
                id: friend.loggedUser.id,
                color: friend.loggedUser.color,
                isSeen: false,
                isSender: false,
                isTyping: false,
                countMessagesDelivered: 1,
                fullName: friend.loggedUser.fullName,
                letters: [friend.msgData]
            });
            updateFriendUsers.update('messages', friendUsers.messages);
        } else if (!friendUsers.messages[_findIndex].letters.filter(msg => msg.time === friend.msgData.time).length) {
            if (friendUsers.messages[_findIndex].letters.length === 1 && friendUsers.messages[_findIndex].letters[0].time === null) {
                friendUsers.messages[_findIndex].letters[0] = friend.msgData;
            } else {
                friendUsers.messages[_findIndex].letters.push(friend.msgData);
            }
            friendUsers.messages[_findIndex].isSeen = false;
            friendUsers.messages[_findIndex].countMessagesDelivered += 1;
            friendUsers.messages[_findIndex].isSender = false;
            friendUsers.messages[_findIndex].isTyping = false;
            updateFriendUsers.update('messages', friendUsers.messages);
        }
    });
    yield;
}

let unsubscribeRemoveMy;
let unsubscribeRemoveFriend;
export async function* __REMOVE_MESSAGE (time, {idUser, myId}) {
    if (unsubscribeRemoveMy) unsubscribeRemoveMy();
    if (unsubscribeRemoveFriend) unsubscribeRemoveFriend();

    const db                = fire.firestore();
    let updateFriendUsers   = null,
        friendUsers         = null,
        updateMyUsers       = null,
        myUsers             = null;

    unsubscribeRemoveFriend = await db.collection('users').doc(idUser).onSnapshot(snapshot => {
        updateFriendUsers = db.doc(`users/${snapshot.data().id}`);
        friendUsers = snapshot.data();
        if(!friendUsers) return;
        const _findIndexInFriend = friendUsers.messages.findIndex(item => item.id === myId);
        const foundedItem = friendUsers.messages[_findIndexInFriend].letters.findIndex(msg => msg.time === time);

        if (foundedItem !== -1 && friendUsers.messages[_findIndexInFriend].letters[foundedItem].removed) return;

        if (foundedItem !== -1 && friendUsers.messages[_findIndexInFriend].letters[foundedItem]) {
            friendUsers.messages[_findIndexInFriend].letters[foundedItem].removed = true;
            friendUsers.messages[_findIndexInFriend].removedMessageIndex = foundedItem
        }
        updateFriendUsers.update('messages',  friendUsers.messages);
    });

    unsubscribeRemoveMy = db.collection('users').doc(myId).onSnapshot(snapshot => {
        updateMyUsers = db.doc(`users/${snapshot.data().id}`);
        myUsers = snapshot.data();
        if(!myUsers) return;
        const _findIndexInMy = myUsers.messages.findIndex(item => item.id === idUser);
        const foundedItem = myUsers.messages[_findIndexInMy].letters.findIndex(msg => msg.time === time);

        if (foundedItem !== -1 && myUsers.messages[_findIndexInMy].letters[foundedItem].removed) return;

        if (foundedItem !== -1 && myUsers.messages[_findIndexInMy].letters[foundedItem]) {
            myUsers.messages[_findIndexInMy].letters[foundedItem].removed = true;
            myUsers.messages[_findIndexInMy].removedMessageIndex = foundedItem;
        }
        updateMyUsers.update('messages', myUsers.messages);
    });
    yield;
}

export async function* __EDIT_MESSAGE (msgData, index, {idUser, myId}) {
    const db                = fire.firestore();
    let updateFriendUsers   = null,
        friendUsers         = null,
        updateMyUsers       = null,
        myUsers             = null;

    await db.collection('users').doc(idUser).get().then(async res => {
        updateFriendUsers = db.doc(`users/${res.data().id}`);
        friendUsers = res.data();
        if(!friendUsers) return;
        const _findIndexInFriend = friendUsers.messages.findIndex(item => item.id === myId);
        if (!msgData) {
            friendUsers.messages[_findIndexInFriend].editedMsgIndex = -1;
            friendUsers.messages[_findIndexInFriend].countMessagesDelivered = 0;
            friendUsers.messages[_findIndexInFriend].isSeen = true;
            friendUsers.messages[_findIndexInFriend].isSender = true;
            friendUsers.messages[_findIndexInFriend].isTyping = false;
        } else if (_findIndexInFriend !== -1) {
            friendUsers.messages[_findIndexInFriend].editedMsgIndex = index;
            friendUsers.messages[_findIndexInFriend].letters[index] = {
                ...friendUsers.messages[_findIndexInFriend].letters[index],
                decryptedMsg: msgData.d,
                encryptedMsg: msgData.e,
                message: msgData.value,
                edited: true,
            }
        }
        await updateFriendUsers.update('messages', friendUsers.messages);
    });
    await db.collection('users').doc(myId).get().then( async res => {
        updateMyUsers = db.doc(`users/${res.data().id}`);
        myUsers = res.data();
        if(!myUsers) return;
        const _findIndexInMy = myUsers.messages.findIndex(item => item.id === idUser);
        if (!msgData) {
            myUsers.messages[_findIndexInMy].editedMsgIndex = -1;
            myUsers.messages[_findIndexInMy].countMessagesDelivered = 0;
            myUsers.messages[_findIndexInMy].isSeen = true;
            myUsers.messages[_findIndexInMy].isSender = true;
            myUsers.messages[_findIndexInMy].isTyping = false;
        } else if (_findIndexInMy !== -1) {
            myUsers.messages[_findIndexInMy].editedMsgIndex = index;
            myUsers.messages[_findIndexInMy].letters[index] = {
                ...myUsers.messages[_findIndexInMy].letters[index],
                decryptedMsg: msgData.d,
                encryptedMsg: msgData.e,
                message: msgData.value,
                edited: true,
            }
        }
        await updateMyUsers.update('messages', myUsers.messages);
    });
    yield;
}
export function * _rootSaga () {
    yield all([
        __SET_LOGGED,
        __GET_CHAT_USERS,
        __GET_ALL_USERS,
        __CHANGE_IS_SEEN,
        __GET_ACTIVE_USERS_MESSAGES,
        __IS_TYPING_TO_ACTIVE_USER,
        __GO_PRIVATE_CHAT,
        __EDIT_MESSAGE,
        __REMOVE_MESSAGE,
        __ADD_MESSAGE,
    ])
}