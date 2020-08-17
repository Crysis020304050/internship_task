import {put} from 'redux-saga/effects';
import * as authenticationController from '../api/authentication';
import {authActionSuccess, authActionError, logoutResponse} from '../actions';
import history from "../browserHistory";
import {clearStorage} from "../utils";
import {updateSyncErrors} from 'redux-form';

export function* registrationSaga({data}) {
    try {
        const {data: {user}} = yield authenticationController.registerRequest(data);
        yield put(authActionSuccess(user));
    } catch (e) {
        const {response} = e;
        if (response && response.status === 409) {
            yield put(updateSyncErrors('registration', {email: 'This email is already in use'}));
            yield put(authActionError());
        } else {
            yield put(authActionError(response || e));
        }
    }
}

export function* loginSaga({data}) {
    try {
        const {data: {user}} = yield authenticationController.loginRequest(data);
        yield put(authActionSuccess(user));
    } catch (e) {
        const {response} = e;
        if (response) {
            const {data, status} = response;
            switch (status) {
                case 403: {
                    yield put(updateSyncErrors('login', {password: data}));
                    yield put(authActionError());
                    break;
                }
                case 404: {
                    yield put(updateSyncErrors('login', {email: data}));
                    yield put(authActionError());
                    break;
                }
                default: yield put(authActionError(response));
            }
        } else {
            yield put(authActionError(e));
        }
    }
}

export function* refreshTokenLoginSaga({data}) {
    try {
        const {data: {user}} = yield authenticationController.loginUserByRefreshToken(data);
        yield put(authActionSuccess(user));
    } catch (e) {
        yield put(authActionError(e.response || e));
    }
}

export function* logoutSaga({data}) {
    try {
        yield authenticationController.logout(data);
    } catch (e) {
        throw e;
    } finally {
        yield put(logoutResponse());
        clearStorage();
        history.replace('/login');
    }
}