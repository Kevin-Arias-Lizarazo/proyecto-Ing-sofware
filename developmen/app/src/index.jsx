import { render } from 'preact';
import { Router } from 'preact-router';
import { Header } from './components/header';
import Auth0ProviderWrapper from './components/loginwraper';
import ProductosPage from './pages/productos'
import CarritoPage from './pages/carrito';
import './style.css';

function App () {
  return (
    <Auth0ProviderWrapper>
      <Header />
      <div className="content-with-header">
        <Router>
          <ProductosPage path="/" />
          <CarritoPage path="/carrito" />
        </Router>
      </div>
    </Auth0ProviderWrapper>
  );
}

render(<App />, document.getElementById('app'));
