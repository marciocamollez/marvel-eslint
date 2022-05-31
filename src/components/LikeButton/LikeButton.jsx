/* eslint-disable dot-notation */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import LikeModel from './like.model';

function LikeButton({ item }) {
  function loadStorage() {
    const characterDb = localStorage['likeCharacters'];
    const likeCharacters = characterDb ? JSON.parse(characterDb) : [];
    localStorage['likeCharacters'] = JSON.stringify(likeCharacters);

    return likeCharacters;
  }

  const [isLike, setIsLike] = useState(false);
  const [advice, setAdvice] = useState(false);

  useEffect(() => {
    loadStorage();
    const characterDb = localStorage['likeCharacters'];

    if (characterDb.includes(item.id)) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, []);

  const handleLike = () => {
    const characterDb = localStorage['likeCharacters'];
    const likeCharacters = JSON.parse(characterDb) || [];

    if (characterDb.includes(item.id)) {
      setIsLike(false);
      setAdvice(false);
      const filtered = likeCharacters.filter((a) => a.id !== item.id);
      localStorage['likeCharacters'] = JSON.stringify(filtered);
    } else {
      likeCharacters.push(new LikeModel(item.id, item.name, true));
      setIsLike(true);
      setAdvice(false);
      localStorage['likeCharacters'] = JSON.stringify(likeCharacters);

      if (likeCharacters.length > 5) {
        // console.log('Ultrapassou 5');
        setAdvice(true);
        const cutLimit = likeCharacters.slice(0, 5);
        setIsLike(false);
        localStorage['likeCharacters'] = JSON.stringify(cutLimit);
      }
    }
  };

  return (
    <>
      <button
        onClick={handleLike}
        aria-hidden="true"
        type="button"
        className={`bt-like like-button ${isLike ? 'liked' : ''}`}
      >
        {' '}
      </button>
      {advice ? 'Max. 5' : ''}
    </>
  );
}
LikeButton.defaultProps = {
  item: '',
};

LikeButton.propTypes = {
  item: PropTypes.object,
};

export default LikeButton;
