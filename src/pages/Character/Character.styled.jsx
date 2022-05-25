/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledBgColor = styled.div`
  background-color: ${({ theme }) => theme.bgColors.character};
  border-bottom: 50px solid ${({ theme }) => theme.colors.red};
`;

export const CharacterHeader = styled.header`
  display: flex;
  justify-content: start;
  flex-direction: row;
  align-items: center;

  div {
    margin-right: 50px;
  }

  @media (max-width: 720px) {
    flex-direction: column;

    div {
      margin-top: 50px;
      margin-right: 0px;
    }
  }
`;
