import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Inicial from '../pages/Inicial/Inicial';
import Personagem from '../pages/Personagem/Personagem';

export const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<Inicial />} />
    <Route path="/personagem/:id" element={<Personagem />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
