import {put} from 'redux-saga/effects';
import * as authenticationController from '../api/authentication';
import {authActionSuccess, authActionError} from '../actions';

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