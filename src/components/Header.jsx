import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure, signIn, signOut } from '../redux/index.jsx'

const Header = () => {
  // effectue une action depuis le 'store' et change le 'state'
  const dispatch = useDispatch();
  const btnElt = document.querySelector('#btn-login')

  // React.useEffect(() => {
  //   signOut()
  // }, [btnElt])
  const handleSignOut = () => {
    //e.preventDefault()
    dispatch(signOut())
  }

  return (
    <header className="header">
      <nav className="navbar shadow-sm mx-3">
          <div className="d-flex">
            <Link to="/" 
                  className="navbar-brand d-flex align-items-center">My Social Network</Link>
            <ul className="d-flex align-items-center">
              <li className="mx-2">
              </li>
            </ul>
          </div>
          <div className="d-flex">{
            Cookies.get('token') ?
              <button onClick={() => dispatch(signOut())}
                      className="btn btn-outline-danger">Log out</button>
            :
              <button type="button" className="btn btn-outline-light" disabled>Log out</button>
          }</div>
      </nav>
    </header>
  );
};

export default Header;