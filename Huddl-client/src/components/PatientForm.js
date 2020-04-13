// Material-UI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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

class PatientForm extends React.Component {
    constructor() {
        super();

        this.state = {
            gender: '',
            type: ''
        };
    }

    handleSubmit = () => {
        const surveyData = {
            gender: this.state.gender,
            type: this.state.email
        }
        this.props.callBackFromSurvey(surveyData);
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <FormControl component="fieldset">
                    <FormLabel component="legend" style={{ paddingTop: '5%' }}>Do you have a preference for your provider</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" onChange={this.handleChange} required>
                        <FormControlLabel value="female" control={<StyledRadio />} label="Female provider" />
                        <FormControlLabel value="male" control={<StyledRadio />} label="Male provider" />
                        <FormControlLabel value="other" control={<StyledRadio />} label="No preference" />
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend" style={{ paddingTop: '5%' }}>What are you looking to get out of this service?</FormLabel>
                    <RadioGroup aria-label="type" name="type" onChange={this.handleChange} required>
                        <FormControlLabel value="therapy" control={<StyledRadio />} label="More general, feeling stressed, want someone to talk to" />
                        <FormControlLabel value="support" control={<StyledRadio />} label="Specialised trauma support" />
                    </RadioGroup>
                </FormControl>
                <br />
                <Button variant="contained" color="primary" type="submit" style={{ marginTop: '5%' }}>
                    Submit
                </Button>
            </form>
        )
    }
}

export default PatientForm;