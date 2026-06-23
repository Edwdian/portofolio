import React from 'react';
import profileImg from '../img/profile.jpeg';
import cvFile from '../files/cv_edwin.pdf';

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '0 2rem', paddingTop: 60, background: 'var(--white)',
      textAlign: 'center',
    }}>
      {/* Photo */}
        <div style={{
          width: 'clamp(120px, 18vw, 180px)',
          height: 'clamp(120px, 18vw, 180px)',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          border: '4px solid var(--border)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        }}>
        {/* ✏️ GANTI FOTO ANDA */}
              <img
              src={profileImg}
              alt="Edwin Dian Pramana"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
      </div>

      {/* Name */}
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700,
        letterSpacing: '-0.03em', lineHeight: 1.1,
        color: 'var(--black)', marginBottom: '0.75rem',
      }}>
        {/* ✏️ GANTI NAMA */}
        Edwin Dian Pramana
      </h1>

      {/* Role badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: '#eff6ff', border: '1px solid #bfdbfe',
        borderRadius: 999, padding: '0.3rem 1rem',
        fontSize: '0.82rem', fontWeight: 600,
        color: 'var(--accent)', marginBottom: '1.25rem',
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
        {/* ✏️ GANTI ROLE */}
        Full Stack Web Developer
      </div>

      {/* Tagline */}
      <p style={{
        maxWidth: 480, color: 'var(--muted)', fontSize: '1rem',
        lineHeight: 1.7, marginBottom: '2.5rem',
      }}>
        {/* ✏️ GANTI TAGLINE */}
        From idea to launch, I build websites and apps that people actually enjoy using — clean, fast, and built with care
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href={cvFile} download style={{
          background: 'var(--accent)', color: '#fff',
          padding: '0.65rem 1.5rem', borderRadius: 8,
          fontWeight: 600, fontSize: '0.875rem',
          transition: 'opacity 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >Download CV</a>
        <button onClick={() => go('contact')} style={{
          background: 'var(--white)', color: 'var(--black)',
          border: '1px solid var(--border)', cursor: 'pointer',
          padding: '0.65rem 1.5rem', borderRadius: 8,
          fontWeight: 600, fontSize: '0.875rem',
          transition: 'border-color 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
        >Contact Me</button>
      </div>

      {/* Scroll hint */}
      <button onClick={() => go('about')} style={{
        position: 'absolute', bottom: 32,
        background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
        color: 'var(--muted)', fontSize: '0.75rem',
        animation: 'bounce 2s infinite',
      }}>
        <span>scroll</span>
        <span style={{ fontSize: '1rem' }}>↓</span>
      </button>

      <style>{`
        @keyframes bounce {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(6px)}
        }
        #home { position: relative; }
      `}</style>
    </section>
  );
}
