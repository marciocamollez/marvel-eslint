/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CharacterName = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 50px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const CharacterInfo = styled.div`
  flex: 2;

  h1 {
    font-size: 3rem;
  }
`;
export const CharacterImage = styled.div`
  flex: 1;
`;

export const CharacterNumbers = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-right: 20px;
  }

  p {
    font-size: 1.5rem;
  }

  span {
    font-size: 2rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;

    div {
      margin-right: 0px;
    }
  }
`;

export const CharacterRecord = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;
