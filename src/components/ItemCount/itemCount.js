import { useState } from "react";
import Button from "../Button/Button";
import './style.css'

const ItemCount = ({ ini, stock, agregarAlCarrito }) => {
  const [count, setCount] = useState(ini);

  const decrease = () => {
    if (count > ini) {
      setCount(count - 1);
    }
  };
  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="main__count">
      <p>Unidades:</p>
      <div className="botonesStyle">
        <Button onClick={increase}>+</Button>
        <p>{count}</p>
        <Button onClick={decrease}>-</Button>
        <Button onClick={() => agregarAlCarrito(count)}>Agregar al carrito</Button>
      </div>
    </div>
  );
}

export default ItemCount;