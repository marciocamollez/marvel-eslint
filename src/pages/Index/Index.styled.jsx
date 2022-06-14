/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledBgColor = styled.div`
  background-color: ${({ theme }) => theme.bgColors.index};
  border-bottom: 50px solid ${({ theme }) => theme.colors.red};
`;

export const Widget = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 25px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
