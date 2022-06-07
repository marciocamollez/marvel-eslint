import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeaderIndex from './HeaderIndex';

describe('Header Component', () => {
  it('should find alt title in image logo', () => {
    render(<HeaderIndex />);
    const image = screen.getByAltText(/Marvel/i);
    expect(image);
  });
});
