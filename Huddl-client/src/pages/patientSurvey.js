// Material-UI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import React, { Component } from 'react';

const StyledRadio = withStyles({
    root: {
        color: '#000000',
        '&$checked': {
            color: '#000000',
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const Chatkit = require('@pusher/chatkit-server');
const instanceLocator = 'v1:us1:3366eda2-e4d8-45c1-9f80-00f24eb6f202';
const key = '1f7ad742-25f6-4c95-ab73-740747059cb3:yD1HqPGZMZg1yZrWAK36oQvEiBckt54dNrmoJahyoLc=';

const chatkit = new Chatkit.default({
    instanceLocator: instanceLocator,
    key: key,
})


const styles = {
    container: {
        height: '100%',
    },
};

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3),
    },
}));

function RadioGroupOne() {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <div>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Do you have a preference for your provider?</FormLabel>
                <RadioGroup aria-label="gender" name="gender" value={value} onChange={handleChange}>
                    <FormControlLabel value="female" control={<StyledRadio />} label="Female provider" />
                    <FormControlLabel value="male" control={<StyledRadio />} label="Male provider" />
                    <FormControlLabel value="other" control={<StyledRadio />} label="No preference" />
                </RadioGroup>
            </FormControl>
        </div>

    );
}

function RadioGroupTwo() {
    const classes = useStyles();
    const [value, setValue] = React.useState('therapy');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <div>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">What are you looking to get out of this service?</FormLabel>
                <RadioGroup aria-label="type" name="type" value={value} onChange={handleChange}>
                    <FormControlLabel value="therapy" control={<StyledRadio />} label="More general, feeling stressed, want someone to talk to" />
                    <FormControlLabel value="support" control={<StyledRadio />} label="Specialised trauma support" />
                </RadioGroup>
            </FormControl>
        </div>

    );
}

class patientSurvey extends Component {

    render() {
        const { classes } = this.props;
        console.log(this.props.location);

        return (
            <div className={classes.container}>
                <Grid container spacing={10}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Typography variant='h4' style={{ paddingTop: '30%' }}>
                            Welcome Study for Patient
                        </Typography>
                        <RadioGroupOne />
                        <RadioGroupTwo />
                        <Button variant="contained" color="primary">
                            Submit
                        </Button>
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(patientSurvey);