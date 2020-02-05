import React from 'react';

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

const channel = ({id, name}) => <li key={`channel-${id}`}>{name}</li>;
const user = ({id, name}) => <li key={`user-${id}`}>{name}</li>;

export default ({ ngo, username, channels, users }) => (
  <ChannelWrapper>
    <Container>
      <div>
        <Typography variant="h4">
          {ngo}
        </Typography>
        <Typography variant="h5">
          {username}
        </Typography>
      </div>

      <div>
        <Typography variant="h6">
          Channels
        </Typography>
        <ul>
          {channels.map(channel)}
        </ul>
      </div>

      <div>
        <Typography variant="h6">
          Direct Messages
        </Typography>
        <ul>
          {users.map(user)}
        </ul>
      </div>
    </Container>
  </ChannelWrapper>
);