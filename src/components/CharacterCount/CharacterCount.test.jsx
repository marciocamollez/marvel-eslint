import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CharacterCount from './CharacterCount';

describe('Count Component', () => {
  it('should find text in count div', () => {
    render(<CharacterCount />);
    const textCount = screen.getByTestId('countheros');
    expect(textCount);
  });
});
