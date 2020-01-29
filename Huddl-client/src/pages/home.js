import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class home extends Component {
  render() {
    return (
      <div className='container'>
        <Grid container spacing={10}>
          <Grid item sm={2} xs={12}>
            <p>Users / Groups</p>
          </Grid>
          <Grid item sm={10} xs={12}>
            <p>Messaging platform</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default home;