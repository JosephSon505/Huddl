import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/styles/withStyles';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
          password: ''
        }
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });  
    }

    handleSubmit = () => {
      console.log("Handle Submit");
      const userData = {
          email: this.state.email, 
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
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
