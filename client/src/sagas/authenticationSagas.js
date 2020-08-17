import {put} from 'redux-saga/effects';
import * as authenticationController from '../api/authentication';
import {authActionSuccess, authActionError, logoutResponse} from '../actions';
import history from "../browserHistory";
import {clearStorage} from "../utils";
import {updateSyncErrors} from 'redux-form';

export function* authenticationSaga({data}) {
    try {
        const keysLength = Object.keys(data).length;
        const response = keysLength > 1
            ? keysLength > 2
                ? yield authenticationController.registerRequest(data)
                : yield authenticationController.loginRequest(data)
            : yield authenticationController.loginUserByRefreshToken(data);
        const {data: {user}} = response;
        yield put(authActionSuccess(user));
    } catch (e) {
        if (e.response) {
            const {response: {data, status}} = e;
            switch (status) {
                case 403: {
                    yield put(updateSyncErrors('login', {password: data}));
                    break;
                }
                case 404: {
                    yield put(updateSyncErrors('login', {email: data}));
                    break;
                }
                case 409: {
                    yield put(updateSyncErrors('registration', {email: 'This email is already in use'}));
                    break;
                }
                default: break;
            }
        }
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