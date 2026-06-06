'use client';

import Link from 'next/link';

const services = [
  { icon: '◎', title: 'Wheels & Rims', desc: 'Custom finishes for any wheel spec' },
  { icon: '⬡', title: 'Auto Parts', desc: 'Engine bays, brackets, calipers — all of it' },
  { icon: '▣', title: 'Industrial', desc: 'Heavy equipment, fabricated steel, OEM runs' },
  { icon: '◈', title: 'Restoration', desc: 'Bring vintage metal back to better than new' },
  { icon: '◻', title: 'Furniture', desc: 'Outdoor frames that outlast the weather' },
  { icon: '◉', title: 'Color Match', desc: 'Any RAL, any swatch, any vision' },
];

export default function Home() {
  return (
    <main style={{ background: '#0A0A0A' }}>

      {/* ── SECTION 1: HERO ── */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=85"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
          }}
        />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '20vw',
              lineHeight: 0.9,
              color: '#F8F8F8',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            DEMON
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.4em',
              color: '#555555',
              textTransform: 'uppercase',
              marginTop: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            Powder Coating — Castle Rock, CO
          </p>
          <Link
            href="/gallery"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2.5rem',
              border: '1px solid rgba(248,248,248,0.6)',
              color: '#F8F8F8',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = '#7C3AED';
              (e.currentTarget as HTMLAnchorElement).style.color = '#7C3AED';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(248,248,248,0.6)';
              (e.currentTarget as HTMLAnchorElement).style.color = '#F8F8F8';
            }}
          >
            See the Work
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#555555',
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
          }}
        >
          ↓
        </div>
      </section>

      {/* ── SECTION 2: BEFORE / AFTER ── */}
      <section style={{ background: '#0A0A0A', padding: '6rem 2rem' }}>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: '#F8F8F8',
            textAlign: 'center',
            letterSpacing: '0.03em',
            marginBottom: '3rem',
          }}
        >
          The Difference Is Obvious
        </h2>

        <div
          style={{
            display: 'flex',
            maxWidth: '1100px',
            margin: '0 auto',
            gap: 0,
            position: 'relative',
          }}
        >
          {/* BEFORE */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80"
              alt="Before powder coating"
              style={{ width: '100%', height: '480px', objectFit: 'cover', filter: 'grayscale(60%) brightness(0.7)' }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#555555',
              }}
            >
              Before
            </span>
          </div>

          {/* Purple divider */}
          <div style={{ width: '3px', background: '#7C3AED', flexShrink: 0 }} />

          {/* AFTER */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=85"
              alt="After powder coating"
              style={{ width: '100%', height: '480px', objectFit: 'cover' }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#F8F8F8',
              }}
            >
              After
            </span>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SERVICES ROW ── */}
      <section style={{ background: '#111111', padding: '5rem 2rem' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0',
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                padding: '2.5rem 1.5rem',
                borderLeft: '1px solid #1a1a1a',
                cursor: 'default',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#7C3AED';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#1a1a1a';
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.2rem',
                  color: '#7C3AED',
                  marginBottom: '0.75rem',
                }}
              >
                {s.icon}
              </div>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.1rem',
                  color: '#F8F8F8',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem',
                }}
              >
                {s.title}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.72rem',
                  color: '#555555',
                  lineHeight: 1.6,
                }}
              >
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: PULL QUOTE ── */}
      <section
        style={{
          background: '#0A0A0A',
          padding: '7rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            borderLeft: '4px solid #7C3AED',
            paddingLeft: '2.5rem',
            maxWidth: '700px',
          }}
        >
          <p
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: '#F8F8F8',
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            &ldquo;Built different. Finished right.&rdquo;
          </p>
        </div>
      </section>

      {/* ── SECTION 5: CTA STRIP ── */}
      <section
        style={{
          background: '#111111',
          padding: '6rem 2rem',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            color: '#F8F8F8',
            letterSpacing: '0.02em',
            lineHeight: 1,
            margin: 0,
          }}
        >
          Ready to Start?
        </h2>
        <p
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: '#7C3AED',
            letterSpacing: '0.05em',
            marginTop: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          (720) 555-0198
        </p>
        <Link
          href="/contact"
          style={{
            display: 'inline-block',
            padding: '1rem 3rem',
            background: '#7C3AED',
            color: '#F8F8F8',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#6D28D9')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#7C3AED')}
        >
          Get a Quote
        </Link>
      </section>

    </main>
  );
}
