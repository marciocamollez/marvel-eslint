import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Table/Table';
import { Container } from '../../components/styles/Container.styled';
import { StyledBgColor, Widget } from './Index.styled';
import HeaderIndex from '../../components/HeaderIndex/HeaderIndex';
import SearchIndex from '../../components/SearchIndex/SearchIndex';
import CharacterCount from '../../components/CharacterCount/CharacterCount';
import CharacterOrder from '../../components/CharacterOrder/CharacterOrder';

// hash = timestamp (1) + private key + public key convertido em md5
// const hash = '21beb75ca82b20e52c8910f3e6599d79';
// const apikey = 'eb8c78fd1e6e98315a9d42fff3b5c040';

// Hash da segunda conta criada. Deixar como backup
const hash = 'e8a129eee49b78fd4436bf9bb8102b3d';
const apikey = '0b9047fa3f3f24bdf3933db0deb25d35';

function Index() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Busca
  const [query, setQuery] = useState('');

  // Contagem
  const [count, setCount] = useState(0);

  // Ordenacao
  const [order, setOrder] = useState(true);

  useEffect(() => {
    const fetchSearch = async () => {
      if (query === '') {
        const result = await axios(
          `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`
        );
        setItems(result.data.data.results);
        setLoading(false);
        setCount(result.data.data.count);
      } else {
        const result = await axios(
          `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${apikey}&hash=${hash}`
        );
        setItems(result.data.data.results);
        setLoading(false);
        setCount(result.data.data.count);
      }
    };
    fetchSearch();
  }, [query]);

  useEffect(() => {
    const fetchOrder = async () => {
      // Inicialmente deixa marcado a ordenação original que já é por nome
      if (order) {
        const result = await axios(
          `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`
        );
        setItems(result.data.data.results);
        setOrder(true);
        setLoading(false);

        // Caso a caixa seja desmarcada, faz a requisição para ser ordenado por item modificado
      } else {
        const result = await axios(
          `https://gateway.marvel.com/v1/public/characters?orderBy=modified&ts=1&apikey=${apikey}&hash=${hash}`
        );
        setItems(result.data.data.results);
        setOrder(false);
        setLoading(false);
      }
    };

    fetchOrder();
  }, [order]);

  return (
    <StyledBgColor>
      <Container>
        <HeaderIndex />

        <SearchIndex search={(q) => setQuery(q)} />

        <Widget>
          <CharacterCount count={count} loading={loading} />
          <CharacterOrder order={() => setOrder(!order)} />
        </Widget>

        <Table items={items} loading={loading} />
      </Container>
    </StyledBgColor>
  );
}

export default Index;
