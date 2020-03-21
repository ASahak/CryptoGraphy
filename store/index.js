import rootReducer from 'store/reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from 'store/saga';

const composeEnhancers = compose;

const state = {
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

store.runSaga(rootSaga);
export default store;