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

/* Need to type default value for styled component because testing library exam styled files too */
OrdernationBox.defaultProps = {
  theme: {
    colors: {
      red: '#d70000',
    },
  },
};

export const OrdenationCheck = styled.span`
  display: flex;
  align-items: center;

  p {
    margin-right: 15px;
  }
`;

export const OrdenationInput = styled.input`
  display: none;

  & + label {
    cursor: pointer;
    display: inline-block;
    padding: 0;
    width: 75px;
    height: 41px;
    background-image: url(/toggle_off.svg);
  }

  &:checked + label {
    cursor: pointer;
    display: inline-block;
    padding: 0;
    width: 75px;
    height: 41px;
    background-image: url(/toggle_on.svg);
  }
`;
