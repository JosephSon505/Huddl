import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/styles/withStyles';
import Button from '@material-ui/core/Button';
import SvgLines from 'react-mt-svg-lines';
import hero from '../image/hero1.jpg'

// Styles

var welcomePanelContainer = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1%',
}

var interiorFlexRight = {
    display: "flex",
    flexDirection: "column",
    flex: "1.5",
    justifyContent: "center",
    alignItems: "flex-start"
};

const styles = {
    mainClass: {
        width: '100%',
        height: '20%',
        color: 'black',
    }
}

export class WelcomePanel extends Component {

    constructor() {
        super();

        this.state = {
            animation: "first"
        }
    }

    render() {

        const { classes } = this.props;

        return (
            <div style ={welcomePanelContainer}>
            <div style={{paddingTop: 150, paddingLeft: 100, paddingRight: 100, paddingBottom: 150, 
                backgroundImage:`url(${hero})`, backgroundRepeat  : 'no-repeat', backgroundSize: 'cover',}}>
                
                <div style={interiorFlexRight}>
                    <div style={interiorFlexRight}>
                        <div className="header">
                            <br></br>
                            <font color="white">Connecting <b>mental health providers</b> with{" "}
                            <b>humanitarian aid workers</b> on the ground.</font> 
                        </div>

                        <div className="subHeader">
                            <br></br><br></br>
                            <font color="white">Want to learn more about how you can help?</font>
                            <br></br><br></br>
                            <Button size="large"
                             variant="contained" 
                             component={Link} to="/aboutus" 
                             disableElevation
                             color="secondary">Read More
                            </Button> 
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default withStyles(styles)(WelcomePanel)
