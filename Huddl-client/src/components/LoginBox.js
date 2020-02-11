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
import { makeStyles } from '@material-ui/core/styles';
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
    }

    render() {

        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <br></br><br></br><br></br><br></br><br></br>
                    <Typography component="h1" variant="h4">
                    <b>Welcome back</b>
                    </Typography>
                    <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        align="left"
                        className={classes.submit}
                    >
                        <b>Log in</b>
                    </Button>
                    <br></br><br></br>
                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                        </Grid>
                    </Grid>
                    </form>
                </div>
                <Box mt={28}>
                </Box>
                </Container>
                
            );
    }
}

export default withStyles(styles)(LoginBox)
