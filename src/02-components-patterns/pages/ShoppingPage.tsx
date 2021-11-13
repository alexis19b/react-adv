import { ProductButtons,ProductCard,ProductImage,ProductTitle,} from "../components";
import { products } from "../data/product";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
 
  return (
    <div>
      <h1>Shoping Store</h1>
      <hr />
      <div>
        
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-bold"
            initialValues={{
              count:4,
              maxCount:15,
            }}
          >
            {
              ( { reset, count, increaseBy, isMaxCountReached })=>(
                <>
                  <ProductImage className="custom-image" />
                  <ProductTitle className="text-white " />
                  <ProductButtons className="custom-buttons" />
                  <button onClick={reset}>Reset</button>
                  <button onClick={()=>increaseBy(-2)}> -2 </button>
                  {/* sino se llega al is ismaxcount mostrar, si se llega ocultar */}
                  {
                    !isMaxCountReached &&
                  <button onClick={()=>increaseBy(2)}> +2 </button>
                  }
                  <span>{count}</span>
                </>
              )
            }
          </ProductCard>
      
      </div>
      
    </div>
  );
};
