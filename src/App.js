import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <div className='main__container'>
          <NavBar />

        <Routes>
          <Route path='/' element={ <ItemListContainer /> }/> 
          <Route path='/producto/:idBici' element={ <ItemDetailContainer /> } />
          <Route path='/catalogo/:idCategoria' element={ <ItemListContainer /> }/> 
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App ;