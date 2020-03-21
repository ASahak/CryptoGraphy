import {
    SET_IS_LOGGED,
    SET_IS_LOADING
} from '../types';

const auth = (state = {}, action) => {
    switch (action.type) {
        case SET_IS_LOGGED:
            return {...state, isLogged: action.payload};
        case SET_IS_LOADING:
            return {...state, isLoading: action.payload};
        default:
            return state;
    }
};
export default auth;