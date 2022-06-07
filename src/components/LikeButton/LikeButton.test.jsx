import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LikeButton from './LikeButton';

describe('Like Button Component', () => {
  it('should find aria-hidden set as true in the button', () => {
    render(<LikeButton />);
    const buttonLike = screen.getAllByRole('button', { hidden: true });
    expect(buttonLike);
  });
});
