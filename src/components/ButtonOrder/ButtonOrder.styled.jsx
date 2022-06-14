/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const BtnOrder = styled.button`
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
