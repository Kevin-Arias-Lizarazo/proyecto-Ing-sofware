import { useEffect, useState } from 'preact/hooks';
import ProductosGalery from '../components/proctosGalery';
import './productos.css';

const URL_PRODUCTOS = 'https://api.ejemplo.com/productos'; // Cambia esta URL por la real

export default function ProductosPage ({ path }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(URL_PRODUCTOS)
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar productos');
        return res.json();
      })
      .then(data => setProductos(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="productos-page-full">Cargando productos...</div>;
  if (error) return <div className="productos-page-full">Error: {error}</div>;

  return (
    <div className="productos-page-full">
      <ProductosGalery productos={productos} />
    </div>
  );
}