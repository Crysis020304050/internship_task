import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from "./userReducer";
import usersDataReducer from "./usersDataReducer";

export default combineReducers({
    form: formReducer,
    userStore: userReducer,
    usersDataStore: usersDataReducer,
});