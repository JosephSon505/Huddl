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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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
                <div style={contentContainer}>
                    <div className="subHeader" className="siteMapLine"> Our mission</div>
                    <div className="text">Something inspiring about Huddl and working with volunteers on the ground at the forefront of the refugee crisis goes here</div>
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
        )
    }
}

export default withStyles(styles)(SiteMap)
