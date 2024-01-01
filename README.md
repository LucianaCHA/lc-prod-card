```ts
import {ProductCard
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'lc-product-card'

```

```js
<ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}

      >
        {
          ({ reset, increaseBy, counter, isMaxCountReached, maxCount }) => (

            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>

      ```
