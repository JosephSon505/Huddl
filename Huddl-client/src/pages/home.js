// Material-UI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import UserList from '../components/UserList';
import Dashboard from '../components/Dashboard';


import React, { Component, View, Button } from 'react';
import { Link } from 'react-router-dom';
import { ChatFill} from 'react-bootstrap-icons';

//import { ChatkitProvider, TokenProvider } from '@pusher/chatkit-client-react';

import Chatscreen from '../components/Chatscreen';
import Sidebar from "../components/Sidebar";

import Chatscreen2 from '../components/Chatscreen2';

import store from '../redux/store';

const Chatkit = require('@pusher/chatkit-server');

const instanceLocator = 'v1:us1:3366eda2-e4d8-45c1-9f80-00f24eb6f202';
const key = '1f7ad742-25f6-4c95-ab73-740747059cb3:yD1HqPGZMZg1yZrWAK36oQvEiBckt54dNrmoJahyoLc=';

const chatkit = new Chatkit.default({
  instanceLocator: instanceLocator,
  key: key,
})

// const thereapistIds = [
//   {id: 'therapist1@usc.edu', roomid: 'efdd87cf-122f-4099-92cf-834180f3bff1'},
//   {id: 'therapist2@usc.edu', roomid: 'edbaf2c9-8e43-4847-8498-3c07c969cfa2'},
//   {id: 'therapist3@usc.edu', roomid: '4e92e294-0274-4d0a-928a-7fbb2b2b0e04'},
// ]

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
  }
};

// const tokenProvider = new TokenProvider({
//   url: '<https://us1.pusherplatform.io/services/chatkit_token_provider/v1/9a9699f8-9213-45c5-aa54-bf106dd7ead9/token>',
// });

function buttonList(props) {
  const users = props.users;
  
  if(users) {
    return (
      <Grid item sm={8} xs={12}>
            {users.map(function(object) {
              return (
                <Button title="this is a Button"/>
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
    // console.log("props", this.props);
    // console.log("State: ", this.state);
    // //this.update();
    // console.log("State: ndw ", this.state);
  }

  setRoomId = (event) => {
    //console.log(event.target.value)
    const roomid = event.target.attributes.roomid;
    //console.log("roomid", roomid)
    this.setState((state) => ({   //Note to self when updating state
        currentroomid: roomid.value,
    }));
    // console.log("CurrentRoomId set to: ", this.state.currentroomid);
  }

  setUsers = (users) => {
    //console.log("Users tag: ", users);
    this.setState((state) => ({   //Note to self when updating state
        users: users,
  
    }));
    // console.log("Users in state: ", this.state.users);

  }

  
  setRooms = (rooms) => {
    //const r = rooms.map((room.) => )
    // console.log(rooms);
    this.setState( (state, props) => ({   //Note to self when updating state
        rooms: rooms,
        currentUser: store.getState().user.credentials.email,
    }));
    // this.state = ({
    //   currentUser: this.state.currentUser,
    //   users: this.state.users,
    //   rooms: rooms,
    // })

  }

  update = () => {
    chatkit.getUsers()
        .then((res) => {
          //console.log(res);
          this.setUsers(res);
        }).catch((err) => {
          console.log(err);
        });
        //console.log("Email used: ",this.props.location.userData.email);
        // this.setState( (state) => ({   //Note to self when updating state
        //     currentUser: this.props.location.userData.email,
        // }))
    // chatkit.getRooms({})
    
    //console.log("User ID: ", this.state.currentUser);
    chatkit.getUserRooms({
      userId: store.getState().user.credentials.email,
    })
      .then(rooms => {
        // console.log('got rooms', rooms);
        this.setRooms(rooms);
    }).catch(err => {
      console.error(err)
    })

  }

  // componentWillMount() {
  //   this.update();
  // }

  componentDidMount() {
    this.update();
  }

  render() {
    const { classes } = this.props;
    
    // console.log("Store: ", store.getState());

    //console.log("Rendering with state: ", this.state);
    //chats.push(<Chatscreen2 currentusername={this.props.location.userData.email} currentroomid={this.state.currentroomid}></Chatscreen2>);
    // console.log(chats);

    return (
      <div className={classes.container}>
        {/* <ChatkitProvider
              instanceLocator={instanceLocator}
              tokenProvider={tokenProvider}
              userId='jltanner@usc.edu'
            >
            </ChatkitProvider> */}
        <Grid container spacing={0}
        direction={"row"}
        >
          <Grid item xs={1}>
            <Sidebar />
            </Grid>
          
            <Grid item xs = {11}
            className={classes.dashboardDiv}>
              <Dashboard />
            </Grid>
          <Grid item xs={1}>
            <p>Messaging platform</p>
            {/* <UserList users={thereapistIds} /> */}
                <ul>
                        {this.state.rooms.map((room) => (<li key={room.name}> <Link to={`/chatpage/${room.id}`}>{room.name}<ChatFill /> </Link> </li>))}
                        {/* {this.state.rooms.map((room) => (<li key={room.name}><button onClick={this.setRoomId} roomid={room.id}>{room.name}</button></li>))} */}
                </ul>
          </Grid>
            
          

          {/* <buttonList users={null} /> */}
          

        </Grid>
        {/*    <Chatscreen currentUsername={this.props.location.userData.email} currentRoomId={this.state.currentRoomId}  ></Chatscreen> */}
        
      </div>
    );
  }
}

export default withStyles(styles)(home);