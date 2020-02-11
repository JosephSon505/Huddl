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
  },

};


class Navbar extends Component {


  render() {

    const { classes } = this.props;

    return (
      <AppBar color='secondary' position="static" elevation = {0}>
        <Toolbar className={classes.mainBar}>
          <Typography variant='h4' color='inherit' className={classes.title}>
            <div style={{ fontWeight: 'bold', fontSize: 40 }}>huddl</div>
          </Typography>

          <section className={classes.leftToolBar}>
            <Button className={classes.button} color="inherit" component={Link} to="/aboutus" >
            <b>About</b>
            </Button>
            <Button className={classes.button} color="inherit" component={Link} to="/faq" >
            <b>FAQ</b>
            </Button>
            <Button className={classes.button} color="inherit" component={Link} to="/faq" >
            <b>Support</b>
            </Button>
            <Button className={classes.button} color="inherit" component={Link} to="/faq" >
            <b>Partners</b>
            </Button>
          </section>

          <section className={classes.rightToolbar}>
            <Button className={classes.button} variant='outlined' color='inherit' component={Link} to="/signup" >
              Sign up
            </Button>

            <Button className={classes.button} variant='outlined' color='inherit' component={Link} to="/login" >
              Log In
            </Button>
          </section>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);