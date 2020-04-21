import React from 'react';
import { NavLink } from 'react-router-dom';

export const AdminNavbar = () => {
  return (
    <nav className="adminnavbar">
      <ul>
        <li>
          <NavLink to="/admin/posts" activeStyle={{ fontWeight: 'bold' }}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/users" activeStyle={{ fontWeight: 'bold' }}>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
