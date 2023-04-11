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

 function cantidadCart() {
   let total = 0;
   cart.forEach((item) => total + item.count);
   return total;
 }

 function getPriceInCart() {
    return 5600;
  }

    return (
        <Provider value={{ cart, agregarItem, getPriceInCart }}>{props.children}</Provider>
    );
}
export { CartContextProv };
export default cartContext;