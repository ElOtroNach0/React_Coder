import './style.css';
import CartWidget from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <nav className="navbar">
            <div className='navbar__secciones'>
                <div className='logo'>
                    <a href='/'>
                        <img src='../img/Logo.jpg' alt='Logo tienda' />
                    </a>
                </div>
                <div className='secciones'>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/category/:idItem" >Bicicletas</Link></li>
                        <li><Link to="/accesorios">Accesorios</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>
            </div>
            <div className='navabar__carrito'>
                <CartWidget />
            </div>
        </nav>
    );

}

export default NavBar;