import { Props as ProductButtonsProps } from '../components/product-buttons';
import { Props as ProductImageProps } from '../components/product-image';
import { Props as ProductTitleProps } from '../components/product-title';

export interface ProductCardProps {
  children: () => JSX.Element;
  product: IProduct;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues: IInitialValues;
}

export interface IProduct {
  id: string;
  title: string;
  img?: string;
}

export interface IProductContextProps {
  product: IProduct;
  counter: number;
  increaseBy: (value: number) => void;
  maxCount?: number;
}

export interface ProductCardHOCProps {
  ({ product }: ProductCardProps): JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
}

export interface onChangeArgs {
  product: IProduct;
  count: number;
}

export interface IProductInCart extends IProduct {
  count: number;
}

export interface IInitialValues {
  count: number;
  maxCount?: number;
}

export interface IProductCardHandlers {
  counter: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: IProduct;
  increaseBy: (value: number) => void;
  reset: () => void;
}
