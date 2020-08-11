import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import history from './browserHistory';
import Spinner from './components/Spinner';

const LoginPage = lazy(() => import('./pages/AuthPages/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/AuthPages/RegistrationPage'));

const App = props => {

    return (
        <Router history={history}>
            <Suspense fallback={<Spinner/>}>
                <Switch>
                    <Route exact path='/login' component={LoginPage}/>
                    <Route exact path='/registration' component={RegistrationPage}/>
                    <Route exact path='/'/>
                </Switch>
            </Suspense>
        </Router>
    );
};

export default App;
