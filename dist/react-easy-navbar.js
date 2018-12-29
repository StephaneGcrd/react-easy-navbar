import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import './Navbar.css';
export var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navbar).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "nav-header"
      }, this.props.children);
    }
  }]);

  return Navbar;
}(Component);
export var Logo = function Logo() {
  return React.createElement("div", {
    className: "navbar-logo navbar-brand-text"
  }, "React Easy Nav");
};
export var NavlinksList = function NavlinksList(props) {
  return React.createElement("div", null, props.children);
};
export var Navlink = function Navlink(props) {
  return React.createElement("span", null, props.text);
};