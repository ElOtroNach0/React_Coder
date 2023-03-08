import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return(
    <BrowserRouter>
      <div className='main__container'>
          <NavBar />

        <Routes>
          <Route path='/' element={ <ItemListContainer /> }/> 
          <Route path='/category/:idItem' element={ <ItemDetailContainer /> } />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;