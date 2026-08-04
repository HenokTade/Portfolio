import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AnimatedNumber from '../components/AnimatedNumber';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

describe('AnimatedNumber', () => {
  it('renders initial value of 0', () => {
    render(<AnimatedNumber value={100} />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('renders suffix if provided', () => {
    render(<AnimatedNumber value={100} suffix="+" />);
    expect(screen.getByText(/0\+/)).toBeInTheDocument();
  });
});
