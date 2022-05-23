import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Table/Table';
import { Container } from '../../components/styles/Container.styled';
import { StyledBgColor, Widget, ButtonOrder, Pagination } from './Index.styled';
import HeaderIndex from '../../components/HeaderIndex/HeaderIndex';
import SearchIndex from '../../components/SearchIndex/SearchIndex';
import CharacterCount from '../../components/CharacterCount/CharacterCount';
import CharacterOrder from '../../components/CharacterOrder/CharacterOrder';

// hash = timestamp (1) + private key + public key convertido em md5
const hash = '21beb75ca82b20e52c8910f3e6599d79';
const apikey = 'eb8c78fd1e6e98315a9d42fff3b5c040';

// Hash da segunda conta criada. Deixar como backup
// const hash = 'e8a129eee49b78fd4436bf9bb8102b3d';
// const apikey = '0b9047fa3f3f24bdf3933db0deb25d35';

function Index() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Busca
  const [query, setQuery] = useState('');

  // Contagem
  const [count, setCount] = useState(0);

  // Ordenacao
  const [, setOrder] = useState(true);
  const [disabled, setDisabled] = useState(false);

  // Paginação
  const [total, setTotal] = useState(0);
  const [limit] = useState(20);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);

  // Listagem inicial e digitar busca
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

  // Botão de ordenação
  const fetchOrder = async () => {
    const result = await axios(
      `https://gateway.marvel.com/v1/public/characters?orderBy=modified&ts=1&apikey=${apikey}&hash=${hash}`
    );
    setItems(result.data.data.results);
    setOrder(false);
    setLoading(false);
    setDisabled(true);
  };

  // Paginação
  useEffect(() => {
    const fetchPages = async () => {
      const result = await axios(
        `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}&offset=${offset}&limit=${limit}${{
          currentPage,
        }}`
      );
      setTotal(result.data.data.total);
      const totalPages = Math.ceil(total / limit);

      const arrayPages = [];
      for (let i = 1; i <= totalPages; i += 1) {
        arrayPages.push(i);
      }

      setPages(arrayPages);
      setItems(result.data.data.results);
      setOffset(offset + 20); // Offset de 20 em 20 personagens para trocar a página
    };

    fetchPages();
  }, [currentPage, limit, total]);

  return (
    <StyledBgColor>
      <Container>
        <HeaderIndex />

        <SearchIndex search={(q) => setQuery(q)} />

        <Widget>
          <CharacterCount count={count} loading={loading} />
          <CharacterOrder />
          <ButtonOrder onClick={fetchOrder} disabled={disabled} />
        </Widget>

        <Table items={items} loading={loading} />

        <Pagination>
          {currentPage > 1 && (
            <div
              onClick={() => setCurrentPage(currentPage - 1)}
              aria-hidden="true"
            >
              Página Anterior
            </div>
          )}
          {currentPage < pages.length && (
            <div
              onClick={() => setCurrentPage(currentPage + 1)}
              aria-hidden="true"
            >
              Próxima Página
            </div>
          )}
        </Pagination>
      </Container>
    </StyledBgColor>
  );
}

export default Index;
