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
    })
}

export async function* __GET_ACTIVE_USERS_MESSAGES (data) {
    let _messages = [];
    const db = fire.firestore();
    await new Promise (resolve => {
        db.collection('users').where("email", "==", fire.auth().currentUser.email)
            .onSnapshot((res) => {
                res.forEach(doc => {
                    const _findIndex = doc.data().messages.findIndex(item => item.id === data);
                    if (_findIndex !== -1) {
                        _messages = doc.data().messages[_findIndex]
                    }
                    store.dispatch(__SET_ACTIVE_USER_MESSAGES(_messages.letters));
                    resolve();
                })
            })
    });
    yield _messages;
}

export async function* __IS_TYPING_TO_ACTIVE_USER (hint, toUserId, myId) {
    let friendUsers = null;
    const db = fire.firestore();
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
    let friendChatMyObj = {};
    const db = fire.firestore();
    await db.collection('users').doc(loggedId).get().then(res => {
        friendChatMyObj = res.data();
        let _messagesMy = res.data().messages;
        const _findIndex = res.data().messages.findIndex(item => item.id === idUser);
        if (_findIndex !== -1) {
            friendChatMyObj = {
                color: _messagesMy[_findIndex].color,
                id: _messagesMy[_findIndex].id,
                isSeen: _messagesMy[_findIndex].isSeen,
                isTyping: _messagesMy[_findIndex].isTyping,
                fullName: _messagesMy[_findIndex].fullName,
            };
        }
    });
    await __CHANGE_IS_SEEN({senderID: idUser, myID: loggedId}).next();
    store.dispatch(__SET_ACTIVE_USER(friendChatMyObj));
    yield friendChatMyObj
}

export async function* __ADD_FRIEND_MESSAGE({friendId, loggedUser}, messageData) {
    const db = fire.firestore();
    let updateFriendUsers = null;
    let friendUsers = null;
    await db.collection('users').doc(friendId).get().then(res => {
        updateFriendUsers = db.doc(`users/${res.data().id}`);
        friendUsers = res.data();
    });

    const _findIndex = friendUsers.messages.findIndex(item => item.id === loggedUser.id);
    if (_findIndex !== -1) {
        friendUsers.messages[_findIndex].isSeen = false;
        friendUsers.messages[_findIndex].countMessagesDelivered += 1;
        friendUsers.messages[_findIndex].isSender = false;
        friendUsers.messages[_findIndex].isTyping = false;
        if (friendUsers.messages[_findIndex].letters.length === 1 && friendUsers.messages[_findIndex].letters[0].message === '') {
            friendUsers.messages[_findIndex].letters[0] = messageData;
        } else {
            friendUsers.messages[_findIndex].letters.push(messageData);
        }
    } else {
        friendUsers.messages.push({
            id: loggedUser.id,
            color: loggedUser.color,
            isSeen: false,
            isSender: false,
            isTyping: false,
            countMessagesDelivered: 1,
            fullName: loggedUser.fullName,
            letters: [messageData]
        })
    }
    await updateFriendUsers.update({'messages': friendUsers.messages});
    yield 'success'
}

export async function* __ADD_NEW_MESSAGE (id, pushData) {
    const db = fire.firestore();
    let currentUser = null;
    let updateCurrentUser = null;
    let friendUsers = {};
    await db.collection('users').where("email", "==", fire.auth().currentUser.email).get().then(res => {
        res.forEach(doc => {
            updateCurrentUser = db.doc(`users/${doc.data().id}`);
            currentUser = doc.data();
        })
    });
    await db.collection('users').doc(id).get().then(res => {
        friendUsers = res.data();
    });
    let messagesData = currentUser.messages;

    if (messagesData.findIndex(item => item.id === id) === -1) {
        messagesData.unshift({
            id: id,
            isSeen: true,
            isTyping: false,
            isSender: true,
            countMessagesDelivered: 0,
            color: friendUsers.color,
            fullName: friendUsers.fullName,
            letters: [pushData]
        });
    } else {
        const _currentIndex = messagesData.findIndex(item => item.id === id);
        const _saveData = messagesData[_currentIndex];
        if (messagesData[_currentIndex].letters.length === 1 && messagesData[_currentIndex].letters[0].time === null) {
            messagesData[_currentIndex].letters[0] = pushData;
        } else {
            messagesData[_currentIndex].letters.push(pushData);
        }
        messagesData[_currentIndex].isSeen = false;
        messagesData[_currentIndex].isTyping = false;
        messagesData[_currentIndex].isSender = true;
        messagesData.splice(_currentIndex, 1);
        messagesData.unshift(_saveData);
    }
    await updateCurrentUser.update({'messages': messagesData});

    yield messagesData;
}

export function * _rootSaga () {
    yield all([
        __SET_LOGGED,
        __GET_CHAT_USERS,
        __ADD_NEW_MESSAGE,
        __GET_ALL_USERS,
        __CHANGE_IS_SEEN,
        __ADD_FRIEND_MESSAGE,
        __GET_ACTIVE_USERS_MESSAGES,
        __IS_TYPING_TO_ACTIVE_USER
    ])
}