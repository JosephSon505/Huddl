import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SiteMap from '../components/SiteMap'
import LoginBox from '../components/LoginBox'
import axios from 'axios'
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';


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
            errors: {
              "general": "",
              "email": "",
              "password": ""
            }
        }
    }

    handleLogin = (userData) => {

        this.setState({
            errors: {
              "general": "",
              "email": "",
              "password": ""
            }
        });


    }

    render() {
        return (
            <div style={container}>
                <Navbar />
                <LoginBox callBackFromLogin={this.props.loginUser} history={this.props.history}/>
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
    loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(login);