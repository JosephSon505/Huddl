import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SiteMap from '../components/SiteMap'
import LoginBox from '../components/LoginBox'
import axios from 'axios'
import { Link } from 'react-router-dom';


// Style definitions

var container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

}

class login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {
              "general": "",
              "email": "",
              "password": ""
            }
        }
        // this.testLoginPage = this.testLoginPage.bind(this);
        // this.testSignupPage = this.testSignupPage.bind(this);
    }

    handleLogin = (userData) => {

        this.setState({
            loading: true,
            errors: {
              "general": "",
              "email": "",
              "password": ""
            }
        });

        axios.post('/login', userData).then(data => {
            this.props.history.push('/home')
        }).catch(err => {
            console.log('Error');
        })
    }

    render() {
        return (
            <div style={container}>
                <Navbar />
                <LoginBox callBackFromLogin={this.handleLogin}/>
                <SiteMap />
            </div>
        )
    }

    // testLoginPage() {
    //     this.props.history.push('/login');
    // }

    // testSignupPage() {
    //     this.props.history.push('/signup');
    // }

}

export default login;