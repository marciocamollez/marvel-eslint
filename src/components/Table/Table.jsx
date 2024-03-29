import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';
import { CharacterBox, CharacterItem, CharacterName } from './Table.styled';
import LikeButton from '../LikeButton/LikeButton';

function Table() {
  const { items, loading } = useContext(Context);

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
            <LikeButton item={item} />
          </CharacterName>
        </CharacterItem>
      ))}
    </CharacterBox>
  );
}

export default Table;
