'use client';

import { useState } from 'react';

const ALL_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', cat: 'WHEELS', aspect: 'landscape' },
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', cat: 'INDUSTRIAL', aspect: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80', cat: 'AUTO', aspect: 'landscape' },
  { src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80', cat: 'INDUSTRIAL', aspect: 'square' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', cat: 'AUTO', aspect: 'landscape' },
  { src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80', cat: 'WHEELS', aspect: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', cat: 'AUTO', aspect: 'square' },
  { src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', cat: 'CUSTOM', aspect: 'landscape' },
  { src: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80', cat: 'CUSTOM', aspect: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1581092921461-39b2f2df9c8a?w=800&q=80', cat: 'INDUSTRIAL', aspect: 'landscape' },
  { src: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?w=800&q=80', cat: 'WHEELS', aspect: 'square' },
  { src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', cat: 'AUTO', aspect: 'portrait' },
];

const FILTERS = ['ALL', 'WHEELS', 'AUTO', 'INDUSTRIAL', 'CUSTOM'];

export default function Gallery() {
  const [active, setActive] = useState('ALL');

  const filtered = active === 'ALL' ? ALL_IMAGES : ALL_IMAGES.filter((i) => i.cat === active);

  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      {/* Filter tabs */}
      <div
        style={{
          paddingTop: '6rem',
          paddingBottom: '2rem',
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: active === f ? '#7C3AED' : '#555555',
              padding: '0.5rem 0',
              borderBottom: active === f ? '1px solid #7C3AED' : '1px solid transparent',
              transition: 'color 0.2s',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry grid — full bleed */}
      <div className="masonry-grid" style={{ padding: 0 }}>
        {filtered.map((img, i) => (
          <div key={i} className="masonry-item" style={{ position: 'relative' }}>
            <img
              src={img.src}
              alt=""
              aria-hidden="true"
              style={{
                width: '100%',
                display: 'block',
                height: img.aspect === 'portrait' ? '500px' : img.aspect === 'square' ? '350px' : '260px',
                objectFit: 'cover',
              }}
            />
            {/* Hover overlay */}
            <div
              className="gallery-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(124,58,237,0.75)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = '1')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = '0')}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.65rem',
                  letterSpacing: '0.3em',
                  color: '#F8F8F8',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                {img.cat}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
