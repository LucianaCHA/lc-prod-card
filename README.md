# lc-prod-card

[![npm version](https://badge.fury.io/js/lc-prod-card.svg)](https://badge.fury.io/js/lc-prod-card)

# lc-prod-card

Este componente de tarjeta de producto (`ProductCard`) es una adaptación basada en el proyecto propuesto por Fernando Herrera en su curso de Udemy ReactPro. Se ha realizado una serie de actualizaciones utilizando React 18 y tests unitarios con testing-library, entre otras  .

## Características principales

- Componente de tarjeta de producto flexible y personalizable.
- Incluye subcomponentes como `ProductImage`, `ProductTitle`, y `ProductButtons`.
- ...

## Instalación

Para instalar este paquete en tu proyecto, puedes utilizar npm o yarn:

```bash
npm install lc-prod-card
# o
yarn add lc-prod-card
```

## Componentes Disponibles
**ProductCard**: El componente principal que encapsula la representación visual y lógica de la tarjeta del producto.

**ProductImage**: Muestra la imagen del producto. Puede manejar imágenes predeterminadas si no se proporciona una URL de imagen.

**ProductTitle**: Muestra el título del producto.

```bash
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'lc-prod-card';


<ProductCard
  key={product.id}
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {() => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>