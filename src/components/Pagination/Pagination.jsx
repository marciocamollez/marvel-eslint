import React, { useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import { PaginationBox } from './Pagination.styled';

function Pagination() {
  const { handleNextPagination, handlePrevPagination, currentPage } =
    useContext(Context);

  return (
    <PaginationBox>
      {currentPage > 1 && (
        <button type="button" onClick={handlePrevPagination}>
          Página Anterior
        </button>
      )}
      <button type="button" onClick={handleNextPagination}>
        Próxima Página
      </button>
    </PaginationBox>
  );
}

export default Pagination;
