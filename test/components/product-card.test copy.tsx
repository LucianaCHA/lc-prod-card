import React from "react";
import { ProductCard, ProductImage } from "../../src";

import renderer from "react-test-renderer";
import { mockProducts } from "../mocks/mock-products";

describe("product card debe renderizar", () => {
  it("debe renderizar el titulo del producto", () => {
    const wrapper = renderer.create(<ProductTitle title="Custom title" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("debe renderizar el titulo del producto", () => {
    const wrapper = renderer.create(
      <ProductCard product={mockProducts[0]}>
        {() => <h1>hola</h1>}
      </ProductCard>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

