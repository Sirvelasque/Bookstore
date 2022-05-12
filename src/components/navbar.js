import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1>Bookstore!</h1>
    <nav>
      <ul>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/Categories">Categories</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;