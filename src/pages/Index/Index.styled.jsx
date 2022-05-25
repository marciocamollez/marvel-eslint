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
export const ButtonOrder = styled.button`
  width: 75px;
  height: 41px;
  background-image: url(/toggle_off.svg);
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    width: 75px;
    height: 41px;
    background-image: url(/toggle_on.svg);
  }

  &:disabled {
    width: 75px;
    height: 41px;
    background-image: url(/toggle_disabled.svg);
    cursor: default;
  }
`;

export const Pagination = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;

  div {
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
