export default function Footer() {
  return (
    <footer
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid #1a1a1a',
        padding: '1.2rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          color: '#555555',
          textTransform: 'uppercase',
        }}
      >
        Demon Powder Coating — Castle Rock, CO
      </span>
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.65rem',
          color: '#555555',
        }}
      >
        © 2026
      </span>
    </footer>
  );
}
