import React from 'react';

var Logo = function Logo(props) {
  var logoStyle = {
    color: props.color,
    "font-size": props.fontSize,
    "font-weight": props.fontWeight
  };
  return React.createElement("div", {
    className: "navbar-logo navbar-brand-text",
    style: logoStyle
  }, props.text);
};

export default Logo;