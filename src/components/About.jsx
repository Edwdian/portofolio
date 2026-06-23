import React from 'react';
import aboutImg from '../img/edwin.jpg';

export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 2rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Section label */}
        <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          About
        </p>
        <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '3rem' }}>
          A little about me
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="about-grid">

          {/* Left: photo */}
          <div>
            <div style={{
              width: '100%',
              aspectRatio: '1/1',
              borderRadius: 16,
              overflow: 'hidden',
              marginBottom: '1.5rem',
              background: '#e2e8f0',
            }}>
              {/* ✏️ GANTI FOTO */}
              <img
              src={aboutImg}
              alt="Edwin Dian Pramana"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            </div>
          </div>

          {/* Right: text only */}
          <div>
            <p style={{ color: 'var(--mid)', fontSize: '1rem', lineHeight: 1.85, marginBottom: '1rem' }}>
              Hi, I'm <strong style={{ color: 'var(--black)' }}>Edwin!</strong> I'm a Software Engineering Technology student who genuinely enjoys building things for the web. I love working across the full stack — crafting clean interfaces on the front and making sure everything runs smoothly on the back, mostly with Laravel and React.
            </p>
            <p style={{ color: 'var(--mid)', fontSize: '1rem', lineHeight: 1.85 }}>
              I'm the kind of person who's always curious, always learning, and loves being part of a team that builds things that actually matter. Clean code, good vibes, and real impact — that's what I'm here for.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .about-grid{grid-template-columns:1fr!important;gap:2rem!important;}
        }
      `}</style>
    </section>
  );
}