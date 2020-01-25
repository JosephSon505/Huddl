import React from 'react'

// Material UI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// CSS imports
import '../App.css';

const styles = {
  form: {
    textAlign: 'center'
  },
  pageTitle: {
    margin: '20px auto 20px auto'
  },
  textField: {
    margin: '20px auto 20px auto'
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
  }
};

class login extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <Typography variant="h2" className={classes.pageTitle}>
            Huddl
          </Typography>
          <Typography variant="h4" className={classes.pageTitle}>
            Log In
          </Typography>

          <form noValidate onSubmit={this.handleSubmit} >
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

            <Button type='submit' variant='contained' color='primary' className={classes.button} fullWidth disabled={this.state.loading}>
              Log In
                        {this.state.loading && (
                <CircularProgress size={26} className={classes.progress} />
              )}
            </Button>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.setState({
      loading: true
    });

    console.log(userData);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
}

export default withStyles(styles)(login);