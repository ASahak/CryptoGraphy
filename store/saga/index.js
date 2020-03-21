import { all, put } from 'redux-saga/effects';
import { CHANGE_IS_LOGGED } from '../actions';
import store from 'store';

export function* SET_LOGGED(action) {
    yield put(store.dispatch(CHANGE_IS_LOGGED(action)));
}

export function * rootSaga () {
    yield all([
        SET_LOGGED
    ])
}