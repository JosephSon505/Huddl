import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// import pages
import landing from './pages/landing';
import login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path="/" component={landing} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/home" component={home} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
