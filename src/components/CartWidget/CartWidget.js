import './style.css';
import { BsFillCartFill } from 'react-icons/bs';
import { useContext } from 'react';
import cartContex from '../../context/cartContex';

function CartWidget() {

  const { cart } = useContext(cartContex);
  const cantidadProductos = cart.length;
  
  return (
    <span className="cartWidget">
      <BsFillCartFill className="icono__carrito" />
      <div className="icono__carrito__cantidad">
        {cantidadProductos}
      </div>
    </span>
  );
}

export default CartWidget;