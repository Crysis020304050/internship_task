import React, {Suspense} from 'react';
import './App.css';
import {Router, Route, Switch} from 'react-router-dom';
import browserHistory from './browserHistory';
import Spinner from "./components/Spinner";

const App = props => {

  return (
    <Router history={browserHistory}>
      <Suspense fallback={Spinner}>
        <Switch>
          <Route exact path='/login'/>
          <Route exact path='/registration'/>
          <Route exact path='/'/>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
