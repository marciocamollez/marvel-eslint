import React, { useContext } from 'react';
import { SearchBox, SearchForm, SearchInput } from './SearchIndex.styled';
import { Context } from '../../Context/AuthContext';

function SearchIndex() {
  const { handleSearch } = useContext(Context);

  return (
    <SearchBox>
      <SearchForm>
        <img src="/ic_busca.svg" alt="Busca" />
        <SearchInput
          type="text"
          placeholder="Procure por heróis"
          onChange={handleSearch}
        />
      </SearchForm>
    </SearchBox>
  );
}

export default SearchIndex;
