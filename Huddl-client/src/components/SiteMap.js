import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/styles/withStyles';

import '../css/footer.css';

//Styles

const styles = {
}



var siteMapContainer = {
    width: '100VW',
    height: '20%',
    padding: '5%',
    paddingLeft: '8%',
    paddingRight: '8%',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

var contentWrapper = {
    display: 'flex',
    fledDirection: 'row',
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
    color: 'white',
}



export class SiteMap extends Component {
    render() {

        const { classes } = this.props;

        return (
            <div style={siteMapContainer}>
                <div style={contentWrapper}>
                    <div style={contentContainer}>
                        <hr></hr>
                        <div className="text"><h3><b>Our Mission</b></h3></div>
                        <div className="text">Huddl seeks to break the silence on humanitarian aid worker
                        mental health and provide them with sustained psychological support. Help us help others.
                        </div>
                    </div>

                    <div style={contentContainer}>
                    <hr></hr>
                    <div className="text"><h3><b>Navigate</b></h3></div>
                        <div className="text">
                            <a href="/">Home</a>
                        </div>

                        <div className="text">
                            <a href="/aboutus">About us</a>
                        </div>

                        <div className="text">
                            <a href="/faq">FAQ</a>
                        </div>

                        <div className="text">
                            <a href="/partners">Partners</a>
                        </div>

                        <div className="text">
                            <a href="/support">Support Huddl</a>
                        </div>
                    </div>

                    <div style={contentContainer}>
                    <hr></hr>
                    <div className="text"><h3><b>Contact</b></h3></div>
                        <div className="text">
                            <a href="mailto:hellohuddl@gmail.com">hellohuddl@gmail.com</a>
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <div style={mastheadContainer} className="text">
                    Copyright Ⓒ 2020 Huddl - Los Angeles, CA
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SiteMap)
