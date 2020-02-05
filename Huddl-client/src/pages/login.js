import React from 'react'

// Material UI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// Axios Import
import axios from 'axios';

// CSS imports
import '../App.css';
import '../login.css';



const styles = {
  form: {
    textAlign: 'center'
  },

  textField: {
    margin: '20px auto 20px auto'
  },
  button: {
    margin: '40px auto 0px auto',
    position: 'relative'
  },
  cancel: {
    margin: '20px auto 0px auto',
    position: 'relative'
  },
  customError: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: '20'
  },
  progress: {
    position: 'absolute',
  }
};

class login extends React.Component {

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
    };

    this.handleSignUp = this.handleSignUp.bind(this);
  }


  render() {



    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <div>
        <div className="rect" />

        <div className="heading loginTitle">
          <h2 className={classes.pageTitle}>
            Welcome  to <b>Huddl!</b>
          </h2>
        </div>

        <Grid container className={classes.form}>
          <Grid item sm />
          <Grid item sm>

            <form noValidate onSubmit={this.handleSubmit} >

              <TextField
                id='email'
                name='email'
                type='email'
                label='Email'
                variant='outlined'
                helperText={errors.email}
                error={errors.email ? true : false}
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
                helperText={errors.password}
                error={errors.password ? true : false}
                className={classes.textField}
                value={this.state.password}
                onChange={this.handleChange}
                fullWidth
              />

              {errors && errors.general && (
                <Typography variant='body2' className={classes.customError}>
                  {errors.general}
                </Typography>
              )}

              <Button type='submit' variant='contained' color='primary' className={classes.button} fullWidth disabled={this.state.loading}>
                Log In {this.state.loading && (<CircularProgress size={26} className={classes.progress} />)}
              </Button>



            </form>

            <div className="signup">
              Don't have an account? <a href="/signup">Sign Up</a>
            </div>
          </Grid>
          <Grid item sm />
        </Grid>

      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.setState({
      loading: true,
      errors: {
        "general": "",
        "email": "",
        "password": ""
      }
    });

    // TODO: AXIOS goes here - Call the routes we created
    axios.post('/login', userData).then(data => {
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

  handleSignUp = (event) => {
    this.props.history.push('/signup');
  }
}

export default withStyles(styles)(login);