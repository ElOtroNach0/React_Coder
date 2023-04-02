import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

// Funcion que retorna cada item del array de Productos que se llama desde ItemListContainer.

function ItemList({ bicicletas }){
    return (
        <>
          <div>
            <ul>
              {bicicletas.map((datos) => (
                <li key={datos.id}>
                  <h4>{`${datos.name} ${datos.brand}`}</h4>
                  <p>{datos.price}</p>
                  <Link to={`/producto/${datos.id}`}>
                    <Button>Ver Detalles</Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      );
}

export default ItemList