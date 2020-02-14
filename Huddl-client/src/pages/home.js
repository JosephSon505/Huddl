// Material-UI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import UserList from '../components/UserList';


import React, { Component, View, Button } from 'react';
//import { ChatkitProvider, TokenProvider } from '@pusher/chatkit-client-react';

import Chatscreen from '../components/Chatscreen';
import Sidebar from "../components/Sidebar";
const Chatkit = require('@pusher/chatkit-server');


const instanceLocator = 'v1:us1:3366eda2-e4d8-45c1-9f80-00f24eb6f202';
const key = '1f7ad742-25f6-4c95-ab73-740747059cb3:yD1HqPGZMZg1yZrWAK36oQvEiBckt54dNrmoJahyoLc=';

const chatkit = new Chatkit.default({
  instanceLocator: instanceLocator,
  key: key,
})


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
    })
    console.log("State: ", this.state);
    this.update();
    console.log("State: ndw ", this.state);
  }

  setUsers = (users) => {
    console.log("Users tag: ", users);
    this.setState((state) => ({   //Note to self when updating state
        users: users,
  
    }));
    // this.state = ({
    //   currentUser: this.state.currentUser,
    //   users: users,
    //   rooms: this.state.rooms,
    // })
  }
  
  setRooms = (rooms) => {
    this.setState( (state) => {   //Note to self when updating state
      return {
        rooms: rooms,
      }
    });
    // this.state = ({
    //   currentUser: this.state.currentUser,
    //   users: this.state.users,
    //   rooms: rooms,
    // })

  }

  update = () => {
    chatkit.getUsers()
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
        .then((res) => {
          console.log(res);
          this.setUsers(res);
        }).catch((err) => {
          console.log(err);
        });
    chatkit.getRooms({})
      .then(rooms => {
          console.log('got rooms', rooms);
          this.setRooms(rooms);
      }).catch(err => {
        console.error(err)
      })
  }

  // componentWillMount() {
  //   this.update();
  // }

  // componentDidMount() {
  //   this.update();
  // }

  render() {
    const { classes } = this.props;
    console.log(this.props.location);

    return (
      <div className={classes.container}>
        {/* <ChatkitProvider
              instanceLocator={instanceLocator}
              tokenProvider={tokenProvider}
              userId='jltanner@usc.edu'
            >
            </ChatkitProvider> */}
        <Grid container spacing={10}>

          <Grid item sm={4} xs={12}>
            <Sidebar />
          </Grid>

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

          <Grid item sm={12} xs={12}>
            <p>Messaging platform</p>
            <UserList users={this.state.users} />
          </Grid>

          {/* <buttonList users={null} /> */}
          

        </Grid>
        {/* <Chatscreen currentUsername={userId} ></Chatscreen> */}

      </div>
    );
  }
}

export default withStyles(styles)(home);