import ACTION from './actionTypes';

export const authActionRequest = data => ({
    type: ACTION.USER_STORE.AUTH_ACTION_REQUEST,
    data,
});

export const authActionSuccess = (data) => ({
    type: ACTION.USER_STORE.AUTH_ACTION_SUCCESS,
    data,
});

export const authActionError = error => ({
    type: ACTION.USER_STORE.AUTH_ACTION_ERROR,
    error,
});

export const clearUserStoreError = () => ({
   type: ACTION.USER_STORE.CLEAR_USER_STORE_ERROR,
});