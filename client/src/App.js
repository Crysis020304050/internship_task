import React, {Suspense} from 'react';
import './App.css';
import {Router, Switch, Route} from 'react-router-dom';
import history from './browserHistory';
import Spinner from "./components/Spinner";
import LoginPage from "./pages/LoginPage";

const App = props => {

  return (
    <Router history={history}>
      <Suspense fallback={Spinner}>
        <Switch>
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/registration'/>
          <Route exact path='/'/>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
