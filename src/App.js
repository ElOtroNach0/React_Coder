import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProv } from './context/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import GraciasCompra from './components/GraciasCompra/GraciasCompra';


function App() {
  return (
    <div className='main__container'>
      <CartContextProv>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/producto/:idBici' element={<ItemDetailContainer />} />
            <Route path='/catalogo/:idCategoria' element={<ItemListContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/gracias/:id' element={<GraciasCompra />} />
          </Routes>
        </BrowserRouter>
      </CartContextProv>
    </div>
  );
}

export default App;