import {put} from 'redux-saga/effects';
import {getUsers, updateUserData} from '../api/rest';
import {getUsersSuccess, getUsersError, updateUserDataSuccess, updateUserDataError} from '../actions';

export function* getUsersSaga({filter}) {
    try {
        const {data} = yield getUsers(filter);
        yield put(getUsersSuccess(data));
    } catch (e) {
        yield put(getUsersError(e.response || e));
    }
}

export function* updateUserDataSaga(action) {
    try {
        const {data} = yield updateUserData(action.data);
        yield put(updateUserDataSuccess(data));
    } catch (e) {
        yield put(updateUserDataError(e.response || e));
    }
}