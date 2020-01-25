import React from 'react'

// Material UI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


import '../App.css'

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
      loading: false
    };
  }

  render() {
    const { classes } = this.props;
    const { loading } = this.state;

    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <Typography variant="h2" className={classes.pageTitle}>
            Huddl
          </Typography>
          <Typography variant="h4" className={classes.pageTitle}>
            Sign Up
          </Typography>
          <form noValidate onSubmit={this.handleSubmit} >
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
            <Button type='submit' variant='contained' color='primary' className={classes.button} fullWidth disabled={loading}>
              Sign Up
                            {loading && (
                <CircularProgress size={26} className={classes.progress} />
              )}
            </Button>
            <Button variant='contained' color='secondary' onClick={this.handleCancel} className={classes.cancel} fullWidth>
              Cancel
                        </Button>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
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
      lastName: this.state.lastName
    };

    console.log(newUserData);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleCancel = (event) => {
    this.props.history.push('/');
  }
}

export default withStyles(styles)(SignUp);