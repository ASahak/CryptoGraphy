import rootReducer from 'store/reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { _rootSaga } from 'store/saga';

const composeEnhancers = compose;

const state = {
    chat: {
        activeUser: null,
        myChatUsers: null,
        allChatUsers: null
    },
    auth: {
        isLoading: true,
        isLogged: false
    }
};

export function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));
    store.runSaga = sagaMiddleware.run;
    return store;
}
const store = configureStore(state);

store.runSaga(_rootSaga);
export default store;