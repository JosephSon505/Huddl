import React, { Component } from 'react';
import axios from 'axios';

// Styled Components Imports
import Sidebar from '../components/Sidebar';
import Teams from '../components/Teams';
import Header from '../components/Header';
import Messages from '../components/Messages';
import SendMessage from '../components/Input';
import AppLayout from '../components/AppLayout';

// Material-UI Imports
import withStyles from '@material-ui/core/styles/withStyles';

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

  constructor() {
    super();

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    // get all users on the same team and then store in state
    axios.get('/users').then(res => {
      this.setState({
        users: res.data
      });
      console.log(this.state.users)
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <AppLayout>
        <Teams>Teams</Teams>

        <Sidebar
          ngo="Test"
          username="Joe"
          channels={[{ id: 1, name: 'general' }, { id: 2, name: 'random' }]}
          users={this.state.users}
        />

        <Header channelName='ChannelName' />

        <Messages>
          <ul className="message-list">
            <li></li>
            <li></li>
          </ul>
        </Messages>

        <SendMessage />
      </AppLayout>
    );
  }
}

export default withStyles(styles)(home);