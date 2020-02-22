import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';

import store from '../redux/store';


//Styles

const styles = {
}

var forumContainer = {
  display: 'flex',
  flexDirection: 'column',
  padding: '3.5%'
}

var forumHeader = {
  border: '2px solid #cccccc',
  borderBottom: 'none',
  backgroundColor: '#F3F3F3',
  flex: 2,
  borderRadius: '5px 5px 0px 0px'
}

var recentPosts = {
  border: '2px solid #cccccc',
  borderTop: 'none',
  borderRadius: '0px 0px 5px 5px',
  justifyContent: 'center',
  alignItems: 'center'
}

var columnAlignment = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

var titleStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    fontSize: '55px'
}

var calendarItemStyle = {
    display: 'flex',
    borderRadius: '10px',
    justifyContent:'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '20px',
    backgroundColor: '#F3F3F3',
    margin: '.2%',
    marginTop: "1.25%",
    marginBottom: '1.25%'
}

var bordered = {
  border: "1px solid black"
};

var flexStart = {
  alignItems: 'flex-start'
}

var maxHeight = {
    height: '100%'
}

var maxWidth = {
  width: '100%'
}

var calendarContainers = {
  flex: 3,
  paddingRight: '1%'
};

var lowerContainers = {
  
}


var containerDiv = {
    height: '100%',
    width:'90%',
    display: 'flex'
}

export class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
          currentUserName: store.getState().user.credentials.handle,
          currentTimeLocal: 0,
          currentTimeGreece: 7,
          calendarDate: new Date(),
          calendarRows: [],
          times: [
            "12",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11"
          ],
          schedulerData: [
            {
              startDate: "2018-10-31 10:00",
              endDate: "2018-10-31 11:00",
              title: "Meeting"
            },
            {
              startDate: "2020-02-18 18:00",
              endDate: "2020-02-18 20:00",
              title: "Go to a gym"
            }
          ]
        };
    }

    componentDidMount(){
       this.setTimes();
    }
 
    setTimes = () => {
        var d = new Date();
        var greeceD = new Date().toLocaleString("en-US", {
          timeZone: "Europe/Athens"
        });
       var convertedDate = new Date(greeceD);
        this.setState({
            localHours: d.getHours(),
            greeceHours: convertedDate.getHours(),
            localMinutes: d.getMinutes(),
            greeceMinutes: convertedDate.getMinutes(),
            localDate: d.getDate(),
            greeceDate: convertedDate.getDate(),
            localMonth: d.getMonth(),
            greeceMonth: convertedDate.getMonth()
        })
        
    }

    createCalendarLabel = (headerItem, textItem, hours,minutes,date,month) => {
      var monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', , 'Oct', 'Nov', 'Dec']
      var minuteString = minutes;
      if(minutes < 10){
        minuteString = "0" + minutes;
      }
      var grid = <Grid container item xs={12} spacing={1}>
        <Grid item xs={6} className="hindFont">
          <Grid item xs={6} className="subHeader">
            <p>{headerItem}</p>
          </Grid>
          <Grid item xs={6} className="text">
            <p>{textItem}</p>
          </Grid>
        </Grid>
        <Grid item xs={6} className="hindFont">
          <Grid item xs={6} className="subHeader">
            <p>{hours + ":" + minuteString}</p>
          </Grid>
          <Grid item xs={6} className="text">
            <p>{monthArr[month]}<b>{date}</b></p>
          </Grid>
        </Grid>
      </Grid>
      return grid
    }

    createTimeCalendar = (arr, timeEntered) => {
        var rows = [];
        var timeOfDay = '';
        for(var i=0; i < arr.length;i++){
            if (i < 12){
                timeOfDay = 'am'
            } else {
                timeOfDay = 'pm'
            }
            var timeString = arr[i];
            if(i === timeEntered){
                rows.push(
                  <Grid item xs style={Object.assign({},calendarItemStyle,bordered)}>
                    {timeString}<br />
                    {timeOfDay}
                  </Grid>
                );
            } else {
                rows.push(
                  <Grid item xs style={calendarItemStyle} className="hindFont">
                    {timeString}
                    <br />
                    {timeOfDay}
                  </Grid>
                );
            }
        }
      return rows
    }

    render() {
        const { classes } = this.props;
        return (
          <div style={Object.assign({}, containerDiv, columnAlignment)}>
            <Grid container style={{ flex: 4 }}>
              <Grid container item xs={12} spacing={1}>
                <Grid item xs={12} style={titleStyle} className="hindFont">
                  <p>
                    Welcome, <b>{"\n" + this.state.currentUserName}!</b>
                  </p>
                </Grid>
              </Grid>
            </Grid>

            <Grid container style={Object.assign({}, calendarContainers)}>
              <Grid
                container
                item
                xs={12}
                spacing={0.5}
                justify="center"
                alignItems="center"
              >
                <Grid item xs={2}>
                  {this.createCalendarLabel(
                    "Athens",
                    "Greece",
                    this.state.greeceHours,
                    this.state.greeceMinutes,
                    this.state.greeceDate,
                    this.state.greeceMonth
                  )}
                </Grid>
                <Grid container item xs={10} style={maxHeight}>
                  {this.createTimeCalendar(
                    this.state.times,
                    this.state.greeceHours
                  )}
                </Grid>
              </Grid>
            </Grid>

            <Grid container style={Object.assign({}, calendarContainers)}>
              <Grid
                container
                item
                xs={12}
                spacing={0.5}
                justify="center"
                alignItems="center"
              >
                <Grid item xs={2}>
                  {this.createCalendarLabel(
                    "Local",
                    "Time",
                    this.state.localHours,
                    this.state.localMinutes,
                    this.state.localDate,
                    this.state.localMonth
                  )}
                </Grid>
                <Grid container item xs={10} style={maxHeight}>
                  {this.createTimeCalendar(
                    this.state.times,
                    this.state.localHours
                  )}
                </Grid>
              </Grid>
            </Grid>

            <Grid container style={{ flex: 10 }}>
              <Grid
                container
                item
                xs={12}
                spacing={0.5}
                justify="center"
                alignItems="center"
              >
                <Grid container item xs={6}
                  spacing={0.5}
                  style={Object.assign({}, maxHeight)}
                  justify="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={12}
                    className="hindFont"
                    style={Object.assign({}, maxHeight, forumContainer)}
                  >
                    <Grid
                      item
                      xs={12}
                      className="subHeader"
                      style={forumHeader}
                    >
                      <p>Calendar</p>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      className="text"
                      style={recentPosts}
                    >
                      <Calendar />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={6}
                  spacing={0.5}
                  style={Object.assign({}, maxHeight)}
                  justify="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={12}
                    className="hindFont"
                    style={Object.assign({}, maxHeight, forumContainer)}
                  >
                    <Grid
                      item
                      xs={12}
                      className="subHeader"
                      style={forumHeader}
                    >
                      <p>Recent posts</p>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      className="text"
                      style={recentPosts}
                      className="subHeader"
                    >
                      <p>Coming soon!</p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        );
    }
}

/*
<Scheduler data={this.state.schedulerData} height={"auto"}>
                    <MonthView
                     />
                    <Appointments />
                  </Scheduler>*/

export default withStyles(styles)(Dashboard)
