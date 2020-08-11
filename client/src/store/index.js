import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware             from 'redux-saga';
import rootReducer from '../reducers'
import rootSaga from "../sagas";

const configureStore = () => {
    const sagaMW = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMW));
    sagaMW.run(rootSaga);
    return store;
};

export default configureStore();