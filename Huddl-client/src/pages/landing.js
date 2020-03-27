import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import InfoPanels from '../components/InfoPanels'
import SiteMap from '../components/SiteMap'
import WelcomePanel from '../components/WelcomePanel'

// Style definitions

var container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

}

class landing extends Component {

    constructor() {
        super();
        this.testLoginPage = this.testLoginPage.bind(this);
        this.testSignupPage = this.testSignupPage.bind(this);
    }




    render() {
        return (
            <div style={container}>
                <Navbar />
                <WelcomePanel />
                <InfoPanels />
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

export default landing;