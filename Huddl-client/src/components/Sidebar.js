import React, { Component } from 'react';

// Styled Components Imports
import styled from 'styled-components';

// Material UI Imports
import Typography from '@material-ui/core/Typography';

const ChannelWrapper = styled.div`
    grid-column: 2;
    grid-row: 1 / 4;
    background-color: #1EA37D;
    color: white;
`;

const Container = styled.div`
  width: 92%;
  margin: 2%;
`;

// const channel = ({ id, name }) => <li key={`channel-${id}`}>{name}</li>;
// const user = (user) => (
//   <li key={`user-${user.userID}`}>{user.handle}</li>
// );

// export default ({ ngo, username, channels, users }) => (
//   <ChannelWrapper>
//     <Container>
//       <div>
//         <Typography variant="h4">
//           {ngo}
//         </Typography>
//         <Typography variant="h5">
//           {username}
//         </Typography>
//       </div>

//       <div>
//         <Typography variant="h6">
//           Channels
//         </Typography>
//         <ul>
//           {channels.map(channel)}
//         </ul>
//       </div>

//       <div>
//         <Typography variant="h6">
//           Direct Messages
//         </Typography>
//         <ul>
//           {users.map(user)}
//         </ul>
//       </div>
//     </Container>
//   </ChannelWrapper>
// );

class Sidebar extends Component {

  constructor() {
    super();

    this.state = {
      activeChat: 'General'
    };

    this.mapChannels = this.mapChannels.bind(this);
    this.mapUsers = this.mapUsers.bind(this);
  }

  // channel = ({ id, name }) => <li key={`channel-${id}`} onClick={() => this.handleChannelChange(name)}>{name}</li>;
  // user = (user) => <li key={`user-${user.userID}`} onClick={() => this.handleChannelChange(user.handle)}>{user.handle}</li>;

  mapChannels({id, name}) {
    if(name === this.state.activeChat) return <li key={`channel-${id}`} onClick={() => this.handleChannelChange(name)}><strong>{name}</strong></li>

    return <li key={`channel-${id}`} onClick={() => this.handleChannelChange(name)}>{name}</li>
  }

  mapUsers(user) {
    if(user.handle === this.state.activeChat)
      return <li key={`user-${user.userID}`} onClick={() => this.handleChannelChange(user.handle)}><strong>{user.handle}</strong></li>

    return <li key={`user-${user.userID}`} onClick={() => this.handleChannelChange(user.handle)}>{user.handle}</li>
  }

  handleChannelChange(newChannel) {
    this.setState({
      activeChat: newChannel
    });

    this.props.setReceiver(newChannel);
  }

  render() {
    return <ChannelWrapper>
      <Container>
        <div>
          <Typography variant="h4">
            {this.props.ngo}
          </Typography>
          <Typography variant="h5">
            {this.props.username}
          </Typography>
        </div>

        <div>
          <Typography variant="h6">
            Channels
        </Typography>
          <ul>
            {this.props.channels.map(this.mapChannels)}
          </ul>
        </div>

        <div>
          <Typography variant="h6">
            Direct Messages
        </Typography>
          <ul>
            {this.props.users.map(this.mapUsers)}
          </ul>
        </div>
      </Container>
    </ChannelWrapper>
  }
}

export default Sidebar;