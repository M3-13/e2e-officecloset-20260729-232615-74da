import { Link } from 'react-router-dom'
import { useAuth } from '../AuthContext'

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
        padding: '0 24px',
        borderBottom: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 20,
          color: 'var(--color-accent)',
          letterSpacing: 1,
          textDecoration: 'none',
        }}
      >
        Glamouröser Kleiderschrank
      </Link>

      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        {isAuthenticated ? (
          <>
            <Link to="/gallery" style={linkStyle}>
              Galerie
            </Link>
            <Link to="/categories" style={linkStyle}>
              Kategorien
            </Link>
            <button
              onClick={logout}
              style={{
                ...linkStyle,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 14,
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
            <Link to="/register" style={linkStyle}>
              Registrieren
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

const linkStyle: React.CSSProperties = {
  color: 'var(--color-muted)',
  textDecoration: 'none',
  fontSize: 14,
  fontFamily: "'Inter', sans-serif",
}
