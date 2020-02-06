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
      users: [],
      receiver: 'General'
    };

    this.setReceiver = this.setReceiver.bind(this);
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

  setReceiver(user) {
    this.setState({
      receiver: user
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <AppLayout>
        <Teams>Teams</Teams>

        <Sidebar
          ngo="Test"
          username="Joe"
          channels={[{ id: 1, name: 'General' }, { id: 2, name: 'Random' }, {id: 3, name: 'FAQ'}]}
          users={this.state.users}
          setReceiver = {this.setReceiver}
        />

        <Header channelName={this.state.receiver} />

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