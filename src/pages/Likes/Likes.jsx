import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/styles/Container.styled';
import { StyledBgColor, Title, Desc, Button } from './Likes.styled';
import LikeResults from '../../components/LikeResults/LikeResults';

function Likes() {
  return (
    <StyledBgColor>
      <Container>
        <Link to="/">
          <img src="/logo.svg" alt="Marvel" title="Marvel" />
        </Link>

        <Title>Personagens curtidos: (máx 5 permitidos)</Title>
        <Desc>Clique para ir para a página do personagem</Desc>
        <LikeResults />
        <Link to="/">
          <Button>Voltar para página inicial</Button>
        </Link>
      </Container>
    </StyledBgColor>
  );
}

export default Likes;
