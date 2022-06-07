import React from 'react';
import PropTypes from 'prop-types';
import { Count } from './CharacterCount.styled';

function CharacterCount({ count, loading }) {
  return (
    <Count>
      {loading ? (
        <p>Calculando...</p>
      ) : (
        <p data-testid="countheros">Encontrados {count} heróis</p>
      )}
    </Count>
  );
}

CharacterCount.defaultProps = {
  count: 0,
  loading: false,
};

CharacterCount.propTypes = {
  count: PropTypes.number,
  loading: PropTypes.bool,
};

export default CharacterCount;
