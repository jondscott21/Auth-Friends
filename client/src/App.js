import React from 'react';
import './App.css';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          {/* <Route exact path="/" component={Login} /> */}
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={Friends} />
      </div>
    </Router>
  );
}

export default App;
