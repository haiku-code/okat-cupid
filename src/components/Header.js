import React from 'react';
import './Header.css';
import logo from '../assets/okat_logo.jpg';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} className="Header-logo" alt="logo"/>
      <NavLink exact to="/" className="nav-link" activeClassName="nav-link-active">
        Home
      </NavLink>
    </header>
  )
};

export default Header;
