// Material-UI Imports
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

class PatientForm extends React.Component {
    constructor() {
        super();

        this.state = {
            timeCommit: 1, 
            preferredTime: 0, 
            providerGender: "", 
            preferredAge: 0 
        };
    }

    handleSubmit = () => {
        
        const surveyData = {
            timeCommit: this.state.timeCommit, 
            preferredTime: this.state.preferredTime, 
            providerGender: this.state.providerGender, 
            preferredAge: this.state.preferredAge 
        }
        this.props.callBackFromSurvey(surveyData);

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
                <FormControl style={{direction: "column", alignItems: "center"}} component="fieldset">
                    <FormLabel component="legend">How long will you be working at your NGO?</FormLabel>
                    <RadioGroup style={{paddingTop: 5, paddingLeft: "30%"}}aria-label="timeCommit" name="timeCommit" onChange={this.handleChange} required>
                        <FormControlLabel value="1" control={<Radio color="primary" />} label="Under 3 months" />
                        <FormControlLabel value="2" control={<Radio color="primary" />} label="3-6 months" />
                        <FormControlLabel value="3" control={<Radio color="primary" />} label="6-9 months" />
                        <FormControlLabel value="4" control={<Radio color="primary" />} label="9-12 months" />
                        <FormControlLabel value="5" control={<Radio color="primary" />} label="12-24 months" />
                        <FormControlLabel value="6" control={<Radio color="primary" />} label="2+ years" />
                    </RadioGroup>

                    <FormLabel style={{paddingTop: 10}} component="legend">How long will you be working at your NGO?</FormLabel>
                    <RadioGroup style={{paddingTop: 5, paddingLeft: "30%"}} aria-label="preferredTime" name="preferredTime" onChange={this.handleChange} required>
                        <FormControlLabel value="1" control={<Radio color="primary" />} label="6-9AM" />
                        <FormControlLabel value="2" control={<Radio color="primary" />} label="9-12PM" />
                        <FormControlLabel value="3" control={<Radio color="primary" />} label="12-3PM" />
                        <FormControlLabel value="4" control={<Radio color="primary" />} label="3-6PM" />
                        <FormControlLabel value="5" control={<Radio color="primary" />} label="6-9PM" />
                        <FormControlLabel value="6" control={<Radio color="primary" />} label="Not an option" />
                    </RadioGroup>

                    <FormLabel component="legend">Do you have a preference for your provider?</FormLabel>
                    <RadioGroup style={{paddingTop: 5, paddingLeft: "30%"}} aria-label="providerGender" name="providerGender" onChange={this.handleChange} required>
                        <FormControlLabel value="male" control={<Radio color="primary" />} label="Male provider" />
                        <FormControlLabel value="female" control={<Radio color="primary" />} label="Female provider" />
                        <FormControlLabel value="other" control={<Radio color="primary" />} label="No preference" />
                    </RadioGroup>

                    <FormLabel component="legend">How long will you be working at your NGO?</FormLabel>
                    <RadioGroup style={{paddingTop: 5, paddingLeft: "30%"}} aria-label="preferredAge" name="preferredAge" onChange={this.handleChange} required>
                        <FormControlLabel value="1" control={<Radio color="primary" />} label="22-30" />
                        <FormControlLabel value="2" control={<Radio color="primary" />} label="30-40" />
                        <FormControlLabel value="3" control={<Radio color="primary" />} label="40-50" />
                        <FormControlLabel value="4" control={<Radio color="primary" />} label="50-60" />
                        <FormControlLabel value="5" control={<Radio color="primary" />} label="60+" />
                        <FormControlLabel value="6" control={<Radio color="primary" />} label="No preference" />
                    </RadioGroup>
                    <Button variant="contained" color="primary" onClick={this.handleSubmit} type="submit" style={{ direction: "column", alignItems: "center", marginTop: '5%' }}>
                        Submit
                    </Button>
                </FormControl>
        )
    }
}

export default PatientForm;