import { useContext, CSSProperties, useCallback } from 'react';
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props{
  className?:string;
  style?:CSSProperties;
}

export const ProductButtons = ({className,style}:Props) => {

  const {counter, increaseBy, maxCount} = useContext(ProductContext);

  const isMaxRached = useCallback(
    //doble negacion !! para q si es undefined se convierta en booleano y retorne false
    // y si maxCount tiene un valor sera true y evalura a la condicion y si se cumple retorna true
    () => !!maxCount && counter === maxCount,
    
    [counter, maxCount],
  )

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
    <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}> { counter }</div>
        <button className={`${styles.buttonAdd} ${ isMaxRached() && styles.disabled}`} onClick={() => increaseBy(1)}>
          +
        </button>
    </div>
  );
}