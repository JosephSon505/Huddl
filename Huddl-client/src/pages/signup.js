import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SiteMap from '../components/SiteMap'
import SignupBox from '../components/SignupBox'
import axios from 'axios';
// import Chatkit from '@pusher/chatkit-server';

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

        //automatically create chatkit user and
        //automatically add new users into rooms with therapist 1, 2, 3, 4, 5, and 6
        
        chatkit.createUser({
            id: userData.email,
            name: userData.firstName + " " + userData.lastName,
          })
            .then((res) => {
              console.log('User created successfully', res);
            }).catch((err) => {
              console.log(err);
            }).then(() => {
                chatkit.createRoom({
                    creatorId: userData.email,
                    name: 'Therapist 1',
                    userIds: ['therapist1@usc.edu']
                }).then((res) => {
                    console.log('Room created successfully', res);
                }).catch((err) => {
                    console.log(err);
                });
                
                chatkit.createRoom({
                    creatorId: userData.email,
                    name: 'Therapist 2',
                    userIds: ['therapist2@usc.edu']
                    }).then((res) => {
                        console.log('Room created successfully', res);
                    }).catch((err) => {
                        console.log(err);
                    });
                
                chatkit.createRoom({
                    creatorId: userData.email,
                    name: 'Therapist 3',
                    userIds: ['therapist3@usc.edu']
                }).then((res) => {
                    console.log('Room created successfully', res);
                }).catch((err) => {
                    console.log(err);
                });
                
                chatkit.createRoom({
                    creatorId: userData.email,
                    name: 'Therapist 4',
                    userIds: ['therapist4@usc.edu']
                }).then((res) => {
                    console.log('Room created successfully', res);
                }).catch((err) => {
                    console.log(err);
                });
        
                chatkit.createRoom({
                    creatorId: userData.email,
                    name: 'Therapist 5',
                    userIds: ['therapist5@usc.edu']
                }).then((res) => {
                    console.log('Room created successfully', res);
                }).catch((err) => {
                    console.log(err);
                });
                
                chatkit.createRoom({
                    creatorId: userData.email,
                    name: 'Therapist 6',
                    userIds: ['therapist6@usc.edu']
                }).then((res) => {
                    console.log('Room created successfully', res);
                }).catch((err) => {
                    console.log(err);
                });

            })

        
       

        // TODO: AXIOS goes here - call the signup route
        axios.post('/signup', newUserData).then(data => {
            this.props.history.push({
                pathname: '/home',
                userData: newUserData
            });
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