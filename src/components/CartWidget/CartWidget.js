import './style.css';
import { BsFillCartFill } from 'react-icons/bs';

function CartWidget() {
  return (
    <a href="#" className="cartWidget">
      <BsFillCartFill className="icono__carrito" />
      <div className="icono__carrito__cantidad">3</div>
    </a>
  );
}

export default CartWidget;