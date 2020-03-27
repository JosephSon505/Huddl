import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/styles/withStyles';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
    fontSize: '10px',
    color: 'white',
}

let theme = createMuiTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif',
        ].join(','),
    },
});

theme.typography.h3 = {
    fontSize: '0.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.2rem',
    },
};

export class SiteMap extends Component {
    render() {

        const { classes } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <div style={siteMapContainer}>
                    <div style={contentWrapper}>
                        <div style={contentContainer}>
                            <hr></hr>
                            <div className="text"><h3><b>Our Mission</b></h3></div>
                            <div className="text">Leveraging the power of technology to improve the mental health of aid workers and humanitarian volunteers throughout the world
                        </div>
                        </div>

                        <div style={contentContainer}>
                            <hr></hr>
                            <div className="text"><h3><b>Navigate</b></h3></div>
                            <div className="text">
                                <Link to="/">Home</Link>
                            </div>

                            <div className="text">
                                <Link to="/aboutus">About Us</Link>
                            </div>

                            <div className="text">
                                <Link to="/faq">FAQ</Link>
                            </div>

                            <div className="text">
                                <Link to="/partners">Partners</Link>
                            </div>

                            <div className="text">
                                <Link to="/support">Support Huddl</Link>
                            </div>
                        </div>

                        <div style={contentContainer}>
                            <hr></hr>
                            <div className="text"><h3><b>Contact</b></h3></div>
                            <div className="text">
                                <a href="mailto:hellohuddl@gmail.com"><Typography variant='h3'>hellohuddl@gmail.com</Typography></a>
                            </div>
                        </div>
                    </div>
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <div style={mastheadContainer} className="text">
                        Copyright Ⓒ 2020 Huddl - Los Angeles, CA
                </div>
                </div>
            </ThemeProvider>
        )
    }
}

export default withStyles(styles)(SiteMap)
