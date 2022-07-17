import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './css/NavBar.module.css';

const Navbar = () => (
  <nav className={style.nav}>
    <ul className={style.list}>
      <li className={style.listItem}>
        <NavLink
          to="/"
          className={({ isActive }) => `${style['nav-link']} ${(isActive ? style.selected : '')}`}
        >
          BOOKS
        </NavLink>
      </li>
      <li className={style.listItem}>
        <NavLink
          to="/categories"
          className={({ isActive }) => `${style['nav-link']} ${(isActive ? style.selected : '')}`}
        >
          CATEGORIES
        </NavLink>
      </li>
    </ul>
  </nav>

);

export default Navbar;
