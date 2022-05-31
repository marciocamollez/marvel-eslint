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
    padding-top: 0px;
  }
`;
export const CharacterInfo = styled.div`
  flex: 2;
  margin-right: 50px;

  @media (max-width: 767px) {
    margin-right: 0px;
  }

  h1 {
    font-size: 2rem;
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 10px;
  }
`;
export const CharacterImage = styled.div`
  flex: 1;

  img {
    max-width: 100%;
    display: block;
  }
`;
export const CharacterLikes = styled.div`
  display: flex;
  align-items: center;
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
    justify-content: space-around;

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
