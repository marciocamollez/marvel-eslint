/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const SearchBox = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const SearchForm = styled.form`
  background: #fdecec;
  border-radius: 50px;
  display: flex;
  padding: 20px;

  img {
    margin-right: 30px;
    margin-left: 30px;
    width: 30px;
  }
`;

export const SearchInput = styled.input`
  color: ${({ theme }) => theme.colors.red};
  padding: 5px;
  width: 500px;
  max-width: 500px;
  font-size: 1rem;
  border: none;
  background: #fdecec;

  @media (max-width: 767px) {
    width: 200px;
    max-width: 200px;
  }
`;
