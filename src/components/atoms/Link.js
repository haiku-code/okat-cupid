import React from 'react';
import './Link.css';
import {NavLink} from 'react-router-dom';

const Link = ({to, exact, children}) => {
  return (
    <NavLink exact={exact} to={to} className="nav-link" activeClassName="nav-link-active">
      {children}
    </NavLink>
  )
};

export default Link;
