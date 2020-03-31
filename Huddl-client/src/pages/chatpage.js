// Material-UI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import React, { Component, View, Button } from 'react';
import Talk from "talkjs";
import store from '../redux/store'

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
    alignItems:'center',
    justifyContent: 'center'
  },
  chatboxContainer: {
    height: 400,
  }
};





class chatpage extends Component {

  constructor() {
    super();
    this.inbox = undefined;   
    this.state = ({
      currentUser: '',
      users: [],
      rooms: [],
      roomComponents: [],
      currentroomid: '',
    })

    this.rid = '';

  }

  componentDidMount() {
    console.log("Hi I have been called");
    const userCreds = store.getState().user.credentials;
    Talk.ready.then(() => {
        const me = new Talk.User({
            id: userCreds.userID,
            name: userCreds.firstName + " " + userCreds.lastName,
            email: userCreds.email,
            photoUrl: "https://demo.talkjs.com/img/marco.jpg",
            welcomeMessage: "Hey there! How are you? :-)"
        });

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
              appId: "tVMpFCbr",
              me: me
          });
        }
    
        const other = new Talk.User({
          id: "654321",
          name: "Sebastian",
          email: "Sebastian@example.com",
          photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
          welcomeMessage: "Hey, how can I help?"
        });

        // You control the ID of a conversation. oneOnOneId is a helper method that generates
        // a unique conversation ID for a given pair of users. 
        const conversationId = Talk.oneOnOneId(me, other);

        const conversation = window.talkSession.getOrCreateConversation(conversationId);
        conversation.setParticipant(me);
        conversation.setParticipant(other);
    
        this.inbox = window.talkSession.createInbox({
            selected: conversation
        });
        this.inbox.mount(this.container);


    }).catch(e => console.error(e));
  }

  componentWillUnmount() {
    if (this.inbox) {
        this.inbox.destroy();
    }
  }

  render() {
    return (<span>
      <div style={{height: '500px'}} ref={c => this.container = c}>Loading...</div>
    </span>);
  }
}

export default withStyles(styles)(chatpage);