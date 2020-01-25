import React, { Component } from 'react';

// imports from Material UI
import Button from '@material-ui/core/Button';

class landing extends Component {

    constructor() {
        super();
        this.testLoginPage = this.testLoginPage.bind(this);
        this.testSignupPage = this.testSignupPage.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Landing Page</h1>
                <Button className='button' onClick={ this.testLoginPage }>
                    Click Here to Log In 
                </Button>    
                <Button className='button' onClick={ this.testSignupPage }>
                    Click Here to Sign Up
                </Button>    
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