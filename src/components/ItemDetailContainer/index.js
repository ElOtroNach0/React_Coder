import { useState, useEffect } from "react";
import catalogo from "../../productos/catalogo";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/itemCount";
import cartContext from "../../context/cartContext";
import { useContext } from "react";
import Button from "../Button/Button";
import Loader from "../Loader/loader";

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
  const [cargadoEnCarrito, setCargadoEnCarrito] = useState(true);

  const params = useParams();
  const idBici = params.idBici;

  const { agregarItem } = useContext(cartContext);

  useEffect(() => {
    getDataOneItem(idBici).then((res) => {
      setUser(res);
    })
    .catch((error) => alert(error));
  }, []);

  function agregarAlCarrito(count) {
    alert(`Agregaste ${count} tu compra al carrito!`);
    agregarItem(bicicleta, count);
    setCargadoEnCarrito(false)
  }

  // Loader
  if (bicicleta.name === undefined) return <Loader />;

  return (
    <>
      <div className='main__container'>
        <ul>
          <li key={bicicleta.id}>
            <h4>{`${bicicleta.name} ${bicicleta.brand}`}</h4>
            <p>Precio: ${bicicleta.price}</p>
            {
              cargadoEnCarrito ?
                <ItemCount ini={1} stock={bicicleta.stock} agregarAlCarrito={agregarAlCarrito} />
                :
                <Link to="/carrito">
                  <Button>Ir al carrito</Button>
                </Link>
            }
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemDetailContainer; 