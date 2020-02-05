import React, { Component } from 'react';

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

  render() {
    const { classes } = this.props;

    return (
      <AppLayout>
        <Teams>Teams</Teams>

        <Sidebar
          ngo="Test"
          username="Joe"
          channels={[{id: 1, name: 'general'}, {id: 2, name: 'random'}]}
          users={[{id: 1, name: 'slackbot'}, {name:2, name: 'user1'}]}
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