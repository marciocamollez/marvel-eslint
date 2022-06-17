import React from 'react';
import Table from '../../components/Table/Table';
import { Container } from '../../components/styles/Container.styled';
import { StyledBgColor, Widget } from './Index.styled';
import HeaderIndex from '../../components/HeaderIndex/HeaderIndex';
import SearchIndex from '../../components/SearchIndex/SearchIndex';
import CharacterCount from '../../components/CharacterCount/CharacterCount';
import CharacterOrder from '../../components/CharacterOrder/CharacterOrder';
import Pagination from '../../components/Pagination/Pagination';
import ButtonOrder from '../../components/ButtonOrder/ButtonOrder';
import LikeFilter from '../../components/LikeFilter/LikeFilter';

function Index() {
  return (
    <StyledBgColor>
      <Container>
        <HeaderIndex />

        <SearchIndex />

        <Widget>
          <CharacterCount />
          <CharacterOrder />
          <ButtonOrder />
          <LikeFilter />
        </Widget>

        <Table />

        <Pagination />
      </Container>
    </StyledBgColor>
  );
}

export default Index;
