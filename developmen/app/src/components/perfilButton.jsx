import { useAuth0 } from '@auth0/auth0-react';
import "./perfilButton.css"
import { useState } from 'preact/hooks';

const PerfilButton = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="login-container">
      {isAuthenticated ? (
        <div className="profile-section">
          <button
            className="profile-btn"
            onClick={() => setShowProfile(!showProfile)}
          >
            <img src={user.picture} alt={user.name} className="profile-avatar" />
            <span>{user.name}</span>
          </button>
          {showProfile && (
            <div className="profile-dropdown">
              <p><strong>Nombre:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <button onClick={() => logout()}>Cerrar sesión</button>
            </div>
          )}
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()}>
          Iniciar sesión
        </button>
      )
      }
    </div >
  );
};

export default PerfilButton;
