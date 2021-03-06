// Material-UI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


import React, { Component, View, Button } from 'react';


class UserList extends Component {
    constructor() {
        super();
    }

    handleClick(user){
        this.props.callbackClick(user);
    }

    render() {
        return (
            <Grid>
                <ul>
                    {this.props.users !== [] 
                    ? this.props.users.map(user => (<li key={user.name}><button onClick={() => this.handleClick(user)}>{user.firstName + " " + user.lastName}</button></li>)) 
                    : <p>PlaceHolder</p>} 
                </ul>
            </Grid>  
        );
    }
}
export default UserList;