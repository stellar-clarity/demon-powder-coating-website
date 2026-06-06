'use client';

const SERVICES = [
  {
    title: 'Custom Wheels',
    desc: 'From gloss black to candy finishes, every wheel gets stripped, prepped, and coated for a finish that lasts. We handle any size, any spoke pattern, any spec.',
    img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=85',
  },
  {
    title: 'Auto & Moto Parts',
    desc: 'Engine brackets, control arms, frames, fenders — if it\'s metal, we coat it. Built for heat resistance and durability, not just looks.',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=85',
  },
  {
    title: 'Industrial Coating',
    desc: 'OEM and production runs for fabricators, manufacturers, and shops. Consistent color match, fast turnaround, military-grade adhesion.',
    img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80',
  },
  {
    title: 'Restoration',
    desc: 'Vintage motorcycle frames. Classic car parts. Old iron that deserves a second life. We take the rust and give you a relic.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
  },
  {
    title: 'Outdoor Furniture',
    desc: 'Powder coating outlasts paint by years outdoors. Patio frames, gates, railings — UV stable, chip resistant, weather proof.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85',
  },
  {
    title: 'Color Matching',
    desc: 'Got a swatch, a code, or a vision? We match RAL, Pantone, OEM codes, or custom mixes. Bring us the color, we deliver the finish.',
    img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
  },
];

export default function Services() {
  return (
    <main style={{ background: '#0A0A0A', paddingTop: '5rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', padding: '4rem 2rem 2rem' }}>
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            color: '#F8F8F8',
            letterSpacing: '0.03em',
            margin: 0,
          }}
        >
          Services
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            color: '#555555',
            textTransform: 'uppercase',
            marginTop: '1rem',
          }}
        >
          What we do. Done right.
        </p>
      </div>

      {/* Service sections */}
      {SERVICES.map((s, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={s.title}
            style={{
              background: isEven ? '#0A0A0A' : '#111111',
              display: 'flex',
              flexDirection: isEven ? 'row' : 'row-reverse',
              minHeight: '420px',
            }}
            className="service-section"
          >
            {/* Image */}
            <div style={{ flex: 1, overflow: 'hidden', minHeight: '420px' }}>
              <img
                src={s.img}
                alt={s.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  minHeight: '420px',
                }}
              />
            </div>

            {/* Text */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '4rem 4rem',
              }}
            >
              <div
                style={{
                  width: '3rem',
                  height: '3px',
                  background: '#7C3AED',
                  marginBottom: '1.5rem',
                }}
              />
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  color: '#F8F8F8',
                  letterSpacing: '0.03em',
                  marginBottom: '1.25rem',
                  lineHeight: 1,
                }}
              >
                {s.title}
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.85rem',
                  color: '#aaaaaa',
                  lineHeight: 1.8,
                  maxWidth: '420px',
                }}
              >
                {s.desc}
              </p>
            </div>
          </section>
        );
      })}

      <style>{`
        @media (max-width: 768px) {
          .service-section {
            flex-direction: column !important;
          }
        }
      `}</style>
    </main>
  );
}
