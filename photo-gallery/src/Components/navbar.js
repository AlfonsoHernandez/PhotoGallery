import React, { Component } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="logo">AMH</div>
          <NavLink to='/Feed' activeClassName="active">FEED</NavLink>
          <NavLink to='/Journals' activeClassName="active">JOURNALS</NavLink>
          <NavLink to='/Social' activeClassName="active">SOCIAL</NavLink>
          <NavLink to='/Portraits' activeClassName="active">PORTRAITS</NavLink>
      </div>
    );
  }
}

export default NavBar;
