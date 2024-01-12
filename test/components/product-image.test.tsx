import React from "react";
import { ProductCard, ProductImage } from "../../src";

import renderer from "react-test-renderer";
import { mockProducts } from "../mocks/mock-products";


describe("ProductImage componnt test suite", () => {
  it("should render custom ttestle in the product title", () => {
    const wrapper = renderer.create(<ProductImage img={'xxx'}/>);

    expect(wrapper.toJSON()).toMatchSnapshot();
  })

  it("should render the title from the product", () => {
    const wrapper = renderer.create(
      <ProductCard product={mockProducts[1]} >
      {
        () => (<ProductImage />)
  }
      </ProductCard >,
  );

  expect(wrapper.toJSON()).toMatchSnapshot();
})
} );

// import * as ReactDOM from "react-dom";

// describe('it', ()=> {
//   it('renders no crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.unmountComponentAtNode(div);
//   })
// })