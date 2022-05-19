import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Table/Table';
import { Container } from '../../components/styles/Container.styled';
import { StyledBgColor } from './Index.styled';

// hash = timestamp (1) + private key + public key convertido em md5
// const hash = '21beb75ca82b20e52c8910f3e6599d79';
// const apikey = 'eb8c78fd1e6e98315a9d42fff3b5c040';

// Hash da segunda conta criada. Deixar como backup
const hash = 'e8a129eee49b78fd4436bf9bb8102b3d';
const apikey = '0b9047fa3f3f24bdf3933db0deb25d35';

function Index() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearch = async () => {
      const result = await axios(
        `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`
      );
      setItems(result.data.data.results);
      setLoading(false);
      // setContagem(result.data.data.count);
    };

    fetchSearch();
  }, []);

  return (
    <StyledBgColor>
      <Container>
        <h1>Página Inicial</h1>

        <Table items={items} loading={loading} />
      </Container>
    </StyledBgColor>
  );
}

export default Index;
