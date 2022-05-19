import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { StyledBgColor } from './Character.styled';
import { Container } from '../../components/styles/Container.styled';
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails';

function Character() {
  // hash = timestamp (1) + private key + public key convertido em md5
  // const hash = '21beb75ca82b20e52c8910f3e6599d79';
  // const apikey = 'eb8c78fd1e6e98315a9d42fff3b5c040';

  // Hash da segunda conta criada. Deixar como backup
  const hash = 'e8a129eee49b78fd4436bf9bb8102b3d';
  const apikey = '0b9047fa3f3f24bdf3933db0deb25d35';

  const [items, setItems] = useState([]);
  const [comics, setComics] = useState([]);
  const { id } = useParams(); // Pegar id pela URL com o react router dom v6

  useEffect(() => {
    const fetch = async () => {
      const result = await axios(
        `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${apikey}&hash=${hash}`
      );
      setItems(result.data.data.results);
      setComics(result.data.data.results[0].comics.items);
    };

    fetch();
  }, [items]); // A cada clique feito na busca interna, vai ser preciso refatorar o items

  return (
    <StyledBgColor>
      <Container>
        <h1>Página Persnagem</h1>

        <CharacterDetails items={items} comics={comics} />
      </Container>
    </StyledBgColor>
  );
}

export default Character;
