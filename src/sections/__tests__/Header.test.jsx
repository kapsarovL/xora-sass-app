import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Header from '../Header';

describe('Header Component', () => {
  beforeEach(() => {
    window.scrollY = 0;
  });

  it('renders header with logo and navigation links', () => {
    render(<Header />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByText('features')).toBeInTheDocument();
    expect(screen.getByText('pricing')).toBeInTheDocument();
    expect(screen.getByText('faq')).toBeInTheDocument();
    expect(screen.getByText('download')).toBeInTheDocument();
  });

  it('changes header style on scroll', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    
    act(() => {
      window.scrollY = 33;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(header).toHaveClass('bg-black-100');
    expect(header).toHaveClass('backdrop-blur-[8px]');
  });

  it('toggles mobile menu when button is clicked', () => {
    render(<Header />);
    const menuButton = screen.getByRole('button');
    
    fireEvent.click(menuButton);
    expect(screen.getByAltText('close')).toBeInTheDocument();
    
    fireEvent.click(menuButton);
    expect(screen.getByAltText('magic')).toBeInTheDocument();
  });

  it('closes mobile menu when nav link is clicked', () => {
    render(<Header />);
    const menuButton = screen.getByRole('button');
    
    fireEvent.click(menuButton);
    fireEvent.click(screen.getByText('features'));
    
    expect(screen.getByAltText('magic')).toBeInTheDocument();
  });

  it('removes scroll event listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    const { unmount } = render(<Header />);
    
    unmount();
    
    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    removeEventListenerSpy.mockRestore();
  });
});
