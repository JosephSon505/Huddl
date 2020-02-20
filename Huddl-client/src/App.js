import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Material-UI Imports
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getUserData } from './redux/actions/userActions';
import { SET_AUTHENTICATED } from './redux/types';

import './App.css';

// redux
import {Provider} from 'react-redux';
import store from './redux/store';

// import pages
import landing from './pages/landing';
import login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';
import aboutus from './pages/aboutus';
import faq from './pages/faq';
import support from './pages/support';
import partners from './pages/partners';

// theme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#77D2B8',
      main: '#1EA37D',
      dark: '#1EA37D',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#ffffff',
      contrastText: '#000000'
    }
  }
});

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    // store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store} >
          <div className='App'>
            <Router>
              <Switch>
                <Route exact path="/" component={landing} />
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signup} />
                <Route exact path="/home" component={home} />
                <Route exact path="/aboutus" component={aboutus} />
                <Route exact path="/faq" component={faq} />
                <Route exact path="/support" component={support} />
                <Route exact path="/partners" component={partners} />
              </Switch>
            </Router>
          </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App;
