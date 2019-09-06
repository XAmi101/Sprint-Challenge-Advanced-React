
import React from 'react';
import useDarkMode from '../hooks/useDarkMode.js';


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
<nav className="navbar">
    <h1>Female World Cup Winners</h1>
    <div className="dark-mode__toggle">
      <button
        onClick={toggleMode}
        className={darkMode ? 'toggle toggled' : 'toggle'}
      >Change my Background</button>
    </div>    <br/>

  </nav>
);
};

export default Navbar;
