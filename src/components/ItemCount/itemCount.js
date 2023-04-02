import { useState } from "react";
import Button from "../Button/Button";

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

      return(
        <div className="main__count">
            <p>Unidades:</p>
        <div>
            <Button onClick={increase}>+</Button>
            <p>{count}</p>
            <Button onClick={decrease}>-</Button>
        </div>
        </div>
      );
}

export default ItemCount;