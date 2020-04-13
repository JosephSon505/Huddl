import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/styles/withStyles';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Select } from '@material-ui/core';

// Styles

var LoginBoxContainer = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: '1.5%',
  width: '95VW',
  height: '85VH',
}


const styles = {
  mainClass: {
    width: '100%',
    height: '20%',
    color: 'black',
  },
  submit: {
    boxShadow: 'none'

  }
}



export class LoginBox extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      radioValue: 'Volunteer',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleRadioChange = event => {
    this.setState({ radioValue: event.target.value });
  };


  handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userGroup: this.state.radioValue,
    }
    
    this.props.callbackFromSignUp(userData);
  }

  render() {

    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <br></br><br></br><br></br><br></br><br></br>

          <Typography component="h1" variant="h4">
            <b>Join the Huddl</b>
          </Typography>

          <br></br>

          <form noValidate onSubmit={this.handleSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  onChange={this.handleChange}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  onChange={this.handleChange}
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  onChange={this.handleChange}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  onChange={this.handleChange}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item container={true} direction="column" alignItems="center" xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup
                    name="gender1"
                    className={classes.group}
                    value={this.state.radioValue}
                    onChange={this.handleRadioChange}
                  >
                    <FormControlLabel value="Volunteer" control={<Radio color="primary"/>} label="Volunteer" />
                    <FormControlLabel value="Therapist" control={<Radio color="primary"/>} label="Therapist" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I agree to Huddl's Terms of Use and consent to Huddl's privacy statement"
                />
              </Grid>
            </Grid>

            <br></br>

            <Button
              type="submit"
              onClick={this.handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <b>Create account</b>
            </Button>
          </form>

          <br></br><br></br>

          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Log in
                      </Link>
            </Grid>
          </Grid>
        </div>
        <Box mt={28}>
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles)(LoginBox)
