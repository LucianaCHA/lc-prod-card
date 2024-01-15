import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductImage } from "../../src/components/product-image";
import { ProductContext } from "../../src/components/product-card";
import { mockProductContextValue, mockProductImage } from "../mocks/mock-products";
import '@testing-library/jest-dom'

const mockProductContextValueWithImage={
  ...mockProductContextValue,
  product: mockProductImage
}
describe("ProductImage", () => {
  it("renders the image correctly", () => {
    render(
      <ProductContext.Provider value={mockProductContextValueWithImage}>
        <ProductImage />
      </ProductContext.Provider>
    );

    expect(screen.getByAltText("Product 2")).toBeInTheDocument();
    expect(screen.getByAltText("Product 2")).toHaveAttribute("src", "https://via.placeholder.com/150");

  });
  it("applies the provided className", () => {
    render(
      <ProductContext.Provider value={mockProductContextValueWithImage}>
        <ProductImage className="test-class" />
      </ProductContext.Provider>
    );

    expect(screen.getByAltText("Product 2")).toHaveClass("test-class");
    expect(screen.getByAltText("Product 2")).toHaveAttribute("src", "https://via.placeholder.com/150");

  });

  it("applies the provided style", () => {
   const style = { width: "100px", height: "100px" };

    render(
      <ProductContext.Provider value={mockProductContextValueWithImage}>
        <ProductImage style={style} />
      </ProductContext.Provider>
    );

    expect(screen.getByAltText("Product 2")).toHaveStyle("width: 100px; height: 100px");
    expect(screen.getByAltText("Product 2")).toHaveAttribute("src", "https://via.placeholder.com/150");
  });
});