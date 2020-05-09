// Material-UI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PatientForm from '../components/PatientForm';
import store from '../redux/store';

import React, { Component } from 'react';
import axios from 'axios';

const styles = {
    container: {
        height: '100%',
    },
};

class patientSurvey extends Component {

    constructor() {
        super();
        this.state = {
            
        }
    }

    handleSurvey = (surveyData) => {

        //Add the user data to the survey
        const userCreds = store.getState().user.credentials;
        surveyData.handle = userCreds.handle;

        axios.post('/patientSurvey', surveyData);
        //This will have to be nested when the getTherapist depensd on the results of the survey
        axios.get('/getTherapist', surveyData);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <Grid container spacing={10}>
                    <Grid item xs={4}></Grid>
                    <Grid container={true} direction="column" alignItems="center" item xs={4}>
                        <Typography variant='h4' style={{ paddingVertical: '30%' }}>
                            Welcome Study for Patient
                        </Typography>
                        <PatientForm callBackFromSurvey={this.handleSurvey} />
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(patientSurvey);