/**
 * Shared component, which is used across multiple pages.
 */
import React from 'react';
import navbar from './Navbar.module.scss';

const Navbar = () => (
  <nav className={navbar.container}>
    <h3 className={navbar.header}>
      InnRoad
    </h3>
  </nav>
)

export default Navbar;