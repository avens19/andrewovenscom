import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function NavBar({ loading }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">Andrew Ovens</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/skills" activeClassName="active">Skills</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
          </li>
          {loading && <li className="nav-item">
            <span className="nav-link">
              <i className="fa fa-refresh"></i>
            </span>
          </li>}
        </ul>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  loading: PropTypes.bool.isRequired
};