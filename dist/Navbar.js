import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import './Navbar.css';
var StyleContext = React.createContext();
export var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      backgroundColor: "#ab47bc"
    };
    return _this;
  }

  _createClass(Navbar, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        backgroundColor: this.props.backgroundColor,
        color: this.props.textColor
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(StyleContext.Provider, {
        value: this.state
      }, React.createElement("div", {
        className: "nav-header",
        style: this.state
      }, this.props.children));
    }
  }]);

  return Navbar;
}(Component);
export default Navbar;
export var StyleContextConsumer = StyleContext.Consumer;