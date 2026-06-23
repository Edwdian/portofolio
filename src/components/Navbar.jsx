import React, { useState, useEffect } from 'react';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(250,250,250,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 2rem',
        height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={() => go('home')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontWeight: 700, fontSize: '1rem', color: 'var(--black)', letterSpacing: '-0.02em',
        }}>
          {/* ✏️ GANTI NAMA SINGKAT */}
          Portofolio<span style={{ color: 'var(--accent)' }}>.</span>
        </button>

        <div style={{ display: 'flex', gap: '0.2rem' }} className="nav-links">
          {links.map(l => (
            <button key={l} onClick={() => go(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '0.35rem 0.9rem', borderRadius: 6,
              fontSize: '0.875rem', fontWeight: 500, color: 'var(--mid)',
              transition: 'color 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--mid)'}
            >{l}</button>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="nav-burger" style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', flexDirection: 'column', gap: 4, padding: 4,
        }}>
          {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: 20, height: 1.5, background: 'var(--black)' }} />)}
        </button>
      </div>

      {open && (
        <div style={{
          background: 'var(--white)', borderTop: '1px solid var(--border)',
          padding: '1rem 2rem', display: 'flex', flexDirection: 'column',
        }}>
          {links.map(l => (
            <button key={l} onClick={() => go(l)} style={{
              background: 'none', border: 'none', textAlign: 'left',
              cursor: 'pointer', padding: '0.6rem 0',
              fontSize: '0.95rem', color: 'var(--mid)',
              borderBottom: '1px solid var(--border)',
            }}>{l}</button>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:640px){
          .nav-links{display:none!important;}
          .nav-burger{display:flex!important;}
        }
      `}</style>
    </nav>
  );
}
