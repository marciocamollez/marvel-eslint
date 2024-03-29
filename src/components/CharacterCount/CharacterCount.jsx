import React, { useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import { Count } from './CharacterCount.styled';

function CharacterCount() {
  const { count, loading } = useContext(Context);

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

export default CharacterCount;
