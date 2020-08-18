import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import constants from '../../../constants';

const PrivateRoute = props => {

    if (!localStorage.getItem(constants.TOKENS.REFRESH_TOKEN_KEY)) {
        return <Redirect to='/login'/>
    }
    return (
        <Route {...props}/>
    )
};

export default PrivateRoute;