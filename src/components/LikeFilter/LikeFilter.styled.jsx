/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FilterBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;

  p {
    color: ${({ theme }) => theme.colors.red};
    display: inline-block;
  }

  a {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  padding: 12px;
  width: 18px;
  height: 18px;
  background-image: url(/favorito_02.svg);
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-image: url(/favorito_01.svg);
    cursor: pointer;
  }
`;
