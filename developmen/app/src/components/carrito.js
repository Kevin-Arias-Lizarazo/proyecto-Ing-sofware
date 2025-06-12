// cartManager.js

let cartItems = [{
  urlImage: "https://www.repuestosbong.com/img/item/1710172575.jpg",
  id: 1, nombre: "COLLARIN EMBRAGUE (PRB-09) ",
  year: 2025, precio: 250, cantidad: 1
}];

const addToCart = (product) => {
  const index = cartItems.findIndex((item) => item.id === product.id);
  if (index !== -1) {
    cartItems[index].cantidad += 1;
  } else {
    cartItems.push({ ...product, cantidad: 1 });
  }
};

const removeFromCart = (id) => {
  cartItems = cartItems.filter((item) => item.id !== id);
};

const changeQuantity = (id, cantidad) => {
  if (cantidad <= 0) return removeFromCart(id);
  const item = cartItems.find((item) => item.id === id);
  if (item) item.cantidad = cantidad;
};

const getCartItems = () => {
  return [...cartItems]; // devuelve una copia para evitar manipulación directa
};

const getTotal = () => {
  return cartItems.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  );
};

const clearCart = () => {
  cartItems = [];
};

export default {
  addToCart,
  removeFromCart,
  changeQuantity,
  getCartItems,
  getTotal,
  clearCart,
};
