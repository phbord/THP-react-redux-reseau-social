import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from 'ThemeContext';

const Header = () => {

  return (
    <header className="header">
      <nav className="navbar shadow-sm">
          <div className="d-flex">
            <Link to="/" 
                  className="navbar-brand d-flex align-items-center">My Social Network</Link>
            <ul className="d-flex align-items-center">
              <li className="mx-2">
              </li>
            </ul>
          </div>
      </nav>
    </header>
  );
};

export default Header;