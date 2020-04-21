import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from '../posts/PostItem';
import { getPosts } from '../../actions/post';
import AdminNavbar from './AdminNavbar';
import PostForm from '../posts/PostForm';

const AdminPosts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Fragment>
      <AdminNavbar />
      <PostForm />
      {posts.map((post) => (
        <PostItem
          key={post._id}
          post={post}
          showActions={false}
          showDelete={true}
        />
      ))}
    </Fragment>
  );
};

AdminPosts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(AdminPosts);
