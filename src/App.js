import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProv } from './context/cartContex';

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
          </Routes>
        </BrowserRouter>
      </CartContextProv>
    </div>
  );
}

export default App;