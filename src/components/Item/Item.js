import React from 'react'
import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function Item({ bicicletas }) {
    return (
        <>
            <div>
                <ul>
                    {bicicletas.map((datos) => (
                        <li style={{color: datos.stock ===0? "Red": "black"}} key={datos.id}>
                            <h4>{`${datos.name} ${datos.brand}`}</h4>
                            {datos.stock ===0? <small>Sin Stock</small> : <p>$ {datos.price}</p>}
                            {datos.offer &&
                                <strong style={{ color: "red" }}>
                                    {datos.offer}%
                                </strong>
                            }
                            <Link to={`/producto/${datos.id}`}>
                                <Button>Ver Detalles</Button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
