import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Side Navigator Component Imports
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '../css/react-sidenav.css';

// Bootstrap Icon Imports
import { ChatFill, BarChartFill, PeopleFill } from 'react-bootstrap-icons';

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
        <NavItem eventKey="portal">
          <NavIcon>
            <Link to="/portal"><BarChartFill /> </Link>
          </NavIcon>
          <NavText title="PORTAL">
            <Link to="/portal"> Portal </Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="messages">
          <NavIcon>
            <Link to="/chat"><ChatFill /> </Link>
          </NavIcon>
          <NavText title="CHAT">
            <Link to="/chat">Chat</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="forums">
          <NavIcon>
            <Link to="/forums"><PeopleFill /></Link>
          </NavIcon>
          <NavText title="FORUMS">
            <Link to="/forums">Forums</Link>
          </NavText>
        </NavItem>
      </SideNav.Nav>

    </SideNav>
  }
}

export default Sidebar