/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const BoxInternSearch = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 50px;
  background-color: #fdecec;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ItemInternSearch = styled.div`
  display: flex;
  width: 25%;
  justift-content: center;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const NamesInternSearch = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.red};
  }

  a:hover {
    color: #000;
  }
`;
