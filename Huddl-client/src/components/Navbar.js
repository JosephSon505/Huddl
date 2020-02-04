import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material-UI Imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';


const styles = {
  // This group of buttons will be aligned to the right
  rightToolbar: {
    marginLeft: 'auto',
    marginRight: '20px',
  },
  title: {
    marginLeft: '20px',
  },
  leftToolBar: {
    marginRight: 'auto',
    marginLeft: '40px'
  },
  button: {
    marginLeft: '20px'
  }
};


class Navbar extends Component {

  render() {

    const { classes } = this.props;

    return (
      <AppBar color='secondary'>
        <Toolbar>
          <Typography variant='h4' color='primary' className={classes.title}>
            <div style={{ fontWeight: 'bold', fontSize: 40 }}>huddl</div>
          </Typography>

          <section className={classes.leftToolBar}>
            <Button className={classes.button} color="inherit" component={Link} to="/aboutus" >
              ABOUT US
            </Button>

            <Button className={classes.button} color="inherit" component={Link} to="/faq" >
              FAQ
            </Button>
          </section>

          <section className={classes.rightToolbar}>
            <Button className={classes.button} variant='contained' color='primary' component={Link} to="/signup" >
              Sign up
            </Button>

            <Button className={classes.button} variant='contained' color='primary' component={Link} to="/login" >
              Log In
            </Button>
          </section>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);