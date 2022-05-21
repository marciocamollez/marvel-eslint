/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledBgColor = styled.div`
  background-color: ${({ theme }) => theme.bgColors.index};
`;

export const Widget = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 25px;
`;
