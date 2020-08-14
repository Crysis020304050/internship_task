import React, {lazy, Suspense, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import history from './browserHistory';
import Spinner from './components/Spinner';
import constants from './constants';
import {connect} from 'react-redux';
import {authActionRequest} from './actions';
import PrivateHoc from './components/HOCs/PrivateHoc';
import OnlyNotAuthorizedUserHoc from './components/HOCs/OnlyNotAuthorizedUserHoc';

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
                    <Route exact path='/login' component={OnlyNotAuthorizedUserHoc(LoginPage)}/>
                    <Route exact path='/registration' component={OnlyNotAuthorizedUserHoc(RegistrationPage)}/>
                    <Route exact path='/' component={PrivateHoc(HomePage)}/>
                </Switch>
            </Suspense>
        </Router>
    );
};

const mapDispatchToProps = dispatch => ({
    getUser: (data) => dispatch(authActionRequest(data)),
});

export default connect(null, mapDispatchToProps)(App);
