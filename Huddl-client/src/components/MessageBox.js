import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material-UI Imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//Chatkit Import
import { ChatkitProvider, TokenProvider, withChatkit, withChatkitOneToOne } from '@pusher/chatkit-client-react';

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

const instanceLocator = 'v1:us1:3366eda2-e4d8-45c1-9f80-00f24eb6f202';
//const userId = "jltanner@usc.edu";

const tokenProvider = new TokenProvider({
    url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3366eda2-e4d8-45c1-9f80-00f24eb6f202/token',
  });


class MessageBox extends Component {

  render() {

    const { classes } = this.props;

    return (
      <Container position='absolute' left='50%' top='50%' background='black'>
        <div className="messageBox">
            <ChatkitProvider
                instanceLocator={instanceLocator}
                tokenProvider={tokenProvider}
                userId={this.props.userId}>
              <WelcomeMessage />
            </ChatkitProvider>
        </div>
      </Container>
    );
  }
}

const WelcomeMessage = withChatkit(props => {
    return (
      <div style={{position: 'absolute', left: '50%', top: '50%'}}>
        {props.chatkit.isLoading
          ? 'Connecting to Chatkit...'
          : `Hello ${props.chatkit.currentUser.name}!`}
      </div>
    );
  });

export default withStyles(styles)(MessageBox);