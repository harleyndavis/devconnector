import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { user, isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      {user && (
        <li>
          <Link to="/dashboard">
            <i className="fas fa-user" />{' '}
            <span>Hello, {user.name.split(' ')[0]}</span>
          </Link>
        </li>
      )}
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li className="hide-sm">
        Welcome <b>Guest</b> -
      </li>
      <li>
        <Link to="/login">Sign In</Link>
      </li>
    </ul>
  );

  const defaultLinks = (
    <ul>
      <NavLink
        to="/"
        color="primary"
        activeStyle={{ fontWeight: 'bold' }}
        isActive={(match, location) => {
          if (match.path === '\\/' && match.url === '/') return true;
        }}
      >
        Blog
      </NavLink>
      <NavLink
        to="/profile/5e98d8f1df6c8a559011cbd1"
        color="primary"
        activeStyle={{ fontWeight: 'bold' }}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        color="primary"
        activeStyle={{ fontWeight: 'bold' }}
      >
        Contact
      </NavLink>
      {user && user.admin && (
        <NavLink
          to="/admin/posts"
          color="primary"
          activeStyle={{ fontWeight: 'bold' }}
          isActive={(match, location) => {
            if (
              location.pathname === '/admin/posts' ||
              location.pathname === '/admin/users'
            )
              return true;
          }}
        >
          Admin
        </NavLink>
      )}
    </ul>
  );

  return (
    <nav className="navbar bg-light">
      <h1>
        <i className="fas fa-minus" />
        <span>
          <Link to="/" color="primary">
            Davis <br />
            Discovers
          </Link>
        </span>

        <i className="fas fa-minus" />
      </h1>
      {defaultLinks}
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
