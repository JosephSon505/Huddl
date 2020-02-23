import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SiteMap from '../components/SiteMap'
import SignupBox from '../components/SignupBox'
import axios from 'axios';
// import Chatkit from '@pusher/chatkit-server';

// redux
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';

const Chatkit = require('@pusher/chatkit-server');


const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:3366eda2-e4d8-45c1-9f80-00f24eb6f202',
    key: '1f7ad742-25f6-4c95-ab73-740747059cb3:yD1HqPGZMZg1yZrWAK36oQvEiBckt54dNrmoJahyoLc=',
})

// Style definitions

var container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

}

class signup extends Component {

    constructor() {
        super();
    }

    handleSignUp = (userData) => {
        const newUserData = {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password,
            confirmPassword: userData.password,
            handle: userData.firstName + userData.lastName,
            userGroup: 'Volunteer',
        };

        chatkit.createUser({
            id: userData.email,
            name: userData.firstName + " " + userData.lastName,
        })
            .then(() => {
                console.log('User created successfully');
            }).catch((err) => {
                console.log(err);
            });

        this.props.signupUser(newUserData, this.props.history);
    }


    render() {
        return (
            <div style={container}>
                <Navbar />
                <SignupBox callbackFromSignUp={this.handleSignUp} />
                <SiteMap />
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

const mapActionsToProps = {
    signupUser
}

export default connect(mapStateToProps, mapActionsToProps)(signup);