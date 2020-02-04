import React from 'react'

// Axios Import
import axios from 'axios';

// Material UI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

// import css files
import '../App.css'
import '../signup.css';

// styles for this page
const styles = {
  form: {
    textAlign: 'center'
  },
  pageTitle: {
    margin: '20px auto 20px auto'
  },
  textField: {
    margin: '8px auto 8px auto'
  },
  button: {
    margin: '40px auto 0px auto',
    position: 'relative'
  },
  customError: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: '20'
  },
  progress: {
    position: 'absolute',
  },
  cancel: {
    marginTop: '20px',
    marginBottom: '50px'
  },
  selectDiv: {
    marginTop: '20px'
  },
  selectTitle: {
    marginBottom: '10px'
  }
};

class SignUp extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      handle: '',
      userGroup: '',
      userGroupSelectOpen: false,
      loading: false,
    };
  }

  render() {
    const { classes } = this.props;
    const { loading } = this.state;

    return (

      <div>
          <div className="signupHeading signupTitle">
            <h2 className={classes.pageTitle}>
                Welcome to <b>Huddl!</b>
              </h2>
          </div>

      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>

        
            <form noValidate onSubmit={this.handleSubmit} >
              { this.displayTextFields() }
              { this.displaySelect() }
              { this.displayMoreDetails() }
              <Button type='submit' variant='contained' color='primary' className={classes.button} >
                Sign Up
                {loading && (<CircularProgress size={26} className={classes.progress} />)}
              </Button>

              
            </form>
            <div className="signup">
                Already have an account? <a href="/login">Log In</a>
            </div>
        </Grid>
        <Grid item sm />
      </Grid>
    </div>
    );
  }

  displayTextFields() {
    const { classes } = this.props;

    return (
      <div class="signup-div">
        <TextField
          id='firstName'
          name='firstName'
          type='text'
          label='First Name'
          variant='outlined'
          className={classes.textField}
          value={this.state.firstName}
          onChange={this.handleChange}
          fullWidth
        />
        <TextField
          id='lastName'
          name='lastName'
          type='text'
          label='Last Name'
          variant='outlined'
          className={classes.textField}
          value={this.state.lastName}
          onChange={this.handleChange}
          fullWidth
        />
        <TextField
          id='email'
          name='email'
          type='email'
          label='Email'
          variant='outlined'
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange}
          fullWidth
        />
        <TextField
          id='password'
          name='password'
          type='password'
          label='Password'
          variant='outlined'
          className={classes.textField}
          value={this.state.password}
          onChange={this.handleChange}
          fullWidth
        />
        <TextField
          id='confirmPassword'
          name='confirmPassword'
          type='password'
          label='Confirm Password'
          variant='outlined'
          className={classes.textField}
          value={this.state.confirmPassword}
          onChange={this.handleChange}
          fullWidth
        />
        <TextField
          id='handle'
          name='handle'
          type='text'
          label='Handle'
          variant='outlined'
          className={classes.textField}
          value={this.state.handle}
          onChange={this.handleChange}
          fullWidth
        />
      </div>
    )
  }

  displaySelect() {
    const { classes } = this.props;

    return (
      <div className={classes.selectDiv} >
        <InputLabel id='user-group' className={classes.selectTitle}>Select User Group</InputLabel>
        <Select
          variant='outlined'
          id='user-group'
          open={this.state.userGroupSelectOpen}
          onClose={this.handleSelectClose}
          onOpen={this.handleSelectOpen}
          value={this.state.userGroup}
          onChange={this.handleSelectChange}
          autoWidth={true}
        >
          <MenuItem value=''><em>None</em></MenuItem>
          <MenuItem value='volunteer'>Volunteer</MenuItem>
          <MenuItem value='doctor'>doctor</MenuItem>
        </Select>
      </div>

    );
  }

  displayMoreDetails() {
    if(this.state.userGroup === 'volunteer') return this.volunteerDetails();
    else if(this.state.userGroup === 'doctor') return this.doctorDetails();

    return (
      <div class="description">
        desc
      </div>
    );
  }

  volunteerDetails() {
    return (
      <div>
        volunteer details here
      </div>
    );
  }

  doctorDetails() {
    return (
      <div>
        doctor details here
      </div>
    );
  }

  checkButtonDisabled() {
    return !(this.state.firstName && this.state.lastName && this.state.email && this.state.password && this.state.confirmPassword && this.state.handle && this.state.userGroup);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    });

    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      handle: this.state.handle,
      userGroup: this.state.userGroup
    };

    console.log(newUserData);

    // TODO: AXIOS goes here - call the signup route
    axios.post('/signup', newUserData).then(data => {
      this.props.history.push('/home');
    }).catch(err => {
      this.setState({
        errors: err.response.data.errors,
        loading: false
      });
    });
    
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSelectChange = (event) => {
    this.setState({
      userGroup: event.target.value
    });
  }

  handleSelectClose = (event) => {
    this.setState({
      userGroupSelectOpen: false
    });
  }

  handleSelectOpen = (event) => {
    this.setState({
      userGroupSelectOpen: true
    });
  }

  handleCancel = (event) => {
    this.props.history.push('/');
  }
}

export default withStyles(styles)(SignUp);