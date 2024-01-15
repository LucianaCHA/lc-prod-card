import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductButtons } from '../../src/components/product-buttons';
import { ProductContext } from '../../src/components/product-card';
import '@testing-library/jest-dom';
import { mockProductContextValue } from '../mocks/mock-products';

describe('ProductButtons', () => {
  beforeEach(() => {
    render(
      <ProductContext.Provider value={mockProductContextValue}>
        <ProductButtons />
      </ProductContext.Provider>
    );
  });

  it('renders the buttons correctly', () => {
    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  it('renders the counter correctly', () => {
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('calls increaseBy with -1 when minus button is clicked', () => {
    fireEvent.click(screen.getByText('-'));
    expect(mockProductContextValue.increaseBy).toHaveBeenCalledWith(-1);
  });

  it('calls increaseBy with 1 when plus button is clicked', () => {
    fireEvent.click(screen.getByText('+'));
    expect(mockProductContextValue.increaseBy).toHaveBeenCalledWith(1);
  });
});

describe('it should render inside a ProductCard', () => {
  it('renders the buttons correctly', () => {
    render(
      <ProductContext.Provider value={mockProductContextValue}>
        <ProductButtons />
      </ProductContext.Provider>
    );
    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  it('renders the counter correctly', () => {
    render(
      <ProductContext.Provider value={mockProductContextValue}>
        <ProductButtons />
      </ProductContext.Provider>
    );
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('calls increaseBy with -1 when minus button is clicked', () => {
    render(
      <ProductContext.Provider value={mockProductContextValue}>
        <ProductButtons />
      </ProductContext.Provider>
    );
    fireEvent.click(screen.getByText('-'));
    expect(mockProductContextValue.increaseBy).toHaveBeenCalledWith(-1);
  });

  it('calls increaseBy with 1 when plus button is clicked', () => {
    render(
      <ProductContext.Provider value={mockProductContextValue}>
        <ProductButtons />
      </ProductContext.Provider>
    );
    fireEvent.click(screen.getByText('+'));
    expect(mockProductContextValue.increaseBy).toHaveBeenCalledWith(1);
  });
});
