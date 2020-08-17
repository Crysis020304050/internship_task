import ACTION from '../actions/actionTypes';

const {USER_STORE, USERS_DATA_STORE} = ACTION;

const initialState = {
    isFetching: false,
    error: null,
    users: [],
    hasMore: true,
    currentEditingUser: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USERS_DATA_STORE.GET_USERS_REQUEST:
        case USERS_DATA_STORE.UPDATE_USER_DATA_REQUEST: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case USERS_DATA_STORE.GET_USERS_SUCCESS: {
            const {users, hasMore} = action;
            return {
                ...state,
                users: [...state.users, ...users],
                hasMore,
                isFetching: false,
            }
        }
        case USERS_DATA_STORE.UPDATE_USER_DATA_SUCCESS: {
            const updatedUsers = state.users.map(user => {
                if (user.id === action.user.id) {
                    return action.user;
                }
                return user;
            });
            return {
                ...state,
                currentEditingUser: null,
                isFetching: false,
                users: updatedUsers,
            }
        }
        case USERS_DATA_STORE.GET_USERS_ERROR:
        case USERS_DATA_STORE.UPDATE_USER_DATA_ERROR: {
            return {
                ...state,
                error: action.error,
                isFetching: false,
            }
        }
        case USERS_DATA_STORE.OPEN_USER_EDITING_FORM: {
            return {
                ...state,
                currentEditingUser: action.user,
            }
        }
        case USERS_DATA_STORE.CLOSE_USER_EDITING_FORM: {
            return {
                ...state,
                currentEditingUser: null,
            }
        }
        case USERS_DATA_STORE.CLEAR_USERS_DATA_STORE_ERROR: {
            return {
                ...state,
                error: null,
            }
        }
        case USER_STORE.LOGOUT_RESPONSE: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}