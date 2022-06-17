import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BoxLikeResults, Item, Names } from './LikeResults.styled';

function LikeResults() {
  const [charlist, setCharlist] = useState([]);

  useEffect(() => {
    const getList = localStorage.getItem('likeCharacters');

    if (getList) {
      setCharlist(JSON.parse(getList));
    }
  }, []);

  return (
    <BoxLikeResults>
      {charlist.map((item) => (
        <Item key={item.id}>
          <Names>
            <div>
              <Link to={`/personagem/${item.id}`}>
                <p>{item.nome}</p>
              </Link>
            </div>
          </Names>
        </Item>
      ))}
    </BoxLikeResults>
  );
}

export default LikeResults;
