import {takeLatest} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {registrationSaga, loginSaga, refreshTokenLoginSaga, logoutSaga} from './authenticationSagas';
import {getUsersSaga, updateUserDataSaga} from './usersDataSagas';

const {USER_STORE, USERS_DATA_STORE} = ACTION;

export default function* rootSaga() {
    yield takeLatest(USER_STORE.AUTH_ACTION_REGISTRATION_REQUEST, registrationSaga);
    yield takeLatest(USER_STORE.AUTH_ACTION_LOGIN_REQUEST, loginSaga);
    yield takeLatest(USER_STORE.AUTH_ACTION_REFRESH_TOKEN_LOGIN_REQUEST, refreshTokenLoginSaga);
    yield takeLatest(USER_STORE.LOGOUT_REQUEST, logoutSaga);
    yield takeLatest(USERS_DATA_STORE.GET_USERS_REQUEST, getUsersSaga);
    yield takeLatest(USERS_DATA_STORE.UPDATE_USER_DATA_REQUEST, updateUserDataSaga);
}