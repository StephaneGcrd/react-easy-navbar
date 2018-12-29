import React from 'react';

var NavlinksList = function NavlinksList(props) {
  return React.createElement("div", {
    className: "navLinks"
  }, props.children);
};

export default NavlinksList;