/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const BoxLikeResults = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  background-color: #fdecec;
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Names = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.red};
    font-size: 1.5rem;
  }

  a:hover {
    color: #000;
  }
`;
