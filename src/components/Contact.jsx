import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // ✏️ Integrasikan dengan Formspree: https://formspree.io
    // atau EmailJS: https://www.emailjs.com
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const input = {
    width: '100%', padding: '0.7rem 0.9rem',
    border: '1px solid var(--border)', borderRadius: 8,
    fontSize: '0.9rem', fontFamily: 'inherit',
    color: 'var(--black)', background: 'var(--white)',
    outline: 'none', transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ padding: '5rem 2rem', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Contact
        </p>
        <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '3rem' }}>
          Get in touch
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'start' }} className="contact-grid">

          {/* Left */}
          <div>
            <p style={{ fontSize: '0.95rem', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              {/* ✏️ GANTI TEKS */}
              Whether you need a developer, have a question, or just want to chat — my door is always open
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {[
                { label: 'Email', value: 'edwiendian@gmail.com', href: 'mailto:youremail@gmail.com' },
                { label: 'Phone', value: '+62 852-3558-9635', href: 'tel:+6200000000' },
                { label: 'Location', value: 'Banyuwangi, Indonesia', href: null },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.15rem' }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: '0.95rem', color: 'var(--black)', fontWeight: 500 }}>
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.95rem', color: 'var(--black)', fontWeight: 500 }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[
                  {
                    label: 'GitHub',
                    href: 'https://github.com/Edwdian',
                    icon: <FaGithub />,
                  },
                  {
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/edwindian',
                    icon: <FaLinkedin />,
                  },
                  {
                    label: 'Instagram',
                    href: 'https://www.instagram.com/edw.dian?igsh=c3Q3bG54dHIzZ2Rj',
                    icon: <FaInstagram />,
                  },
                ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  title={s.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: 'var(--mid)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--mid)'; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            background: 'var(--bg)', borderRadius: 16,
            border: '1px solid var(--border)', padding: '2rem',
          }}>
            {sent && (
              <div style={{
                background: '#f0fdf4', border: '1px solid #bbf7d0',
                borderRadius: 8, padding: '0.75rem 1rem',
                fontSize: '0.875rem', color: '#166534', marginBottom: '1.25rem',
              }}>
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 500, color: 'var(--mid)', marginBottom: '0.35rem' }}>Name</label>
                  <input name="name" value={form.name} onChange={change}
                    placeholder="Your name" style={input}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 500, color: 'var(--mid)', marginBottom: '0.35rem' }}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={change}
                    placeholder="you@email.com" style={input}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 500, color: 'var(--mid)', marginBottom: '0.35rem' }}>Message</label>
                <textarea name="message" value={form.message} onChange={change}
                  placeholder="Tell me about your project..." rows={5}
                  style={{ ...input, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <button onClick={submit} style={{
                background: 'var(--accent)', color: '#fff', border: 'none',
                padding: '0.75rem', borderRadius: 8, fontWeight: 600,
                fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'inherit',
                transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .contact-grid{grid-template-columns:1fr!important;gap:2rem!important;}
          .form-row{grid-template-columns:1fr!important;}
        }
      `}</style>
    </section>
  );
}
