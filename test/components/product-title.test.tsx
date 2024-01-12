import React from "react";
import { ProductCard, ProductTitle } from "../../src";

import renderer from "react-test-renderer";
import { mockProducts } from "../mocks/mock-products";


describe("ProductTitle componnt test suite", () => {
  it("should render custom ttestle in the product title", () => {
    const wrapper = renderer.create(<ProductTitle title="Custom title" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  })

  it("should render the title from the product", () => {
    const wrapper = renderer.create(
      <ProductCard product={mockProducts[0]} >
      {
        () => (<ProductTitle />)
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