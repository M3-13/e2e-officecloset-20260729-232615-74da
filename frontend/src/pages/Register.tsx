export default function Register() {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Registrieren</h1>
      <p style={textStyle}>Coming soon</p>
    </div>
  )
}

const pageStyle: React.CSSProperties = {
  padding: 32,
  maxWidth: 440,
  margin: '0 auto',
  textAlign: 'center',
}

const headingStyle: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontSize: 32,
  color: 'var(--color-fg)',
  marginBottom: 16,
}

const textStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 14,
  color: 'var(--color-muted)',
}
