import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED } from '../types';
import axios from 'axios';

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/login', userData).then(data => {
        localStorage.setItem('FBIdToken', `Bearer ${data.data}`);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.data}`;
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
        history.push('/home');
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        });
    })
};

export const signupUser = (newUserData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });

    axios.post('/signup', newUserData).then(data => {
        console.log(data);

        localStorage.setItem('FBIdToken', `Bearer ${data.data.token}`);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.data.token}`;
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });        
        history.push('/home');
    }).catch(err => {
        console.log('HUGE ERROR');
    });
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
  };
  

export const getUserData = () => (dispatch) => {
    axios.get('/user').then(res => {
        dispatch({
            type: SET_USER,
            payload: res.data
        })
    }).catch(err => {
        console.log('Error in getting user data');
    });
};