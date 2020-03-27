import React, { Component } from 'react'
import {
  Scheduler,
  MonthView,
  WeekView,
  Toolbar,
  ViewSwitcher,
  Appointments
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState} from '@devexpress/dx-react-scheduler';
import {Grid} from '@material-ui/core/Grid';
import axios from 'axios'
import store from '../redux/store';



// Components
import Sidebar from "../components/Sidebar";
import AddEvent from "../components/AddEvent";
import EventForm from "../components/EventForm";

//Styles

import '../css/calendar.css';

var viewContainer = {
    position: 'absolute',
    right: '0%',
    left: '66px',
    height: '100VH',
    display: 'flex',
    alignItems: 'center'
}

var calendarContainer = {
    height: '95%',
    width: '95%',
    display: 'flex',
    justifyContent:'center',
}

const Appointment = ({
  children, style, ...restProps
}) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: '#1eab7d',
        borderRadius: '8px',
      }}
    >
      {children}
    </Appointments.Appointment>
  );

export class calendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            eventForm: false,
          events: [
            {
              startDate: "2018-10-31 10:00",
              endDate: "2018-10-31 11:00",
              title: "Meeting"
            },
            {
              startDate: "2020-03-30T22:30:00.000Z",
              endDate: "2020-03-30T23:00:00.000Z",
              title: "Counseling appt"
            }
          ]
        }
    }

// Handles if the event form should be shown or not
    eventFormToggle = () => {
        console.log("event is being handled at calendar level")
        this.setState({
            eventForm: !this.state.eventForm
        })
    }

    updateCalendarEvents = () => {
      var thisUser = store.getState().user.credentials.handle
      var user = {
        currentUserHandle: thisUser
      }
      axios.get('/updateEvents', user).then(res => {
          this.setState({
            events: res.data
          })
      })
    }

    render() {
        return (
          <div>
            <Sidebar />
            <div style={viewContainer} className="stackBoxes">
                 {this.state.eventForm === true ? 
                 <EventForm 
                 backToCalendar={this.eventFormToggle.bind(this)}/> : null}
              <div className="eventBox">
                <AddEvent onRevealForm={this.eventFormToggle.bind(this)} />
              </div>
              <div className="calendarBox">
                <div style={calendarContainer}>
                  <Scheduler
                    data={this.state.events}
                  >
                    <ViewState
                    />
                    <WeekView
                      startDayHour={6}
                      endDayHour={20}
                    />
                    <MonthView />
                    <Appointments
                      appointmentComponent={Appointment} />
                    <Toolbar />
                    <ViewSwitcher />
                  </Scheduler>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default calendar
