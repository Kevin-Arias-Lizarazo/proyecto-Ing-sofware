import CartList from '../components/cartList';
import './carrito.css';
export default function CarritoPage ({ path }) {
  return (
    <div className="carrito-page-full">
      <CartList />
    </div>
  );
}