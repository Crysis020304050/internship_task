import {put} from 'redux-saga/effects';
import {getUsers, updateUserData} from '../api/rest';
import {getUsersSuccess, getUsersError, updateUserDataSuccess, updateUserDataError} from '../actions';

export function* getUsersSaga({filter}) {
    try {
        const users = yield getUsers(filter);
        yield put(getUsersSuccess(users));
    } catch (e) {
        yield put(getUsersError(e.response || e));
    }
}

export function* updateUserDataSaga({data}) {
    try {
        const user = yield updateUserData(data);
        yield put(updateUserDataSuccess(user));
    } catch (e) {
        yield put(updateUserDataError(e.response || e));
    }
}