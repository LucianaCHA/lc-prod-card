import React from "react";
import { render, screen } from "@testing-library/react";
import {  ProductCard, ProductTitle } from "../../src";
import { ProductContext } from "../../src/components/product-card";
import '@testing-library/jest-dom'
import { mockProductContextValue, mockProductImage } from "../mocks/mock-products";


describe("ProductTitle", () => {
  it("renders the title correctly", () => {
    render(
      <ProductContext.Provider value={mockProductContextValue}>
        <ProductTitle />
      </ProductContext.Provider>
    );
    expect(screen.getByText("Product Title")).toBeInTheDocument();
  });

  it("applies the provided className", () => {
    render(
      <ProductContext.Provider value={mockProductContextValue}>
        <ProductTitle className="test-class" />
      </ProductContext.Provider>
    );
    expect(screen.getByText("Product Title")).toHaveClass("test-class");
  });

  it("applies the provided style", () => {
    render(
      <ProductContext.Provider value={mockProductContextValue}>
        <ProductTitle style={{ color: "red" }} />
              </ProductContext.Provider>
    );
    expect(screen.getByText("Product Title")).toHaveStyle("color: red");
  });
})

describe("it should render inside a ProductCard", () => {
  it("renders the title correctly", () => {
    render(
        <ProductCard 
        initialValues={{count: 6}}
        product={mockProductImage}>
          {
            () => (
              
                <ProductTitle />
              
            )
          }
        </ProductCard>
    );
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

})




