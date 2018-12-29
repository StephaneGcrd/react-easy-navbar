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

export default Navbar

