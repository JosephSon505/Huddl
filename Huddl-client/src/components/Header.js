import React from 'react'

// Stylec Components Imports
import styled from 'styled-components';

// Material UI Imports
import Typography from '@material-ui/core/Typography';

const HeaderWrapper = styled.div`
  grid-column: 3;
  grid-row: 1;
  text-align: center;
`;

export default ({ channelName }) => (
  <HeaderWrapper>
    <Typography variant="h4">
      {channelName}
    </Typography>
  </HeaderWrapper>
);