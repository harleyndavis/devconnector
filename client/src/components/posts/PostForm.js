import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    header: '',
    thumb: '',
    file: null
  });

  const { title, text, file } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const clearFields = () => {};

  return (
    <div className="post-form">
      <h3>Create New Post</h3>
      <form
        className="form my-1"
        encType="multipart/form-data"
        boundary="--J3#4^^^--"
        onSubmit={(e) => {
          e.preventDefault();
          addPost(formData, file);
          clearFields();
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Title of post"
          value={title}
          required
          onChange={(e) => onChange(e)}
        />
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Body of post"
          value={text}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          type="text"
          name="header"
          placeholder="Header Url"
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          name="thumb"
          placeholder="Thumbnail Url"
          onChange={(e) => onChange(e)}
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
