// Material-UI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ProviderForm from '../components/ProviderForm';

import React, { Component } from 'react';
import axios from 'axios';

const styles = {
    container: {
        height: '100%',
    },
};

class providerSurvey extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {
                "gender": "",
                "type": "",
            }
        }
    }

    handleSurvey = (surveyData) => {
        this.setState({
            loading: true,
            errors: {
                "gender": "",
                "type": "",
            }
        });

        axios.post('/providerSurvey', surveyData).then(data => {
            this.props.history.push({
                pathname: '/home',
                surveyData: surveyData
            })
        }).catch(err => {
            console.log('Error');
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <Grid container spacing={10}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Typography variant='h4' style={{ paddingTop: '30%' }}>
                            Welcome Study for Provider
                        </Typography>
                        <ProviderForm callBackFromSurvey={this.handleSurvey} />
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(providerSurvey);