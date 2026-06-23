import React from 'react';
import { FaLaptopCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

// ✏️ GANTI SKILLS ANDA
const categories = [
  {
    title: 'Frontend',
    icon: <FaLaptopCode />,
    items: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: <FaServer />,
    items: ['Node.js', 'PHP', 'Laravel', 'Express.js'],
  },
  {
    title: 'Database',
    icon: <FaDatabase />,
    items: ['MySQL', 'PostgreSQL', 'Firebase'],
  },
  {
    title: 'Tools',
    icon: <FaTools />,
    items: ['Git', 'GitHub', 'Figma', 'Canva', 'VS Code', 'Postman'],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '5rem 2rem', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Skills
        </p>
        <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '3rem' }}>
          What I work with
        </h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1px', background: 'var(--border)',
          borderRadius: 16, overflow: 'hidden',
          border: '1px solid var(--border)',
        }}>
          {categories.map((cat, i) => (
            <div key={i} style={{ background: 'var(--bg)', padding: '1.75rem' }}>
              <h3 style={{
                fontSize: '0.875rem', fontWeight: 600, color: 'var(--black)',
                marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: 6,
                  background: '#eff6ff', color: 'var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', fontWeight: 700, border: '1px solid #bfdbfe',
                }}>
                  {cat.icon}
                </span>
                {cat.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {cat.items.map(item => (
                  <span key={item} style={{
                    fontSize: '0.8rem', color: 'var(--mid)',
                    background: 'var(--white)', border: '1px solid var(--border)',
                    padding: '0.25rem 0.65rem', borderRadius: 999,
                  }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
