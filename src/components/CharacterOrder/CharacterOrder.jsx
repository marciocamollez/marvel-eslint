import React, { useState } from 'react';
import axios from 'axios';
/* import PropTypes from 'prop-types'; */
import { OrdernationBox, OrdenationCheck } from './CharacterOrder.styled';

// hash = timestamp (1) + private key + public key convertido em md5
const hash = '21beb75ca82b20e52c8910f3e6599d79';
const apikey = 'eb8c78fd1e6e98315a9d42fff3b5c040';

// Hash da segunda conta criada. Deixar como backup
// const hash = 'e8a129eee49b78fd4436bf9bb8102b3d';
// const apikey = '0b9047fa3f3f24bdf3933db0deb25d35';

function CharacterOrder() {
  const [setItems] = useState([]);
  const [setLoading] = useState(true);

  // Ordem
  const [order, setOrder] = useState(true);

  const handleCheck = async () => {
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

  return (
    <OrdernationBox>
      <span>
        <img src="/ic_heroi.svg" alt="Ordenar" />
      </span>
      <OrdenationCheck>
        <p>Ordenar por nome A-Z:</p>
        <input type="checkbox" onClick={handleCheck} defaultChecked={order} />
      </OrdenationCheck>
    </OrdernationBox>
  );
}

/* 
CharacterOrder.defaultProps = {
  items: [],
};

CharacterOrder.propTypes = {
  order: PropTypes.bool.isRequired,
  items: PropTypes.array,
  loading: PropTypes.bool.isRequired,
}; */

export default CharacterOrder;
