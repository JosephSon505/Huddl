import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material-UI Imports
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const users = [
  { name: 'jltanner@usc.edu', label: 'jltanner' },
  { name: 'practiceuser0', label: 'user2' },
  { name: 'practiceuser1', label: 'user3' },
];

function Sidebar() {
    return (
      <List disablePadding dense>
        {users.map(({ label, name, ...rest }) => (
        <ListItem key={name} button {...rest}>
          <ListItemText>{label}</ListItemText>

        </ListItem>
      ))}
      </List>
    )
  }
  
  export default Sidebar