import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductCard } from "../../src/components/product-card";
import '@testing-library/jest-dom'
import { mockProductNoImage } from "../mocks/mock-products";

describe("ProductCard", () => {
  const product = mockProductNoImage;
  const initialValues = {
    count: 6,
  };

  const mockChildren = jest.fn();

  beforeEach(() => {
    mockChildren.mockClear();
  });



  it("renders the product card correctly", () => {
    render(
      <ProductCard product={product} initialValues={initialValues}>
        {mockChildren}
      </ProductCard>
    );

    expect(mockChildren).toHaveBeenCalledTimes(1);
  });

  it("passes the correct props to the children function", () => {
    render(
      <ProductCard product={product} initialValues={initialValues}>
        {mockChildren}
      </ProductCard>
    );
        const mockProps = mockChildren.mock.calls[0][0];

        expect(mockProps).toEqual({
          counter: 6,
          maxCount: undefined,
          product: product,
          isMaxCountReached: false,
          increaseBy: expect.any(Function), 
          reset: expect.any(Function),
        });
        const mockIncreaseBy = jest.fn();
        const mockReset = jest.fn();

        mockProps.increaseBy = mockIncreaseBy;
        mockProps.reset = mockReset;
      

        expect(mockProps.counter).toBe(6);
        expect(mockProps.maxCount).toBe(undefined);
        expect(mockProps.product).toBe(product);
        expect(mockProps.isMaxCountReached).toBe(false);
        expect(mockProps.increaseBy).toBe(mockIncreaseBy);
        expect(mockProps.reset).toBe(mockReset);
  });

  it("applies the provided className and style", () => {
    const className = "test-class";
    const style = { color: "red" };

    render(
      <ProductCard
        product={product}
        initialValues={initialValues}
        className={className}
        style={style}
      >
        {mockChildren}
      </ProductCard>
    );

    expect(screen.getByTestId("product-card")).toHaveClass(className);
    expect(screen.getByTestId("product-card")).toHaveStyle(style);

  });

  it("should render children ", () => {
 
    render(
      <ProductCard product={product} initialValues={initialValues}>
        {
          () => <div>test</div>
        }
      </ProductCard>
    );

    expect(screen.getByText("test")).toBeInTheDocument();

  })
});