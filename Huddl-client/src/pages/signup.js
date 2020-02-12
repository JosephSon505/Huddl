import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SiteMap from '../components/SiteMap'
import SignupBox from '../components/SignupBox'
import axios from 'axios';


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
        console.log("Made it to Sign Up");
        console.log(userData.email);
        const newUserData = {
            firstName: userData.firstName,
            lastName: userData.lastName, 
            email: userData.email,
            password: userData.password, 
            confirmPassword: userData.password,
            handle: userData.firstName + userData.lastName, 
            userGroup: 'Volunteer',
        };

        // TODO: AXIOS goes here - call the signup route
        axios.post('/signup', newUserData).then(data => {
            this.props.history.push('/home');
        }).catch(err => {
            console.log('HUGE ERROR');
        });
    }


    render() {
        return (
            <div style={container}>
                <Navbar />
                <SignupBox callbackFromSignUp={this.handleSignUp}/>
                <SiteMap />
            </div>
        )
    }

}

export default signup;