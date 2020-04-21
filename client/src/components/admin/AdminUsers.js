import React from 'react';
import AdminNavbar from '../admin/AdminNavbar';
import { connect } from 'react-redux';

export const AdminUsers = () => {
  return <AdminNavbar />;
};

export default connect(null, {})(AdminUsers);
