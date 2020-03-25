import {
    SET_IS_LOGGED,
    SET_IS_LOADING,
    MY_USERS,
    ALL_USERS,
    ACTIVE_USER
} from '../types';

export const __CHANGE_IS_LOGGED = (payload) => ({
    type: SET_IS_LOGGED,
    payload
});

export const __CHANGE_STATUS_IS_LOADING = (payload) => ({
    type: SET_IS_LOADING,
    payload
});
export const __SET_ALL_CHAT_USERS = (payload) => ({
    type: ALL_USERS,
    payload
});

export const __SET_MY_USERS_CHAT = (payload) => ({
    type: MY_USERS,
    payload
});

export const __SET_ACTIVE_USER = (payload) => ({
    type: ACTIVE_USER,
    payload
});
