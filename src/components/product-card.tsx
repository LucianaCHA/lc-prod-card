import React from "react";
import { useProduct } from "../hooks/use-product";
import { createContext } from "react";
import {
  IInitialValues,
  IProduct,
  IProductCardHandlers,
  IProductContextProps,
  onChangeArgs,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext; // esta es ,mi fuente de datos


export interface Props {
  product: IProduct;
  children: (args : IProductCardHandlers) => JSX.Element,
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues: IInitialValues
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{ product, counter, increaseBy,maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style} data-testid='product-card'>
        {children({
          counter,
          maxCount,
          product,
          isMaxCountReached,
          increaseBy,
          reset
        })}

      </div>
    </Provider>
  );
};
export default ProductCard;