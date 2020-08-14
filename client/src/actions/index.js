import ACTION from './actionTypes';

const {USER_STORE, USERS_DATA_STORE} = ACTION;

export const authActionRequest = data => ({
    type: USER_STORE.AUTH_ACTION_REQUEST,
    data,
});

export const authActionSuccess = (data) => ({
    type: USER_STORE.AUTH_ACTION_SUCCESS,
    data,
});

export const authActionError = error => ({
    type: USER_STORE.AUTH_ACTION_ERROR,
    error,
});

export const clearUserStoreError = () => ({
   type: USER_STORE.CLEAR_USER_STORE_ERROR,
});

export const logoutRequest = (data) => ({
    type: USER_STORE.LOGOUT_REQUEST,
    data,
});

export const logoutResponse = () => ({
    type: USER_STORE.LOGOUT_RESPONSE,
});

export const getUsersRequest = (filter) => ({
    type: USERS_DATA_STORE.GET_USERS_REQUEST,
    filter,
});

export const getUsersSuccess = (users) => ({
    type: USERS_DATA_STORE.GET_USERS_SUCCESS,
    users,
});

export const getUsersError = (error) => ({
    type: USERS_DATA_STORE.GET_USERS_ERROR,
    error,
});

export const updateUserDataRequest = (data) => ({
    type: USERS_DATA_STORE.UPDATE_USER_DATA_REQUEST,
    data,
});

export const updateUserDataSuccess = (user) => ({
    type: USERS_DATA_STORE.UPDATE_USER_DATA_SUCCESS,
    user,
});

export const updateUserDataError = (error) => ({
    type: USERS_DATA_STORE.UPDATE_USER_DATA_ERROR,
    error,
});

export const openUserEditingForm = (user) => ({
    type: USERS_DATA_STORE.OPEN_USER_EDITING_FORM,
    user,
});

export const closeUserEditingForm = () => ({
    type: USERS_DATA_STORE.CLOSE_USER_EDITING_FORM,
});

export const clearUsersDataStoreError = () => ({
    type: USERS_DATA_STORE.CLEAR_USERS_DATA_STORE_ERROR,
});