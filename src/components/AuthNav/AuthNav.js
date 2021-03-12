import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/signup"
      exact
      className={style.link}
      activeClassName={style.activeLink}
    >
      Sign Up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={style.link}
      activeClassName={style.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
