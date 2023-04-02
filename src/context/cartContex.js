import { createContext, useState } from "react";

const cartContex = createContext({
    cart: [],
});

function CartContextProv(props) {
 const [cart,setCart]= useState([]);

 function agregarItem(bicicleta, count){
    setCart([...cart, bicicleta]);
 }

 function limpiarTodo(){
    const cart = [];
 }

 function cantidadCart(){
    
 }

    return (
        <cartContex.Provider value={{ cart, agregarItem }}>{props.children}</cartContex.Provider>
    );
}
export { CartContextProv };
export default cartContex;