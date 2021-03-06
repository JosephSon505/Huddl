import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED } from '../types';
import axios from 'axios';

axios.defaults.baseURL = 'https://us-central1-letshuddl.cloudfunctions.net/api';

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/login', userData).then(data => {
        localStorage.setItem('FBIdToken', `Bearer ${data.data}`);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.data}`;
        dispatch(getUserData(history));
        dispatch({ type: CLEAR_ERRORS });
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
        dispatch({ type: CLEAR_ERRORS });        
        history.push('/login');
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        });
    });
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
};
  

export const getUserData = (history) => (dispatch) => {
    axios.get('/user').then(res => {
        dispatch({
            type: SET_USER,
            payload: res.data
        });
        history.push('/home');
    }).catch(err => {
        console.log('Error in getting user data');
    });
};