/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const HeaderMarvel = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: sans-serif;
    font-size: 2rem;
    color: #404040;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  p {
    font-family: sans-serif;
    font-size: 1rem;
    color: #404040;
    text-align: center;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
