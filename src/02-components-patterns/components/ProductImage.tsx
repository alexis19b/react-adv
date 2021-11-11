import { useContext } from "react";
import { ProductContext } from './ProductCard';
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";


export const ProductImage = ({ img='' }) => {

  const {product} = useContext(ProductContext);
  let showImg:string;

  if(img) {
    showImg = img
  } else if(product.img){
    showImg = product.img
  }else{
    showImg= noImage
  }
  return (
    <img
      className={styles.productImg}
      src={showImg}
      alt="coffee Mug"
    />
  )
}



