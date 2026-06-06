'use client';

const STEPS = [
  { num: '01', label: 'Sand Blast' },
  { num: '02', label: 'Prep' },
  { num: '03', label: 'Coat' },
  { num: '04', label: 'Cure' },
];

export default function About() {
  return (
    <main style={{ background: '#0A0A0A', paddingTop: '5rem' }}>

      {/* Full-width top image */}
      <div style={{ width: '100%', height: '60vh', overflow: 'hidden', position: 'relative' }}>
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85"
          alt="Workshop"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 40%, #0A0A0A)',
          }}
        />
      </div>

      {/* Two-column bio */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '5rem 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}
        className="about-grid"
      >
        {/* Left */}
        <div>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#F8F8F8',
              lineHeight: 1,
              letterSpacing: '0.02em',
            }}
          >
            Kevin Eitniear<br />
            <span style={{ color: '#7C3AED' }}>Demon Powder Coating</span>
          </h1>
        </div>

        {/* Right */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {[
            "Started in a garage in Castle Rock with a used gun and a borrowed oven. No marketing budget, no fancy signage — just a knack for doing things right the first time.",
            "Fifteen years in, nothing's changed except the booth. Still personally touching every job. Still chasing a finish that looks better than the factory.",
            "Demon isn't a shop with a logo. It's a standard. If it leaves here, it leaves right.",
            "Castle Rock. Colorado. The work speaks.",
          ].map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.88rem',
                color: '#aaaaaa',
                lineHeight: 1.9,
                margin: 0,
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* THE PROCESS */}
      <section style={{ background: '#111111', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#F8F8F8',
              letterSpacing: '0.05em',
              marginBottom: '3rem',
              textAlign: 'center',
            }}
          >
            The Process
          </h2>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0,
            }}
            className="process-row"
          >
            {STEPS.map((step, i) => (
              <div key={step.num} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', padding: '0 2rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      border: '2px solid #7C3AED',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.75rem',
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1rem',
                      color: '#7C3AED',
                    }}
                  >
                    {step.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.65rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#F8F8F8',
                    }}
                  >
                    {step.label}
                  </div>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ width: '80px', height: '2px', background: '#7C3AED', flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .process-row { flex-direction: column !important; gap: 1.5rem !important; }
          .process-row > div { flex-direction: column; gap: 1rem; }
        }
      `}</style>
    </main>
  );
}
