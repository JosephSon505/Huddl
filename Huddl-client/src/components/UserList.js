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

    

    render() {
        return (
            <Grid>
                <ul>
                        {this.props.users != [] ? this.props.users.map(user => (<li key={user.id}><button>{user.id}</button></li>)) : <p>PlaceHolder</p>}
                </ul>
            </Grid>
            
        );
    }
}
export default UserList;