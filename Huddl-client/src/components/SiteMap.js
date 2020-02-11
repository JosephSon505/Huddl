import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/styles/withStyles';

//Styles

const styles = {
    button: {
        width: '100%',
        marginTop: '3%',
        marginBottom: '3%',
    },
}

var siteMapContainer = {
    width: '100VW',
    height: '20%',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

var contentWrapper = {
    display: 'flex',
    fledDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3
}

var mastheadContainer = {
    flex: 1,
    marginBottom: '2.5%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    color: 'white',
    paddingLeft: '5%'

}

var contentContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: '1',
    height: '85%',
    margin: '2%',
    paddingLeft: '3.5%',
    paddingRight: '3.5%',
    fontSize: '25px',
    color: 'white'
}

export class SiteMap extends Component {
    render() {

        const { classes } = this.props;

        return (
            <div style={siteMapContainer}>
                <div style={contentWrapper}>
                    <div style={contentContainer}>
                        <div className="subHeader" className="siteMapLine"> Our mission</div>
                        <div className="text">Huddl seeks to alleviate mental health concerns of humanitarian aid workers in order to improve the quality of care for the refugees with whom they interact and decrease high turnover rates. Help us help others.</div>
                    </div>
                    <div style={contentContainer}>
                        <div className="subHeader" className="siteMapLine">Navigate</div>
                        <Button className={classes.button} color="inherit" variant="outlined" component={Link} to="/aboutus" >
                            ABOUT
            </Button>

                        <Button className={classes.button} color="inherit" variant="outlined" component={Link} to="/faq" >
                            FAQ
            </Button>
                        <Button className={classes.button} color="inherit" variant="outlined" component={Link} to="/faq" >
                            Support
            </Button>
                        <Button className={classes.button} color="inherit" variant="outlined" component={Link} to="/faq" >
                            Partners
            </Button>
                    </div>
                    <div style={contentContainer}>
                        <div className="subHeader" className="siteMapLine">Contact us</div>
                        <div className="text">
                            <a href="mailto:hellohuddl@gmail.com">hellohuddl@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div style={mastheadContainer} className="text">
                    Copyright Ⓒ 2020 Huddl - Los Angeles, CA
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SiteMap)
