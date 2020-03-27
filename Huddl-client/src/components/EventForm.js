import React, { Component } from 'react'
import {TextField, Button, IconButton, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'
import store from '../redux/store';

//Components
import DatePicker from "react-datepicker";

//CSS files
import "react-datepicker/dist/react-datepicker.css";

//Axios
axios.defaults.baseURL = 'https://us-central1-letshuddl.cloudfunctions.net/api';

// Styles
var textInput = {
  marginTop: '2%',
  padding: ".5%",
  paddingTop: '2.5%',
  paddingBottom: '2.5%',
  width: '90%',
  height:'7.5%',
  color: "#2e2e2e",
  border: '1px solid transparent',
  fontSize: 12,
  borderRadius: '5px'
};

var addEventForm = {
  display: "flex",
  flex: 8,
  flexDirection: "column",
  width: '100%',
  height:'100%',
  justifyContent: 'flex-start',
  alignItems:'center'
};

var titleRow = {
  display: 'flex', 
  flexDirection: 'row',
  flex: 2,
  width: '100%',
  height: '100%'
}
var flexRow = {
  display: 'flex', 
  flexDirection: 'row'
}
var row = { 
  display:'flex',
  flex: 1, 
  height: '100%',
  width: '100%',
  alignItems:'center',
  fontSize: '25px'
}

var flexStart = {
  justifyContent: 'flex-start',
}
var flexEnd = {
  justifyContent: 'flex-end'
}

export class EventForm extends Component {
    constructor(){
        super();
        this.state = {
            currentUserHandle: '',
            eventTitle: '',
            selectedDate: new Date(),
            handle: ''
        }
    }

         //Change handler for all inputs
         changeHandler = e => {
           var value = e.target.value;
           var name = e.target.name;
           this.setState({
             [name]: value
           });
         };

         dateChangeHandler = (date) => {
             this.setState({
                 selectedDate: date
             })
         }
         
         // Go back to home without adding event
         backToCalendar = () => {
          this.props.backToCalendar()
         }

         //Submit form
         submitForm = (event) => {
           event.preventDefault()
           this.props.backToCalendar()
           var thisUser = store.getState().user.credentials.handle
           var dateEnd = this.state.selectedDate.setHours(this.state.selectedDate.getHours() + 1)
           var stringDateStart = this.state.selectedDate.toISOString()
           var stringDateEnd = dateEnd.toISOString()
           var eventInformation = {
             title: this.state.eventTitle,
             startDate: stringDateStart,
             endDate: stringDateEnd,
             handle: this.state.handle,
             currentUserHandle: thisUser
           }
           console.log(eventInformation)
            this.createEvent(eventInformation)
         }

         // Send to backend
         createEvent = (information) => {
           axios.post('/calendarEvent', information)
         }

         render() {
           return (
             <div className="overlayEvent">
               <div className="fadeEvent" />
               <div className="formEvent">
                 <div
                   style={Object.assign({}, textInput, titleRow)}>
                   <div style={Object.assign({}, row, flexStart)} className="hindFont">
                     <b>Create an event</b>
                       </div>
                   <div style={Object.assign({}, row, flexEnd)}>
                     <IconButton aria-label="delete" color="default" onClick={this.backToCalendar.bind(this)}>
                       <DeleteIcon />
                     </IconButton>
                    
                   </div>
                 </div>  
                 <form style={addEventForm} onSubmit={this.formSubmit}>
                   <TextField
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     onChange={this.changeHandler}
                     name="eventTitle"
                     label="Event title"
                     id="eventTitle"
                   />
                   <TextField
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     id="handle"
                     onChange={this.changeHandler}
                     label="Handle of other participant"
                     name="handle"
                     autoComplete="handle"
                     autoFocus
                   />
                   <div
                     style={Object.assign({}, textInput, flexRow)}>
                     <div style={Object.assign({}, row, flexStart)}>
                       <b className="hindFont">Date + time</b>
                       </div>
                     <div style={Object.assign({}, row, flexEnd)}>
                       <DatePicker
                         selected={this.state.selectedDate}
                         onChange={this.dateChangeHandler}
                         showTimeSelect
                         dateFormat="Pp"
                         style={textInput}
                       />
                     </div>
                   </div>
                   <Button
                     variant="contained"
                     color="primary"
                     disableElevation
                     style={{marginTop: '5%'}}
                     onClick={this.submitForm.bind(this)}
                   >
                     submit
                   </Button>
                 </form>
               </div>
             </div>
           );
         }
       }

export default EventForm
