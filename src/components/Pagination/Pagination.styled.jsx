/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const PaginationBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;

  button {
    background: #fff;
    color: ${({ theme }) => theme.colors.red};
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    border: 1px solid ${({ theme }) => theme.colors.red};
    cursor: pointer;

    &:hover {
      color: #fff;
      background: ${({ theme }) => theme.colors.red};
    }
  }
`;
