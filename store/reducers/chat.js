import {
    MY_USERS,
    ALL_USERS,
    ACTIVE_USER
} from '../types';

const chat = (state = {}, action) => {
    switch (action.type) {
        case MY_USERS:
            return {...state, myChatUsers: action.payload};
        case ALL_USERS:
            return {...state, allChatUsers: action.payload};
        case ACTIVE_USER:
            return {...state, activeUser: action.payload};
        default:
            return state;
    }
};
export default chat;