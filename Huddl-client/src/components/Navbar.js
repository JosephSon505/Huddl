import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material-UI Imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import '../css/header.css';

import { slide as Menu } from 'react-burger-menu';


const styles = {
  // This group of buttons will be aligned to the right
  rightToolbar: {
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyCointent: 'center',
    alignItems: 'center'
  },
  title: {
    marginLeft: '2%',
  },
  leftToolBar: {
    marginLeft: '7VW',
    paddingLeft: '1.5VW',
    paddingRight: '1.5VW',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: '3%',
    paddingLeft: '2VW',
    paddingRight: '2VW',
    width: '11VW'
  },
  mainBar: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '1VW',
    height: '3VW'
  },

};


class Navbar extends Component {


  render() {

    const { classes } = this.props;

    return (
      <AppBar color='secondary' position="static" elevation={0}>
        <Toolbar className={classes.mainBar}>


          <div className="title-desktop">
                <Typography variant='h4' color='inherit' className={classes.title}>
                  {/* <div style={{ fontWeight: 'bold', fontSize: 40 }}><a href="/">huddl</a></div> */}
                  <a href="/"><img src='https://i.ibb.co/7KTWVJ0/logo.png' height={30} /></a>
                </Typography>
              <section className={classes.leftToolBar}>
                <Button className={classes.button} color="inherit" component={Link} to="/aboutus" >
                  <b>About</b>
                </Button>
                <Button className={classes.button} color="inherit" component={Link} to="/faq" >
                  <b>FAQ</b>
                </Button>
                <Button className={classes.button} color="inherit" component={Link} to="/support" >
                  <b>Support</b>
                </Button>
                <Button className={classes.button} color="inherit" component={Link} to="/partners" >
                  <b>Partners</b>
                </Button>
              </section>
              <section className={classes.rightToolbar}>
                <Button className={classes.button} variant='outlined' color='inherit' disableElevation component={Link} to="/signup" >
                  Sign up
                </Button>
                <Button className={classes.button} variant='outlined' color='inherit' disableElevation component={Link} to="/login" >
                  Log In
                </Button>
              </section>
          </div>




          <div className="title-mobile">

          <section className={classes.leftToolBar}>
            <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/aboutus">About</a>
            <a id="faq" className="menu-item" href="/faq">FAQ</a>
            <a id="support" className="menu-item" href="/support">Support</a>
            <a id="partners" className="menu-item" href="/partners">Partners</a>
            
            </Menu>
          </section>

              <Typography variant='h4' color='inherit' className={classes.title}>
                  {/* <div style={{ fontWeight: 'bold', fontSize: 40 }}><a href="/">huddl</a></div> */}
                  <a href="/"><img src='https://i.ibb.co/7KTWVJ0/logo.png' height={30} /></a>  
              </Typography>

          <section className={classes.rightToolbar}>
            <Button className={classes.button} className="mobile-button" variant='outlined' color='inherit' disableElevation component={Link} to="/signup" >
              Sign up
            </Button>
            
            <Button className={classes.button} className="mobile-button" variant='outlined' color='inherit' disableElevation component={Link} to="/login" >
              Log In
            </Button>
          </section>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);