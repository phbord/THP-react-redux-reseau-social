import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import { logout } from '../redux/index.jsx'

const Header = () => {
  // effectue une action depuis le 'store' et change le 'state'
  const dispatch = useDispatch();
  const { checkLogOutBtn } = useSelector(state => state)

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <header className="header">
      <nav className="navbar shadow-sm mx-3">
          <div className="d-flex">
            <h1>
              <Link to="/" 
                    className="navbar-brand d-flex align-items-center">My Social Network</Link>
            </h1>
            <ul className="d-flex align-items-center">
              {
                Cookies.get('token') ? (<>
                <li>
                  <Link type="button" 
                        to="/me"
                        className="btn btn-outline-light me-2">Me</Link>
                </li>
                <li>
                  <Link type="button" 
                        to="/users"
                        className="btn btn-outline-light me-2">Profiles</Link>
                </li>
                </>) : (<></>)
              }
            </ul>
          </div>
          <div className="d-flex">
            {
              Cookies.get('token') ? (<>
                <button type="button" 
                        onClick={handleLogout}
                        className="btn btn-danger">Log out</button>
              </>) : (<>
                <Link type="button" 
                      to="/register"
                      className="btn btn-light me-2">Register</Link>
                <Link type="button" 
                      to="/login"
                      className="btn btn-light">Log in</Link>
              </>)
            }
          </div>
      </nav>
    </header>
  );
};

export default Header;