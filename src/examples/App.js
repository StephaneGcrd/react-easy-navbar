import React, { Component } from 'react';

import {
  Navbar, NavlinkDropdown,
  NavlinkDropdownElement,Navlink, NavlinksList, Logo
} from '../lib'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <NavlinksList>
            <Navlink text="Sign-up" />
            <Navlink text="Sign-in" />
            <Navlink text="F.A.Q" />
            <NavlinkDropdown text="Dropdown">
              <NavlinkDropdownElement text="Dropdown 1" />
              <NavlinkDropdownElement text="Dropdown 2"/>
            </NavlinkDropdown>
          </NavlinksList>
          <Logo/>
        </Navbar>
      </div>
    );
  }
}

export default App;
