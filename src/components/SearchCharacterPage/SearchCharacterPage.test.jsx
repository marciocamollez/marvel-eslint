import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchIndex from './SearchIndex';

describe('Search Component', () => {
  it('should find placeholder of input search', () => {
    render(<SearchIndex />);
    const inputSearch = screen.getByPlaceholderText(/Procure por heróis/i);
    expect(inputSearch).toBeInTheDocument();
  });
});
