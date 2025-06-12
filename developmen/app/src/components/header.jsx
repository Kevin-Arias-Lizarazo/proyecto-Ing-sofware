import './header.css'
import buscar from '../assets/buscar.svg'
import logo from '../assets/CERJC.svg'
import carritoIcon from '../assets/carrito.svg'
import PerfilButton from './perfilButton';

export function Header ({ carrito = [], quitarDelCarrito = () => { } }) {
  return (
    <div className="sticky-header">
      <header className="ml-header">
        <div className="ml-header__logo">
          <img src={logo} alt="Logo CERJC" />
        </div>

        <div className="ml-header__search">
          <input type="text" placeholder="Buscar auto partes" aria-label="Buscar auto partes" />
          <button type="submit" aria-label="Buscar">
            <img className="invert-to-white" src={buscar} width={20} height={20} />
          </button>
        </div>

        <nav className="ml-header__nav" aria-label="Navegación principal">
          <ul className="ml-header__nav-list">
            <li className="ml-header__nav-item">
              <a href="#">Categorías</a>
            </li>
            <li className="ml-header__nav-item">
              <a href="#">Ofertas</a>
            </li>
            <li className="ml-header__nav-item">
              <a href="#historial">Historial</a>
            </li>
            <li className="ml-header__nav-item ml-header__nav-item--user">
              <a href="#Miacount">Mi Cuenta</a>
              <div className="ml-header__user-menu">
                <ul>
                  <li><a href="#">Resumen</a></li>
                  <li><a href="#">Compras</a></li>
                  <li><a href="#">Ventas</a></li>
                  <li><a href="#">Favoritos</a></li>
                  <li><a href="#">Salir</a></li>
                </ul>
              </div>
            </li>
            <li className="ml-header__nav-item ml-header__nav-item--cart">
              <a href="./carrito" aria-label="Carrito de compras">
                <img src={carritoIcon} />
                <span>{carrito.length}</span>
              </a>
            </li>
            <li>
              <PerfilButton />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
