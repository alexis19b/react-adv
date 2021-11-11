import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props{
  className?:string;
  img?:string;
  style?: CSSProperties
}

export const ProductImage = ({ img, className, style }:Props) => {

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
      className={`${styles.productImg} ${className}`}
      style={style}
      src={showImg}
      alt="coffee Mug"
    />
  )
}



