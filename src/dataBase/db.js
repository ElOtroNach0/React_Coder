// Config DB FireBase

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import catalogo from "../productos/catalogo";

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

export async function agregarOrdenDeCompra(orderData){
    const coleccionProductos = collection(db, "compras");
    const response = await addDoc(coleccionProductos, orderData);
    return response.id
}

export async function exportardb() {
  for (let item of catalogo){
    const coleccionProductos = collection(db, "productos");
    const { id } = await addDoc(coleccionProductos, item);
    console.log("Nuevo producto ingresado", id)
  }
};
