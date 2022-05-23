import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

// eslint-disable-next-line no-unused-vars
function LikeButton({ items }) {
  const [like, setLike] = useState(100);
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  };

  return (
    <div>
      <button
        onClick={handleLike}
        aria-hidden="true"
        type="button"
        className={`bt-like like-button ${isLike ? 'liked' : ''}`}
      >
        {like}
      </button>
    </div>
  );
}
LikeButton.defaultProps = {
  items: [],
};

LikeButton.propTypes = {
  items: PropTypes.array,
};

export default LikeButton;
