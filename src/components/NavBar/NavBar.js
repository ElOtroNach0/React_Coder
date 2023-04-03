import './style.css';
import CartWidget from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
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
                        <li><Link to="/catalogo/MTB">Bicicletas MTB</Link></li>
                        <li><Link to="/catalogo/Pista">Bicicletas Pista</Link></li>
                    </ul>
                </div>
            </div>
            <div className='navabar__carrito'>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </div>
        </nav>
    );

}

export default NavBar;