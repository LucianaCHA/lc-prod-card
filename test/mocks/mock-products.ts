export const mockProductNoImage = {
  id: '1',
  title: 'Product 1',
};

export const mockProductImage = {
  id: '2',
  title: 'Product 2',
  img: 'https://via.placeholder.com/150',
};

export const mockProducts = {
  [mockProductNoImage.id]: mockProductNoImage,
  [mockProductImage.id]: mockProductImage,
};

export const productMock = {
  id: '1',
  title: 'Product Title',
  img: './coffee-mug.png',
};
export const mockProductContextValue = {
  increaseBy: jest.fn(),
  counter: 5,
  maxCount: 10,
  product: productMock,
};
