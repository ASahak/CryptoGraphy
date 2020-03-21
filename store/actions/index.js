import {
    SET_IS_LOGGED,
    SET_IS_LOADING
} from '../types';

export const CHANGE_IS_LOGGED = (payload) => ({
    type: SET_IS_LOGGED,
    payload
});

export const CHANGE_STATUS_IS_LOADING = (payload) => ({
    type: SET_IS_LOADING,
    payload
});


