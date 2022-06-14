import React, { useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import { BtnOrder } from './ButtonOrder.styled';

function ButtonOrder() {
  const { handleOrder, disabled } = useContext(Context);

  return <BtnOrder type="button" onClick={handleOrder} disabled={disabled} />;
}

export default ButtonOrder;
