import React, { useState } from "react";
import Cart from './carrito.js';
import './cartList.css';

const CartList = () => {
  const [items, setItems] = useState(Cart.getCartItems);

  const refreshCart = () => {
    setItems(Cart.getCartItems());
  };

  const handleQuantityChange = (id, cantidad) => {
    Cart.changeQuantity(id, cantidad);
    refreshCart();
  };

  const handleRemove = (id) => {
    Cart.removeFromCart(id);
    refreshCart();
  };

  const handlePay = () => {
    alert("Gracias por su compra");
    Cart.clearCart();
    refreshCart();
  };

  const total = Cart.getTotal();

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Carrito de Compras</h1>

      {items.length === 0 ? (
        <p className="cart-empty">El carrito está vacío.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.urlImage}
                alt={item.nombre}
                className="cart-item-img"
              />
              <div className="cart-item-info">
                <div className="cart-item-name">{item.nombre}</div>
                <div className="cart-item-year">{item.year}</div>
                <div className="cart-item-price">{item.precio} SOL</div>
              </div>
              <div className="cart-item-actions">
                <input
                  type="number"
                  min="1"
                  value={item.cantidad}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  className="cart-item-qty"
                />
                <button
                  onClick={() => handleRemove(item.id)}
                  className="cart-item-remove"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            Total a pagar: {total.toFixed(2)} SOL
          </div>
          <button
            onClick={handlePay}
            className="cart-pay-btn"
          >
            Pagar
          </button>
        </div>
      )}
    </div>
  );
};

export default CartList;
