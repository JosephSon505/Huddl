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
            this.props.history.push({
                pathname: '/home',
                userData: userData
            })
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

}

export default login;