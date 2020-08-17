import ACTION from '../actions/actionTypes';

const {USER_STORE} = ACTION;

const initialState = {
    isFetching: false,
    error: null,
    data: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_STORE.AUTH_ACTION_REGISTRATION_REQUEST:
        case USER_STORE.AUTH_ACTION_LOGIN_REQUEST:
        case USER_STORE.AUTH_ACTION_REFRESH_TOKEN_LOGIN_REQUEST:
        case USER_STORE.LOGOUT_REQUEST: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case USER_STORE.AUTH_ACTION_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                data: action.data,
            }
        }
        case USER_STORE.AUTH_ACTION_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        case USER_STORE.CLEAR_USER_STORE_ERROR:{
            return{
                ...state,
                error: null
            }
        }
        case USER_STORE.LOGOUT_RESPONSE: {
            return initialState;
        }
        default:
            return state;
    }
}