import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SiteMap from '../components/SiteMap'
import SignupBox from '../components/SignupBox'


// Style definitions

var container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

}

class signup extends Component {

    constructor() {
        super();
        this.testLoginPage = this.testLoginPage.bind(this);
        this.testSignupPage = this.testSignupPage.bind(this);
    }




    render() {
        return (
            <div style={container}>
                <Navbar />
                <SignupBox />
                <SiteMap />
            </div>
        )
    }

    testLoginPage() {
        this.props.history.push('/login');
    }

    testSignupPage() {
        this.props.history.push('/signup');
    }

}

export default signup;