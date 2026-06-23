import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '1.75rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '0.5rem',
      background: 'var(--white)',
    }}>
      <span style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
        {/* ✏️ GANTI NAMA */}
        © {new Date().getFullYear(2026)} My Portfolio. All rights reserved.
      </span>
      <span style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
        Built with React
      </span>
    </footer>
  );
}
