import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';
const product = {
  id: "1",
  title: "Coffe mug",
  img: "./coffee-mug.png",
};

const App = () => {

  return (
    <>
            <ProductCard 
                product={ product }
                initialValues={{
                    count: 6,
                    // maxCount: 10,
                }}
            >
              {
                () => (
                  <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />

                  </>
                )
              }
                {/* {
                    ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
                        <>
                            <ProductImage  />
                            <ProductTitle />
                            <ProductButtons  />
                            
                            <button onClick={ reset }>Reset</button>
                            <button onClick={ () => increaseBy(-2) }> -2 </button>
                            {
                                ( !isMaxCountReached && <button onClick={ ()=> increaseBy(+2) }> +2 </button> )
                            }
                            
                            <span>{ count } - { maxCount }</span>
                        </>
                    )
                } */}
            </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
