/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

const Context = createContext();

// hash = timestamp (1) + private key + public key convertido em md5
const hash = '21beb75ca82b20e52c8910f3e6599d79';
const apikey = 'eb8c78fd1e6e98315a9d42fff3b5c040';

// Hash da segunda conta criada. Deixar como backup
// const hash = 'e8a129eee49b78fd4436bf9bb8102b3d';
// const apikey = '0b9047fa3f3f24bdf3933db0deb25d35';

// Hash da terceira conta criada. Deixar como backup
// const hash = '0831fa35f29375d318907526a23a684d';
// const apikey = '57463f7ef04fc32098ca081d675c8d9e';

function AuthProvider({ children }) {
  // Itens da api
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ordenacao
  const [disabled, setDisabled] = useState(false);

  // Contagem
  const [count, setCount] = useState(0);

  // Paginação
  const [limit] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);

  // Busca
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchInitial = async () => {
      const result = await axios(
        `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`
      );
      setItems(result.data.data.results);
      setLoading(false);
      setCount(result.data.data.count);
    };
    fetchInitial();
  }, []);

  function handleSearch(e) {
    setQuery(e.target.value);
    const fetchSearch = async () => {
      const result = await axios(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${apikey}&hash=${hash}`
      );
      setItems(result.data.data.results);
      setLoading(false);
      setCount(result.data.data.count);
    };
    fetchSearch();
  }

  function handleOrder() {
    const fetchOrder = async () => {
      const result = await axios(
        `https://gateway.marvel.com/v1/public/characters?orderBy=modified&ts=1&apikey=${apikey}&hash=${hash}`
      );
      setItems(result.data.data.results);
      setDisabled(true);
      setLoading(false);
    };
    fetchOrder();
  }

  function handleNextPagination() {
    const fetchNextPages = async () => {
      const result = await axios(
        // eslint-disable-next-line prefer-template
        `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}&offset=${offset}&limit=${limit}` +
          { currentPage }
      );
      setItems(result.data.data.results);
      setCurrentPage(currentPage + 1);
      setOffset(offset + 20); // Offset de 20 em 20 personagens para trocar a página
    };
    fetchNextPages();
  }

  function handlePrevPagination() {
    const fetchPrevPages = async () => {
      const result = await axios(
        // eslint-disable-next-line prefer-template
        `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}&offset=${offset}&limit=${limit}` +
          { currentPage }
      );
      setItems(result.data.data.results);
      setOffset(offset - 20); // Offset de 20 em 20 personagens para trocar a página
      setCurrentPage(currentPage - 1);
    };
    fetchPrevPages();
  }

  return (
    <Context.Provider
      value={{
        items,
        loading,
        count,
        handleOrder,
        disabled,
        handleNextPagination,
        handlePrevPagination,
        currentPage,
        handleSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
