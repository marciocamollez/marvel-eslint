import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { StyledBgColor, CharacterHeader } from './Character.styled';
import { Container } from '../../components/styles/Container.styled';
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails';
import SearchIndex from '../../components/SearchIndex/SearchIndex';
import ResultsInternSearch from '../../components/ResultsInternSearch/ResultsInternSearch';

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

  // Busca
  const [query, setQuery] = useState('');
  const [resultsInternSearch, setResultsInternSearch] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios(
        `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${apikey}&hash=${hash}`
      );
      setItems(result.data.data.results);
      setComics(result.data.data.results[0].comics.items);
    };

    fetch();
  }, [items]);

  // Busca da página de personagens
  useEffect(() => {
    const fetchInternSearch = async () => {
      if (query) {
        const result = await axios(
          `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${apikey}&hash=${hash}`
        );
        setResultsInternSearch(result.data.data.results);
      }
    };

    fetchInternSearch();
  }, [query]);

  return (
    <StyledBgColor>
      <Container>
        <CharacterHeader>
          <div>
            <img src="/logo_menor.svg" alt="Marvel" title="Marvel" />
          </div>
          <SearchIndex search={(q) => setQuery(q)} />
        </CharacterHeader>
        <ResultsInternSearch resultsInternSearch={resultsInternSearch} />

        <CharacterDetails items={items} comics={comics} />
      </Container>
    </StyledBgColor>
  );
}

export default Character;
