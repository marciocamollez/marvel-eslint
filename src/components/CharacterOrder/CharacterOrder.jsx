import React from 'react';
import { OrdernationBox, OrdenationCheck } from './CharacterOrder.styled';

function CharacterOrder() {
  return (
    <OrdernationBox>
      <span>
        <img src="/ic_heroi.svg" alt="Ordenar" />
      </span>
      <OrdenationCheck>
        <p>Ordenar por nome A-Z:</p>
      </OrdenationCheck>
    </OrdernationBox>
  );
}

export default CharacterOrder;
