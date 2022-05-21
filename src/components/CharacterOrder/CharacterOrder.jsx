import React from 'react';
import PropTypes from 'prop-types';
import {
  OrdernationBox,
  OrdenationCheck,
  OrdenationInput,
} from './CharacterOrder.styled';

function CharacterOrder({ order }) {
  return (
    <OrdernationBox>
      <span>
        <img src="/ic_heroi.svg" alt="Ordenar" />
      </span>
      <OrdenationCheck>
        <p>Ordenar por nome A-Z:</p>

        <OrdenationInput
          id="checkbutton"
          type="checkbox"
          defaultChecked={order}
          onChange={order}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="checkbutton" />
      </OrdenationCheck>
    </OrdernationBox>
  );
}

CharacterOrder.propTypes = {
  order: PropTypes.func.isRequired,
};

export default CharacterOrder;
