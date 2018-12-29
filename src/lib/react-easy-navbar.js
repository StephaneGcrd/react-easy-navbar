import React, { Component } from 'react'
import './Navbar.css';


export class Navbar extends Component {
  render() {
    return (
       <div className="nav-header">
            {this.props.children}
      </div>
    )
  }
}



export const Logo = () => {
  return (
    <div className="navbar-logo navbar-brand-text">
      React Easy Nav
    </div>
  )
}


export const NavlinksList = (props) => {
  return (
    <div>
          {props.children}
    </div>
  )
}




export const Navlink = (props) => {
  return (
    <span>
      {props.text}
    </span>
  )
}


