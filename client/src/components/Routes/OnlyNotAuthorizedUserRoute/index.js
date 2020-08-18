import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import constants from '../../../constants';

const OnlyNotAuthorizedUserRoute = props => {

    if (localStorage.getItem(constants.TOKENS.REFRESH_TOKEN_KEY)) {
        return <Redirect to='/'/>
    }
    return (
        <Route {...props}/>
    )
};

export default OnlyNotAuthorizedUserRoute;