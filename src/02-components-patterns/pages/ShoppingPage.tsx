import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/product";
import { useShoppingCart } from "../hooks/useShopingCart";
import "../styles/custom-styles.css";


export const ShoppingPage = () => {
 
  const { onProductCountChange, shoppingCart} = useShoppingCart();

  return (
    <div>
      <h1>Shoping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-bold"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
            
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white " />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-bold"
            style={{ width: "100px" }}
            value={product.count}
            onChange={onProductCountChange}           
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              
            />
          
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
