import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CharacterBox, CharacterItem, CharacterName } from './Table.styled';

function Table({ items, loading }) {
  return loading ? (
    <h1>Carregando...</h1>
  ) : (
    <CharacterBox>
      {items.map((item) => (
        <CharacterItem key={item.id}>
          <Link to={`/personagem/${item.id}`}>
            <img
              src={`${item.thumbnail.path}/standard_fantastic.jpg`}
              alt={item.name}
            />
          </Link>

          <CharacterName>
            <Link to={`/personagem/${item.id}`}>
              <h2>{item.name}</h2>
            </Link>
          </CharacterName>
        </CharacterItem>
      ))}
    </CharacterBox>
  );
}

Table.defaultProps = {
  items: [],
};

Table.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

export default Table;
