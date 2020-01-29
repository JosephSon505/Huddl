import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class landing extends Component {

    constructor() {
        super();
        this.testLoginPage = this.testLoginPage.bind(this);
        this.testSignupPage = this.testSignupPage.bind(this);
    }

    render() {
        return (
            <div>
                <Navbar />

                <div className="container">
                    <h1>Landing Page</h1>
                </div>
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