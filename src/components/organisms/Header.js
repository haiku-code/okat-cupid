import React from 'react';
import './Header.css';
import logo from '../../assets/okat_logo.jpg';
import {Link} from '../atoms';

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} className="Header-logo" alt="logo"/>
      <Link exact={true} to="/">
        Home
      </Link>
    </header>
  )
};

export default Header;
