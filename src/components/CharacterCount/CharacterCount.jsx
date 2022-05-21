import React from 'react';
import PropTypes from 'prop-types';
import { Count } from './CharacterCount.styled';

function CharacterCount({ count, loading }) {
  return (
    <Count>
      {loading ? <p>Calculando...</p> : <p>Encontrados {count} heróis</p>}
    </Count>
  );
}

CharacterCount.propTypes = {
  count: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CharacterCount;
