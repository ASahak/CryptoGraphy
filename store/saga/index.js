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

export async function* __GET_CHAT_USERS(data) {
    const db = fire.firestore();
    let usersData = [];
    if (data) {
        yield put(store.dispatch(__SET_MY_USERS_CHAT(data)));
    } else {
        await db.collection('users').where("email", "==", fire.auth().currentUser.email)
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
        let _messagesMy = res.data().messages;
        const _findIndex = res.data().messages.findIndex(item => item.id === senderID);
        if (_findIndex !== -1) {
            _messagesMy[_findIndex].isSeen = true;
            _messagesMy[_findIndex].countMessagesDelivered = 0;
        }
        myObj.update('messages', _messagesMy);
    });
    await db.collection('users').doc(senderID).get().then(res => {
        const senderObj = db.doc(`users/${senderID}`);
        let _messagesMy = res.data().messages;
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
                    const _findIndex = doc.data().messages.findIndex(item => item.id === data);
                    if (_findIndex !== -1) {
                        _messages = doc.data().messages[_findIndex]
                    }
                    store.dispatch(__SET_ACTIVE_USER_MESSAGES(_messages.letters));

                    resolve();
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
        }
        myObj.update('messages', _messagesMy);
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

export async function* __ADD_MESSAGE({friend, my}) {
    const db                = fire.firestore();
    const updateMyUsers     = db.collection('users').doc(my.loggedUser.id);
    const updateAll         = [];
    const _batches          = [];
    friend && updateAll.push(
        new Promise((resolve, reject) => {
            const updateFriendUsers = db.collection('users').doc(friend.friendId);
            updateFriendUsers.get().then(async res => {
                _batches[0] = db.batch();
                if (!res.exists) reject("Document does not exist!");
                const friendUsers = res.data();
                const _findIndex = friendUsers.messages.findIndex(item => item.id === friend.loggedUser?.id);
                if (_findIndex !== -1) {
                    friendUsers.messages[_findIndex].isSeen = false;
                    friendUsers.messages[_findIndex].countMessagesDelivered += 1;
                    friendUsers.messages[_findIndex].isSender = false;
                    friendUsers.messages[_findIndex].isTyping = false;
                    if (friendUsers.messages[_findIndex].letters.length === 1 && friendUsers.messages[_findIndex].letters[0].message === '') {
                        friendUsers.messages[_findIndex].letters[0] = friend.msgData;
                    } else {
                        friendUsers.messages[_findIndex].letters.push(friend.msgData);
                    }
                } else {
                    friendUsers.messages.push({
                        id: friend.loggedUser.id,
                        color: friend.loggedUser.color,
                        isSeen: false,
                        isSender: false,
                        isTyping: false,
                        countMessagesDelivered: 1,
                        fullName: friend.loggedUser.fullName,
                        letters: [friend.msgData]
                    })
                }
                _batches[0].update(updateFriendUsers, {'messages': friendUsers.messages});
                resolve();
            })
        })
    );
    my && updateAll.push(
        new Promise((resolve, reject) => {
            updateMyUsers.get().then(async res => {

                _batches[1] = db.batch();
                if (!res.exists) reject("Document does not exist!");
                const myUsers = res.data();
                let friendUsers = {};
                await db.collection('users').doc(my.friendId).get().then(res => {
                    friendUsers = res.data();
                });

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
                } else {
                    const _currentIndex = myUsers.messages.findIndex(item => item.id === my.friendId);
                    const _saveData = myUsers.messages[_currentIndex];
                    if (myUsers.messages[_currentIndex].letters.length === 1 && myUsers.messages[_currentIndex].letters[0].time === null) {
                        myUsers.messages[_currentIndex].letters[0] = my.msgData;
                    } else {
                        myUsers.messages[_currentIndex].letters.push(my.msgData);
                    }
                    myUsers.messages[_currentIndex].isSeen = false;
                    myUsers.messages[_currentIndex].isTyping = false;
                    myUsers.messages[_currentIndex].isSender = true;
                    myUsers.messages.splice(_currentIndex, 1);
                    myUsers.messages.unshift(_saveData);
                }
                _batches[1].update(updateMyUsers, {'messages': myUsers.messages});
                resolve();

            })
        })
    );
    await Promise.all(updateAll).then(_ => {
        _batches.forEach(batch => batch.commit());
    });
    yield;
}

export async function* __REMOVE_MESSAGE (index, {idUser, myId}) {
    const db                = fire.firestore();
    let updateFriendUsers   = null,
        friendUsers         = null,
        updateMyUsers       = null,
        myUsers             = null;
    const _batches          = [];
    const updateAll         = [];
    updateAll.push(new Promise((resolve, reject) => {
        db.collection('users').doc(idUser).get().then( res => {
            updateFriendUsers = db.doc(`users/${res.data().id}`);
            friendUsers = res.data();
            _batches[0] = db.batch();
            const _findIndexInFriend = friendUsers.messages.findIndex(item => item.id === myId);
            friendUsers.messages[_findIndexInFriend].letters.splice(index, 1);
            if (friendUsers.messages[_findIndexInFriend].letters.length === 0) {
                friendUsers.messages[_findIndexInFriend].letters.push({message: '', time: null});
            }
            _batches[0].update(updateFriendUsers, {'messages': friendUsers.messages});
            resolve();
        });
    }));
    updateAll.push(new Promise((resolve, reject) => {
        db.collection('users').doc(myId).get().then( res => {
            updateMyUsers = db.doc(`users/${res.data().id}`);
            myUsers = res.data();
            _batches[1] = db.batch();
            const _findIndexInMy = myUsers.messages.findIndex(item => item.id === idUser);
            myUsers.messages[_findIndexInMy].letters.splice(index, 1);
            if (myUsers.messages[_findIndexInMy].letters.length === 0) {
                myUsers.messages[_findIndexInMy].letters.push({message: '', time: null});
            }
            _batches[1].update(updateMyUsers, {'messages': myUsers.messages});
            resolve();
        })
    }));
    await Promise.all(updateAll).then(_ => {
        _batches.forEach(batch => batch.commit());
    });
    yield;
}

export async function* __EDIT_MESSAGE (msgData, index, {idUser, myId}) {
    const db                = fire.firestore();
    let updateFriendUsers   = null,
        friendUsers         = null,
        updateMyUsers       = null,
        myUsers             = null;
    const _batches          = [];
    const updateAll         = [];
    updateAll.push(
        new Promise(resolve => {
            _batches[0] = db.batch();
            db.collection('users').doc(idUser).get().then(async res => {
                updateFriendUsers = db.doc(`users/${res.data().id}`);
                friendUsers = res.data();
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
                _batches[0].update(updateFriendUsers, {'messages': friendUsers.messages});
                resolve();
            });
        })
    );
    updateAll.push(
        new Promise(resolve => {
            _batches[1] = db.batch();
            db.collection('users').doc(myId).get().then(async res => {
                updateMyUsers = db.doc(`users/${res.data().id}`);
                myUsers = res.data();
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
                _batches[1].update(updateMyUsers, {'messages': myUsers.messages});
                resolve();
            });
        })
    );
    await Promise.all(updateAll).then(_ => {
        _batches.forEach(batch => batch.commit());
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