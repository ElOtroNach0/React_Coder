import { createContext, useState } from "react";

const cartContext = createContext({
    cart: [],
});
const Provider = cartContext.Provider;

function CartContextProv(props) {
 const [cart,setCart]= useState([]);

 function agregarItem(bicicleta, count){
    setCart([...cart, bicicleta]);
 }

 function limpiarTodo(){
    setCart([]);
 }

 function cantidadCart(){
    
 }

    return (
        <Provider value={{ cart, agregarItem }}>{props.children}</Provider>
    );
}
export { CartContextProv };
export default cartContext;