import { all, put,call } from 'redux-saga/effects';
import {
    __CHANGE_IS_LOGGED,
    __SET_MY_USERS_CHAT,
    __SET_ALL_CHAT_USERS
} from '../actions';
import store from 'store';
import fire from "config/fire";

export function* __SET_LOGGED(action) {
    yield put(store.dispatch(__CHANGE_IS_LOGGED(action)));
}

export async function* __GET_ALL_USERS () {
    const db = fire.firestore();
    const fakeObj ={};
    await db.collection('users')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                fakeObj[doc.id] = {...doc.data()}
            });
        });

    yield put(store.dispatch(__SET_ALL_CHAT_USERS(fakeObj)))
}

export async function* __GET_CHAT_USERS(data) {
    const db = fire.firestore();
    const usersData = {};
    if (data) {
        yield put(store.dispatch(__SET_MY_USERS_CHAT(data)));
    } else {
        await db.collection('users').where("email", "==", fire.auth().currentUser.email)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    Object.keys(doc.data().messages).forEach(user => {
                        usersData[user] = {...doc.data().messages[user].pop()}
                    })
                });
            });
        yield put(store.dispatch(__SET_MY_USERS_CHAT(usersData)));
    }
}

export async function* __GET_ACTIVE_USERS_MESSAGES (data) {
    let _messages = [];
    const db = fire.firestore();
    let friendUsers = db.doc(`users/${data}`);
    await db.collection('users').doc(data).get().then(res => {
        friendUsers = res.data();
    });
    await new Promise (resolve => {
        db.collection('users').where("email", "==", fire.auth().currentUser.email)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (!doc.data().messages.hasOwnProperty(data)) {
                        const messagesData = doc.data().messages;
                        const docUsers = db.doc(`users/${doc.data().id}`);
                        messagesData[data] = [{
                            color: friendUsers.color,
                            fullName: friendUsers.fullName,
                            message: '',
                        }];
                        docUsers.update({'messages': messagesData}).then(_ => resolve())
                    } else {
                        Object.keys(doc.data().messages).forEach(user => {
                            if (user === data) {
                                _messages = [...doc.data().messages[user]]
                            }
                        })
                    }
                });
            });
    });
    yield _messages;
}


export function * _rootSaga () {
    yield all([
        __SET_LOGGED,
        __GET_CHAT_USERS,
        __GET_ALL_USERS,
        __GET_ACTIVE_USERS_MESSAGES
    ])
}