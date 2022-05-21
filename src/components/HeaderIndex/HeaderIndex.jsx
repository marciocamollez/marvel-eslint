import React from 'react';
import { HeaderMarvel } from './HeaderIndex.styled';

function HeaderIndex() {
  return (
    <HeaderMarvel>
      <div>
        <img src="/logo.svg" alt="Marvel" title="Marvel" />
      </div>
      <h1>Explore o Universo</h1>
      <p>
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </p>
    </HeaderMarvel>
  );
}

export default HeaderIndex;
