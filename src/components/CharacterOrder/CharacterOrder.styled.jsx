/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const OrdernationBox = styled.section`
  display: flex;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.red};
  }

  img {
    display: inline-block;
    margin-right: 15px;
  }
`;

export const OrdenationCheck = styled.span`
  display: flex;
  align-items: center;

  p {
    margin-right: 15px;
  }
`;

export const OrdenationInput = styled.input`
  display: none;

  label {
    cursor: pointer;
    display: inline-block;
    padding: 0;
    width: 75px;
    height: 41px;
    background-image: url(/public/toggle_off.svg);
  }

  :checked + label {
    cursor: pointer;
    display: inline-block;
    padding: 0;
    width: 75px;
    height: 41px;
    background-image: url(/public/toggle_on.svg);
  }
`;
