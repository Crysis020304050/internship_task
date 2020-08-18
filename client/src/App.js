import React, {lazy, Suspense, useEffect} from 'react';
import {Router, Switch} from 'react-router-dom';
import history from './browserHistory';
import Spinner from './components/Spinner';
import constants from './constants';
import {connect} from 'react-redux';
import {authActionRefreshTokenLoginRequest} from './actions';
import PrivateRoute from "./components/Routes/PrivateRoute";
import OnlyNotAuthorizedUserRoute from "./components/Routes/OnlyNotAuthorizedUserRoute";

const LoginPage = lazy(() => import('./pages/AuthPages/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/AuthPages/RegistrationPage'));
const HomePage = lazy(() => import('./pages/HomePage'));

const App = ({getUser}) => {

    useEffect(() => {
        const refreshToken = localStorage.getItem(constants.TOKENS.REFRESH_TOKEN_KEY);
        if (refreshToken) {
            getUser({refreshToken});
        }
    }, []);

    return (
        <Router history={history}>
            <Suspense fallback={<Spinner/>}>
                <Switch>
                    <OnlyNotAuthorizedUserRoute exact path='/login' component={LoginPage}/>
                    <OnlyNotAuthorizedUserRoute exact path='/registration' component={RegistrationPage}/>
                    <PrivateRoute exact path='/' component={HomePage}/>
                </Switch>
            </Suspense>
        </Router>
    );
};

const mapDispatchToProps = dispatch => ({
    getUser: (data) => dispatch(authActionRefreshTokenLoginRequest(data)),
});

export default connect(null, mapDispatchToProps)(App);
