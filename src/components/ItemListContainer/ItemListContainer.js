import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import Loader from "../Loader/loader";

// Config DB FireBase

import { collection, getDocs, query, where } from "firebase/firestore";
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

async function getDataItem() {
  // 1. Obtener referencia a mi coleccion de datos
  // 2 Llamamos a la coleccion con getDocs
  // 3. Promesa con array de datos
  // 4. obtenemos los datos de ese array con doc.data()
  const coleccionDeProductos = collection(db, "productos");
  let snapshot = await getDocs(coleccionDeProductos)
  const datosDb = snapshot.docs;
  const datosdbMap = datosDb.map((doc) => ({ ...doc.data(), id: doc.id }));
  return datosdbMap;
};

// Funcion para filtrar mediante la url

async function getDataItemCategory(urlCategoria){
  const coleccionDeProductos = collection(db, "productos");
  const q = query(coleccionDeProductos, where("category", "==",urlCategoria ));

  let snapshot = await getDocs(q);
  const datosDb = snapshot.docs;
  const datosdbMap = datosDb.map((doc) => ({ ...doc.data(), id: doc.id }));
  return datosdbMap
}

// Funcion que retorna la promesa, si es que se cumple.
function ItemListContainer() {
  const [bicicletas, setUser] = useState([]);
  const [cargando, setCargando] = useState(true);

  const params = useParams();
  const idCategoria = params.idCategoria;

  // Funcion async-await
  async function mostrarDatos() {
    if (idCategoria === undefined) {
      let respuestaAwait = await getDataItem();
      setUser(respuestaAwait);
      setCargando(false);
    } else {
      let respuestaAwait = await getDataItemCategory(idCategoria);
      setUser(respuestaAwait);
      setCargando(false);
    }
  }

  useEffect(() => {
    mostrarDatos();
  }, [idCategoria]);

  return (
    <>
      {cargando ? <Loader /> : <Item bicicletas={bicicletas} />}
    </>
  );
}


export default ItemListContainer;