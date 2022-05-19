/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CharacterName = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
