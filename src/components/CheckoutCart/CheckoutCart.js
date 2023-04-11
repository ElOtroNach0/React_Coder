import { Timestamp } from 'firebase/firestore';
import React from 'react'
import { agregarOrdenDeCompra } from '../../dataBase/db';
import { useNavigate } from "react-router-dom";


export default function CheckoutCart({ cart, total }) {
    const navigate = useNavigate();

    async function handleCheckout() {
        const orderData = {
            user: { name: "Ignacio" },
            items: cart,
            total: total,
            Timestamp: new Date(),
        };

        const id = await agregarOrdenDeCompra(orderData);

        navigate(`/gracias/${id}`)

    }
    return( 
        <div>
            <button onClick={handleCheckout}>Finalizar compra</button> 
        </div>
    )
};
