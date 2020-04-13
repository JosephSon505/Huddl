// Material-UI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import React, { Component, View, Button } from 'react';
import Sidebar from "../components/Sidebar";
import Dashboard from '../components/Dashboard';

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
    height: '100VH',
    width: '100VW',
  },
  dashboardDiv: {
    width: '50%',
    height: '100VH',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
function buttonList(props) {
  const users = props.users;

  if (users) {
    return (
      <Grid item sm={8} xs={12}>
        {users.map(function (object) {
          return (
            <Button title="this is a Button" />
          );
        })}
      </Grid>
    );
  } else {
    return (
      <Grid item sm={8} xs={12}>
        <div>Hello</div>
      </Grid>
    );
  }
}

class home extends Component {

  constructor() {
    super();

    this.state = ({
      currentUser: '',
      users: [],
      rooms: [],
      currentroomid: '',
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Grid container spacing={0}
          direction={"row"}
        >
          <Grid item xs={1}>
            <Sidebar />
          </Grid>

          <Grid item xs={11}
            className={classes.dashboardDiv}>
            <Dashboard userrooms={this.state.rooms} />
          </Grid>

        </Grid>
      </div>

    );
  }
}

export default withStyles(styles)(home);