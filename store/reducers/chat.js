import {
    MY_USERS,
    ALL_USERS,
    ACTIVE_USER,
    MY_DATA,
    SET_USER_MESSAGES,
    LOAD_MORE_MESSAGES
} from '../types';

const chat = (state = {}, action) => {
    switch (action.type) {
        case LOAD_MORE_MESSAGES:
            return {...state, messagesPage: state.messagesPage += action.payload};
        case SET_USER_MESSAGES:
            return {...state, activeUserMessages: action.payload};
        case MY_DATA:
            return {...state, loggedUser: action.payload};
        case MY_USERS:
            return {...state, myChatUsers: action.payload};
        case ALL_USERS:
            action.payload && state.myChatUsers.map(item => {
                action.payload.splice(action.payload.findIndex(el => el.id === item.id), 1);
            });
            return {...state, allChatUsers: action.payload};
        case ACTIVE_USER:
            return {...state, activeUser: action.payload};
        default:
            return state;
    }
};
export default chat;