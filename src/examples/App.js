import React, { Component } from 'react';

import {
  Navbar, NavlinkDropdown,
  NavlinkDropdownElement,Navlink, NavlinksList, Logo
} from '../lib'

import './app.css'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          backgroundColor="#3949ab"
          textColor="white"
        >
          <NavlinksList>
            <Navlink text="Sign-up" />
            <Navlink text="Sign-in" />
            <Navlink text="F.A.Q" />
            <NavlinkDropdown text="Dropdown">
              <NavlinkDropdownElement text="Dropdown 1" textColor="black"/>
              <NavlinkDropdownElement text="Dropdown 2" textColor="black"/>
            </NavlinkDropdown>
          </NavlinksList>
          <Logo text="React-easy-nav" />
        </Navbar>
      </div>
    );
  }
}

export default App;
