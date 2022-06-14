/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CharacterBox = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const CharacterItem = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
  padding-left: 25px;
  padding-right: 25px;
  box-sizing: border-box;

  img {
    border-bottom: 5px solid ${({ theme }) => theme.colors.red};
  }

  a {
    text-decoration: none;
  }

  h2 {
    font-family: sans-serif;
    font-size: 1rem;
    color: #404040;
    display: inline-block;
    margin: 0px;
    padding: 0px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const CharacterName = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 70px;
  width: 100%;
  align-items: center;
`;
