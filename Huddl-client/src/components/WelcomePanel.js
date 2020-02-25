import React, { Component } from 'react';
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

var interiorFlexLeft = {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    justifyContent: 'center',
    alignItems: 'flex-start'
}

var interiorFlexRight = {
    display: "flex",
    flexDirection: "column",
    flex: "1.5",
    justifyContent: "center",
    alignItems: "flex-start"
};

var interiorFlexLeft = {
    display: "flex",
    flexDirection: "row",
    flex: "1",
    justifyContent: "center",
    alignItems: "center"
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
                

                {/* <div style ={hero}> */}
                {/* <div style ={interiorFlexLeft}>
                    <SvgLines animate={true} duration={50000}>
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="0.5"
                        >
                            <path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z" />
                        </svg>
                    </SvgLines>
                    <img src="https://images.squarespace-cdn.com/content/v1/599d71d115d5dbedc71e62db/1529320547010-9JV08JWKRQAZU5AJCOBO/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/LHR_CT_Ritsona_29MAR17_6045.jpg" alt="Italian Trulli"></img>
                
                </div> */}
                <div style={interiorFlexRight}>
                    <div style={interiorFlexRight}>
                        <div className="header">
                            <br></br>
                        <font color="white">Connecting <b>mental health providers</b> with{" "}
                            <b>humanitarian aid workers</b> on the ground.</font> 
                        </div>
                    </div>
                    <div style={interiorFlexRight}>
                        <div className="subHeader">
                            <br></br><br></br>
                            <font color="white">Want to learn more about how you can help?</font>
                            <br></br><br></br>
                            <Button size="large"
                             variant="contained" 
                             a href="/aboutus"
                             disableElevation
                             color="secondary">Read More
                            
                             </Button>
                            
                </div>
                        {/* <form
                            className={classes.mainClass}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-basic"
                                label="Join the Huddl"
                                variant="outlined"
                                color="white"
                            />
                        </form> */}
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default withStyles(styles)(WelcomePanel)
