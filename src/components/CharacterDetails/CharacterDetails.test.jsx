import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CharacterDetails from './CharacterDetails';

describe('Character Details Page', () => {
  it('should find title of all history at bottom of the page', () => {
    render(<CharacterDetails />);
    const details = screen.getByText(/Todas as aparições:/i);
    expect(details);
  });
});
