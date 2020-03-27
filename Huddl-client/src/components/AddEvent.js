import React, { Component } from 'react'
import Button from "@material-ui/core/Button";

// Components

// Styles
var displayAndWidth = {
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center"
};

var titleContainer = {
  fontSize: "40px",
  flex: 5,
  justifyContent: 'center'
};

var buttonContainer = {
  flex: 5,
  justifyContent: "center"
};


export class AddEvent extends Component {
    constructor(){
        super();
        this.state = {
            eventForm: false,
            buttonText: "+ Add event"
        }
    }

    addEvent = () => {
        this.props.onRevealForm();
    }

    render() {
        return (
          <div className="addEventContainer">
              <div
                style={Object.assign({}, displayAndWidth, titleContainer)}
                className="hindFont"
              >
                Calendar
              </div>
              <div style={Object.assign({}, displayAndWidth, buttonContainer)}>
                <Button
                  style={{ textTransform: "none" }}
                  variant="contained"
                  color="default"
                  disableElevation
                  onClick = {this.addEvent.bind(this)}
                >
                  <p className="hindFont">{this.state.buttonText}</p>
                </Button>
              </div>
          </div>
        );
    }
}

export default AddEvent
