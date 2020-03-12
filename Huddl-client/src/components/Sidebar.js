import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Side Navigator Component Imports
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '../css/react-sidenav.css';

// Bootstrap Icon Imports
<<<<<<< HEAD
import { ChatFill, BarChartFill, PeopleFill } from 'react-bootstrap-icons';
=======
import { ChatFill, BarChartFill, PeopleFill, CalendarFill, ToggleOn, HouseFill } from 'react-bootstrap-icons';
>>>>>>> 670f5875ec4d1c9eb3fc21d66743d27a332f5ec1

const Separator = styled.div`
    clear: both;
    position: relative;
    margin: .8rem 0;
    background-color: #ddd;
    height: 1px;
`;

class Sidebar extends Component {
  state = {
    selected: 'home',
    expanded: false
  };

  onSelect = (selected) => {
    this.setState({ selected: selected });
  };
  onToggle = (expanded) => {
    this.setState({ expanded: expanded });
  };

  constructor() {
    super();
  }

  render() {
    return <SideNav style={{ borderRight: '1px solid gray' }}
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="portal" >
        <NavItem eventKey="home">
          <NavIcon>
            <Link to="/home"><HouseFill /> </Link>
          </NavIcon>
          <NavText title="Home">
            <Link to="/home"> Home </Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="portal">
          <NavIcon>
            <Link to="/home"><BarChartFill /> </Link>
          </NavIcon>
<<<<<<< HEAD
          <NavText title="CHAT">
            <Link to="/chat">Chat</Link>
=======
          <NavText title="PORTAL">
            <Link to="/home"> Portal </Link>
>>>>>>> 670f5875ec4d1c9eb3fc21d66743d27a332f5ec1
          </NavText>
        </NavItem>
        <NavItem eventKey="forums">
          <NavIcon>
            <Link to="/home"><PeopleFill /></Link>
          </NavIcon>
          <NavText title="FORUMS">
            <Link to="/home">Forums</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="Google">
        <NavIcon>
            <a href="http://hangouts.google.com/start" target="_blank">G+</a>
        </NavIcon>
        </NavItem>
        
      </SideNav.Nav>

    </SideNav>
  }
}

export default Sidebar