'use client';

export default function Contact() {
  return (
    <main
      style={{
        background: '#0A0A0A',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8rem 2rem 4rem',
      }}
    >
      {/* Phone — huge */}
      <a
        href="tel:+17205550198"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          color: '#F8F8F8',
          textDecoration: 'none',
          letterSpacing: '0.03em',
          lineHeight: 1,
          display: 'block',
          textAlign: 'center',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#7C3AED')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#F8F8F8')}
      >
        (720) 555-0198
      </a>

      {/* Email */}
      <a
        href="mailto:kevin@demonpowdercoating.com"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.8rem',
          color: '#555555',
          textDecoration: 'none',
          marginTop: '1rem',
          letterSpacing: '0.05em',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#7C3AED')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#555555')}
      >
        kevin@demonpowdercoating.com
      </a>

      {/* Location */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.7rem',
          letterSpacing: '0.2em',
          color: '#555555',
          textTransform: 'uppercase',
          marginTop: '0.5rem',
        }}
      >
        Castle Rock, CO
      </p>

      {/* Divider */}
      <div
        style={{
          width: '3px',
          height: '3rem',
          background: '#7C3AED',
          margin: '3rem 0',
        }}
      />

      {/* Form */}
      <form
        action="mailto:kevin@demonpowdercoating.com"
        method="get"
        encType="text/plain"
        style={{
          width: '100%',
          maxWidth: '560px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}
      >
        {[
          { name: 'name', label: 'Name', type: 'text' },
          { name: 'email', label: 'Email', type: 'email' },
        ].map((f) => (
          <div key={f.name}>
            <label
              htmlFor={f.name}
              style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#555555',
                marginBottom: '0.5rem',
              }}
            >
              {f.label}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid #333333',
                padding: '0.6rem 0',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                color: '#F8F8F8',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = '#7C3AED')}
              onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = '#333333')}
            />
          </div>
        ))}

        <div>
          <label
            htmlFor="body"
            style={{
              display: 'block',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#555555',
              marginBottom: '0.5rem',
            }}
          >
            What do you need coated?
          </label>
          <textarea
            id="body"
            name="body"
            rows={4}
            required
            style={{
              width: '100%',
              background: 'transparent',
              border: '1px solid #333333',
              padding: '0.75rem',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem',
              color: '#F8F8F8',
              outline: 'none',
              resize: 'vertical',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = '#7C3AED')}
            onBlur={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = '#333333')}
          />
        </div>

        <button
          type="submit"
          style={{
            background: '#7C3AED',
            border: 'none',
            color: '#F8F8F8',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 500,
            padding: '1rem 2rem',
            cursor: 'pointer',
            transition: 'background 0.2s',
            alignSelf: 'flex-start',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#6D28D9')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#7C3AED')}
        >
          Submit
        </button>
      </form>
    </main>
  );
}
