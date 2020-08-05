import React, { useState } from "react";

const Navbar = (props) => {
  const { darkMode, handleDarkmodeSet } = props;
  const toggleMode = (e) => {
    e.preventDefault();
    handleDarkmodeSet(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
