import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import catalogo from '../../productos/catalogo';
import ItemList from '../ItemList/ItemList';

// funcion que crea una promesa para luego enviarla al .then dentro del useeffect
function getDataItem(){
  return new Promise( (res, rej)=>{ 
    setTimeout(()=>{
      res(catalogo);
    }, 2000);
  });
}

// Funcion para filtrar mediante la url

function getDataItemCategory(urlCategoria){
  return new Promise( (res, rej)=>{ 
    setTimeout(()=>{
      let filtro = catalogo.filter(
        (item) => item.category === urlCategoria
        );
      res(filtro)
    }, 2000);
  });
}


// Funcion que retorna la promesa, si es que se cumple.
function ItemListContainer() {
  const [bicicletas, setUser] = useState([]);
  
  const params = useParams();
  const idCategoria = params.idCategoria;
  
  // Funcion async-await
  async function mostrarDatos(){
    if(idCategoria === undefined){
        let respuestaAwait = await getDataItem();
        setUser(respuestaAwait);
    }else{
      let respuestaAwait = await getDataItemCategory(idCategoria);
      setUser(respuestaAwait);
    }
  }

  useEffect(() => {
    mostrarDatos();
  }, [idCategoria]);


  return (
    <>
      <ItemList bicicletas={bicicletas} />
    </>
  );
}


export default ItemListContainer;