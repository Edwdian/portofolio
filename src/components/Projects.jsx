import React, { useState } from 'react';
import abeeImg from '../img/abee.png';
import skripsiImg from '../img/skripsi.png';

const projects = [
  {
    title: 'ABE Aretha Beauty',
    tag: 'Web App',
    description:
      'Website reservasi layanan beauty yang memudahkan pengguna untuk melakukan pemesanan secara online dengan alur yang sederhana dan mudah digunakan.',
    tech: ['Laravel', 'Tailwind CSS', 'MySQL'],
    img: abeeImg,
  },
  {
    title: 'SkripsiVibe AI',
    tag: 'AI Web App',
    description:
      'Aplikasi web berbasis AI yang membantu mahasiswa mengukur tingkat kesiapan sebelum menghadapi sidang skripsi. Sistem ini menyediakan simulasi tanya jawab berbasis AI sesuai topik penelitian pengguna serta memberikan umpan balik terhadap jawaban yang diberikan.',
    tech: ['React', 'AI Integration', 'Tailwind CSS', 'Firebase'],
    img: skripsiImg,
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      style={{
        padding: '5rem 2rem',
        background: 'var(--bg)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        <p
          style={{
            fontSize: '0.78rem',
            fontWeight: 600,
            color: 'var(--accent)',
          }}
        >
          Projects
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.5rem,3vw,2rem)',
              fontWeight: 700,
            }}
          >
            Selected Work
          </h2>

          <a
            href="https://github.com/Edwdian"
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: '0.875rem',
              color: 'var(--accent)',
              fontWeight: 500,
            }}
          >
            View all on GitHub →
          </a>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1px',
            background: 'var(--border)',
            borderRadius: 16,
            overflow: 'hidden',
            border: '1px solid var(--border)',
          }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? 'var(--white)' : 'var(--bg)',
                cursor: 'pointer',
                transition: '0.3s ease',
              }}
            >
              <div
                className="project-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 500px',
                  alignItems: 'stretch',
                }}
              >
                {/* LEFT */}
                <div
                  style={{
                    padding: '2rem 2.5rem',
                    borderRight: '1px solid var(--border)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '0.75rem',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          color: 'var(--accent)',
                          background: '#eff6ff',
                          padding: '0.2rem 0.65rem',
                          borderRadius: 999,
                        }}
                      >
                        {p.tag}
                      </span>

                      <span
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--muted)',
                        }}
                      >
                        {p.year}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                        fontSize: '1.25rem',
                      }}
                    >
                      {p.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.95rem',
                        lineHeight: 1.8,
                        color: 'var(--text)',
                      }}
                    >
                      {p.description}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginTop: '1.5rem',
                    }}
                  >
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.75rem',
                          border: '1px solid var(--border)',
                          padding: '0.25rem 0.7rem',
                          borderRadius: 999,
                          background: 'var(--bg)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div
                  className="project-img"
                  style={{
                    background: '#f8fafc',
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{
                      width: '100%',
                      aspectRatio: '2 / 1',
                      objectFit: 'contain',
                      borderRadius: '12px',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                      display: 'block',
                      transition: 'all 0.4s ease',
                      transform:
                        hovered === i ? 'scale(1.03)' : 'scale(1)',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-row {
            grid-template-columns: 1fr !important;
          }

          .project-img {
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}