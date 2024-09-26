import React from 'react';
import './App.css';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import OneFriend from './components/OneFriend'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          {/* <Route exact path="/" component={Login} /> */}
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={Friends} />
          <PrivateRoute path="/friends/:id" component={OneFriend} />
      </div>
    </Router>
  );
}

export default App;
