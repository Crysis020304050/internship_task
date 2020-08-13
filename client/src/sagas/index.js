import {takeLatest} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {authenticationSaga} from './authenticationSaga';

export default function* rootSaga () {
    yield takeLatest(ACTION.USER_STORE.AUTH_ACTION_REQUEST, authenticationSaga);
}