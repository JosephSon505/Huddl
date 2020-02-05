import React from 'react'

// Styled Components Import
import styled from 'styled-components';

// Material UI Import
import TextField from '@material-ui/core/TextField';

const SendMessageWrapper = styled.div`
  grid-column: 3;
  grid-row: 3;
`;

const Container = styled.div`
  width: 98%;
  margin: 1%;
`;

export default () => (
  <SendMessageWrapper>
    <Container>
      <TextField variant='outlined' fullWidth multiline rows='5' margin='dense' />
    </Container>
  </SendMessageWrapper>
);