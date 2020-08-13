import ACTION from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    error: null,
    data: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.USER_STORE.AUTH_ACTION_REQUEST: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case ACTION.USER_STORE.AUTH_ACTION_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                data: action.data,
            }
        }
        case ACTION.USER_STORE.AUTH_ACTION_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        case ACTION.USER_STORE.CLEAR_USER_STORE_ERROR:{
            return{
                ...state,
                error: null
            }
        }
        default:
            return state;
    }
}