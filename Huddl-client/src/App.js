import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Material-UI Imports
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import './App.css';

// import pages
import landing from './pages/landing';
import login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';
import aboutus from './pages/aboutus';
import faq from './pages/faq';

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

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className='App'>
          <Router>
            <Switch>
              <Route exact path="/" component={landing} />
              <Route exact path="/login" component={login} />
              <Route exact path="/signup" component={signup} />
              <Route exact path="/home" component={home} />
              <Route exact path="/aboutus" component={aboutus} />
              <Route exact path="/faq" component={faq} />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
