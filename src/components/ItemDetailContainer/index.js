import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/itemCount";
import cartContext from "../../context/cartContext";
import { useContext } from "react";
import Button from "../Button/Button";
import Loader from "../Loader/loader";

// Config DB FireBase

import { doc, getDoc, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWigZ55ZYoBEFQyPdnMHAiZ3li5EiGIag",
  authDomain: "react-proyectocoder.firebaseapp.com",
  projectId: "react-proyectocoder",
  storageBucket: "react-proyectocoder.appspot.com",
  messagingSenderId: "418155216930",
  appId: "1:418155216930:web:ff9709981d006e78024a7b",
  measurementId: "G-5Y0W29HMDM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDataOneItem(idIProducto){
  const coleccionDeProductos = collection(db, "productos");
  const docRef = doc(coleccionDeProductos, idIProducto);

  const docSnap = await getDoc(docRef);
  return {...docSnap.data(), id: docSnap.id };
}

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