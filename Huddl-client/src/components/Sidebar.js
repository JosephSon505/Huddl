import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Side Navigator Component Imports
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '../css/react-sidenav.css';

// Bootstrap Icon Imports
import { ChatFill, BarChartFill, PeopleFill, HouseFill } from 'react-bootstrap-icons';

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
          <NavText title="PORTAL">
            <Link to="/home"> Portal </Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="forums">
          <NavIcon>
            <Link to="/chatpage"><ChatFill /></Link>
          </NavIcon>
          <NavText title="FORUMS">
            <Link to="/home">Messages</Link>
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