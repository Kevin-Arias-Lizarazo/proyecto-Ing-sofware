import './productosGalery.css';
import cartManager from './carrito.js';

export default function ProductosGalery ({ productos = [] }) {
  if (!productos.length) {
    return <div className="productos-galery__empty">No hay productos para mostrar.</div>;
  }

  const handleAddToCart = (producto) => {
    cartManager.addToCart(producto);
  };

  return (
    <div className="productos-galery">
      {productos.map(producto => (
        <div className="producto-card" key={producto.id}>
          <img
            className="producto-card__img"
            src={producto.urlImage}
            alt={producto.nombre}
          />
          <div className="producto-card__info">
            <h3 className="producto-card__nombre">{producto.nombre}</h3>
            <div className="producto-card__meta">
              <span className="producto-card__year">{producto.year}</span>
              <span className="producto-card__precio">${producto.precio}</span>
            </div>
            <button
              className="producto-card__add-btn"
              onClick={() => handleAddToCart(producto)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}