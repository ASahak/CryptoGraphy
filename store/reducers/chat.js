import {
    MY_USERS,
    ALL_USERS,
    ACTIVE_USER,
    MY_DATA,
    SET_USER_MESSAGES,
    LOAD_MORE_MESSAGES,
    STATUS_MODAL,
    SET_ENCRYPT_DATA,
    CHANGE_MOBILE_LIST_OPEN,
    SEND_MOBILE_MESSAGE_NOTIFY,
} from '../types';

const chat = (state = {}, action) => {
    switch (action.type) {
        case SET_ENCRYPT_DATA:
            return {...state, encryptData: {...state.encryptData,
                    ...(() => {
                        let makeObj ={};
                        if (action.payload instanceof Array) {
                            action.payload.map(obj => makeObj[obj.type] = obj.value)
                        } else makeObj[action.payload.type] = action.payload.value;
                        return makeObj;
                    })(),
            }};
        case STATUS_MODAL:
            return {...state, isShowModal: !state.isShowModal};
        case LOAD_MORE_MESSAGES:
            return {...state, messagesPage: state.messagesPage += action.payload};
        case SET_USER_MESSAGES:
            return {...state, activeUserMessages: action.payload};
        case CHANGE_MOBILE_LIST_OPEN:
            return {...state, mobileUsersListOpen: action.payload};
        case MY_DATA:
            return {...state, loggedUser: action.payload};
        case MY_USERS:
            return {...state, myChatUsers: action.payload};
        case SEND_MOBILE_MESSAGE_NOTIFY:
            return {...state, mobileNotifyNewMsg: action.payload};
        case ALL_USERS:
            action.payload && state.myChatUsers.map(item => {
                action.payload.splice(action.payload.findIndex(el => el.id === item.id), 1);
            });
            return {...state, allChatUsers: action.payload};
        case ACTIVE_USER:
            return {...state, activeUser: action.payload || {}};
        default:
            return state;
    }
};
export default chat;