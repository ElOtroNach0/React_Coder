import React, { useContext } from 'react'
import cartContex from '../../context/cartContext'
import CheckoutCart from '../CheckoutCart/CheckoutCart'

const CartContainer = () => {

    const { cart, getPriceInCart } = useContext(cartContex)

    return (
        <>
        <div>
            {cart.map((item) => {
                return (
                    <div className="producto" key={item.id}>
                        <p className="nombre">{item.name}</p>
                        <p className="cantidad">Cantidad: {item.count}</p>
                        <p className="precio">Precio total: {item.count * item.price}</p>
                    </div>
                )
            })
            };
        </div>

        <CheckoutCart cart={cart} total={getPriceInCart()}/>
        </>
    )
}

export default CartContainer
