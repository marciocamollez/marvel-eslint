/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledBgColor = styled.div`
  background-color: ${({ theme }) => theme.bgColors.index};
  border-bottom: 50px solid ${({ theme }) => theme.colors.red};
`;

export const Title = styled.h1`
  font-family: sans-serif;
  font-size: 1.5rem;
  color: #404040;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0px;
`;

export const Desc = styled.p`
  font-family: sans-serif;
  font-size: 1rem;
  color: #404040;
  text-align: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.red};
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.red};
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
    color #ffffff;
  }
`;
