import React from 'react';
import { Link } from 'react-router-dom';
import { FilterBox, Button } from './LikeFilter.styled';

function LikeFilter() {
  return (
    <FilterBox>
      <Link to="/curtidos">
        <Button aria-hidden="true" type="button">
          {}
        </Button>
      </Link>
      <p>somente favoritos</p>
    </FilterBox>
  );
}

export default LikeFilter;
