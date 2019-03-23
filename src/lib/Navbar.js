import React, { useState, useEffect } from "react";
import "./Navbar.css";

const StyleContext = React.createContext();

const Navbar = props => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    setBackgroundColor("#AAAAAA");
    setColor("#000000");
  });

  return (
    <StyleContext.Provider value={{ backgroundColor, color }}>
      <div className="nav-header" style={{ backgroundColor, color }}>
        {props.children}
      </div>
    </StyleContext.Provider>
  );
};

export default Navbar;
export const StyleContextConsumer = StyleContext.Consumer;
