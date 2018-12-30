import React, { Component } from 'react'
import './Navbar.css';


const StyleContext = React.createContext(); 

export class Navbar extends Component {
  state = {
    backgroundColor: "#ab47bc"
  }

  componentWillMount() {
    this.setState({
      backgroundColor: this.props.backgroundColor,
      color: this.props.textColor
    })
  }

  render() {
    return (
     
      <StyleContext.Provider value={this.state}>
       <div className="nav-header" style={this.state}>
            {this.props.children}
        </div>
      </StyleContext.Provider>

    )
  }
}

export default Navbar;
export const StyleContextConsumer = StyleContext.Consumer;