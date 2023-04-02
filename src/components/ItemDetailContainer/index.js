import { useState, useEffect } from "react";
import catalogo from "../../productos/catalogo";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/itemCount";
import cartContex from "../../context/cartContex";
import { useContext } from "react";

// funcion que crea una promesa para luego enviarla al .then dentro del useeffect
function getDataOneItem(idIProducto) {
  return new Promise((res, rej) => {
      let encontrado = catalogo.find((item) => item.id === Number(idIProducto));
      res(encontrado)
  });
};

// *****************************************************************************************
function ItemDetailContainer() {
  const [bicicleta, setUser] = useState({});
  
  const params = useParams();
  const idBici = params.idBici;
  
  const { agregarItem } = useContext(cartContex);

  useEffect(() => {
    getDataOneItem(idBici).then((res) => {
      setUser(res);
    });
  }, []);

  function agregarAlCarrito(count) {
    alert(`Agregaste ${count} tu compra al carrito!`);
      agregarItem(bicicleta, count);
  }

  return (
    <>
      <div className='main__container'>
        <ul>
          <li key={bicicleta.id}>
            <h4>{`${bicicleta.name} ${bicicleta.brand}`}</h4>
            <p>Precio: ${bicicleta.price}</p>
              <ItemCount ini={1} stock={bicicleta.stock} agregarAlCarrito={agregarAlCarrito} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemDetailContainer; 