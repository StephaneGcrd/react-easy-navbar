import React from 'react'

const Logo = (props) => {
  var logoStyle = {
    color: props.color,
    "font-size": props.fontSize,
    "font-weight": props.fontWeight
  }
  return (
    <div className="navbar-logo navbar-brand-text" style={logoStyle}>
      {props.text}
    </div>
  )
}

export default Logo
