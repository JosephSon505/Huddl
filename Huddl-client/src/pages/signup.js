import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SiteMap from '../components/SiteMap'
import SignupBox from '../components/SignupBox'
import axios from 'axios';
// redux
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';

axios.defaults.baseURL = 'https://us-central1-letshuddl.cloudfunctions.net/api';
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