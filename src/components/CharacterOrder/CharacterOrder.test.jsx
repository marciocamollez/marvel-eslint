import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CharacterOrder from './CharacterOrder';

describe('Character Order Component', () => {
  it('should find text that order by name A-Z', () => {
    render(<CharacterOrder />);
    const order = screen.getByText(/Ordenar por nome A-Z:/i);
    expect(order);
  });
});
