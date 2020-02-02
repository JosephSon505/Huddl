import React, { Component } from 'react';

// Material-UI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  borderRight: {
    borderRight: '1px solid black',
    backgroundColor: '#1EA37D',
    height: '100%'
  }, 
  card: {
    backgroundColor: '#1EA37D',
  },
  container: {
    height: '100%'
  }
};

class home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.container }>
        <Grid container spacing={10}>
          <Grid item sm={4} xs={12} className={classes.borderRight}>
            <Typography variant='h4'>
              Profile Section
            </Typography>

            <Typography variant='h4'>
              Forums
            </Typography>

            <Typography variant='h4'>
              Direct Messages
            </Typography>


            <Typography variant='h4'>
              Telepsychiatry
            </Typography>
            
          </Grid>

          <Grid item sm={8} xs={12}>
            <p>Messaging platform</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(home);