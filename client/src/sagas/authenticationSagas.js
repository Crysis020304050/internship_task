import {put} from 'redux-saga/effects';
import * as authenticationController from '../api/authentication';
import {authActionSuccess, authActionError, logoutResponse} from '../actions';
import history from "../browserHistory";
import {clearStorage} from "../utils";

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