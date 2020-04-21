import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

/* No Camera Image Used https://i.imgur.com/CJA13xC.png, Icons made by Those Icons from  www.flaticon.com*/

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, title, thumb, text, user, likes, comments, date },
  showActions,
  showDelete,
  limitText
}) => (
  <div className="post bg-white p-1 my-1">
    <img
      src={thumb && thumb !== '' ? thumb : 'https://i.imgur.com/CJA13xC.png'}
      alt=""
    />
    <div>
      <div>
        <h4>{title}</h4>
      </div>
      <div>
        {limitText ? (
          <p className="text my-1">{text}</p>
        ) : (
          <p className="my-1">{text}</p>
        )}
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>

        {showActions && (
          <Fragment>
            <button
              onClick={() => addLike(_id)}
              type="button"
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-up" />{' '}
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button
              onClick={() => removeLike(_id)}
              type="button"
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-down" />
            </button>
            <Link to={`/posts/${_id}`} className="btn btn-primary">
              Discussion{' '}
              {comments.length > 0 && (
                <span className="comment-count">{comments.length}</span>
              )}
            </Link>
          </Fragment>
        )}
      </div>
    </div>
    {showDelete &&
      !auth.loading &&
      user &&
      auth.user &&
      user === auth.user._id && (
        <button
          onClick={() => deletePost(_id)}
          type="button"
          className="btn btn-danger"
        >
          <i className="fas fa-times" />
        </button>
      )}
  </div>
);

PostItem.defaultProps = {
  showActions: true,
  showDelete: false,
  limitText: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
  showDelete: PropTypes.bool,
  limitText: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
