import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Index from '../pages/Index/Index';
import Character from '../pages/Character/Character';
import Likes from '../pages/Likes/Likes';

export const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<Index />} />
    <Route path="/personagem/:id" element={<Character />} />
    <Route path="/curtidos" element={<Likes />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
