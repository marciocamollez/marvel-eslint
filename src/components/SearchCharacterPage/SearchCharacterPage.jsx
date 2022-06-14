import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchBox,
  SearchForm,
  SearchInput,
} from './SearchCharacterPage.styled';

function SearchCharacterPage({ search }) {
  const [text, setText] = useState('');

  const onSearch = (q) => {
    setText(q);
    search(q);
  };

  return (
    <SearchBox>
      <SearchForm>
        <img src="/ic_busca.svg" alt="Busca" />
        <SearchInput
          type="text"
          placeholder="Procure por heróis"
          onChange={(e) => onSearch(e.target.value)}
          value={text}
        />
      </SearchForm>
    </SearchBox>
  );
}

SearchCharacterPage.defaultProps = {
  search: '',
};

SearchCharacterPage.propTypes = {
  search: PropTypes.func,
};

export default SearchCharacterPage;
