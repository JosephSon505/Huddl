// Material-UI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import React, { Component, View, Button } from 'react';
import UserList from '../components/UserList';
import Talk from "talkjs";
import store from '../redux/store';
import axios from 'axios';

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

axios.defaults.baseURL = 'https://us-central1-letshuddl.cloudfunctions.net/api';

const users = [{'id': '123456', 'name': 'John', 'email': 'jltanner@gmail.com'}, 
                {'id': '654321', 'name': 'Johnny', 'email': 'jl@gmail.com'},
                {'id': '321654', 'name': 'Joe', 'email': 'tanner@gmail.com'}] 


class chatpage extends Component {

  constructor() {
    super();
    this.inbox = undefined;   
    this.state = ({
      currentUser: {},
      userSelected: {}, 
      users: [],
      rooms: [],
      roomComponents: [],
      currentroomid: '',
    })

    this.rid = '';
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  handleButtonClick = (user) => {
    if (!window.talkSession) {
      window.talkSession = new Talk.Session({
          appId: "tVMpFCbr",
          me: this.state.currentUser
      });
    }

    const other = new Talk.User({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    this.setState({userSelected: other});

    const conversationId = Talk.oneOnOneId(this.state.currentUser, other);
    const conversation = window.talkSession.getOrCreateConversation(conversationId);
    conversation.setParticipant(this.state.currentUser);
    conversation.setParticipant(other);

    this.inbox = window.talkSession.createInbox({
      selected: conversation
    });
    this.inbox.mount(this.container);

  }
  
  getAllUsers() {
    const me = store.getState().user.credentials;
    axios.get('/allUsers').then(userList => {
      //TODO: Remove self from the list
      this.setState({
        users: userList.data
      })
    });
  }

  componentDidMount() {
    const userCreds = store.getState().user.credentials;
    Talk.ready.then(() => {
        const me = new Talk.User({
            id: userCreds.userID,
            name: userCreds.firstName + " " + userCreds.lastName,
            email: userCreds.email,
            photoUrl: "https://demo.talkjs.com/img/marco.jpg",
            welcomeMessage: "Hey there! How are you? :-)"
        });

        this.setState({currentUser: me});

        //Create talk session for first time if haven't yet
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

        const other2 = new Talk.User({
          id: "1234",
          name: "Joe", 
          email: "joe@gmail.com", 
          welcomeMessage: "Hi this is joe!"
        });

        //For now we set the userSelected to other but this will be dynamic eventually
        this.setState({userSelected: other2})

        // You control the ID of a conversation. oneOnOneId is a helper method that generates
        // a unique conversation ID for a given pair of users. 

        const conversationId2 = Talk.oneOnOneId(me, other2);
        const conversation2 = window.talkSession.getOrCreateConversation(conversationId2);
        conversation2.setParticipant(me);
        conversation2.setParticipant(other2);
        
    
        this.inbox = window.talkSession.createInbox({
            selected: conversation2
        });
        this.inbox.mount(this.container);

        this.getAllUsers();

    }).catch(e => console.error(e));
  }

  componentWillUnmount() {
    if (this.inbox) {
        this.inbox.destroy();
    }
  }

  render() {
    return (
      <div>
        <span>
          <div style={{height: '500px'}} ref={c => this.container = c}>Loading...</div>
        </span>
        <UserList callbackClick={this.handleButtonClick} users={this.state.users}>Hey There</UserList>
      </div>
    );
  }
}

export default withStyles(styles)(chatpage);