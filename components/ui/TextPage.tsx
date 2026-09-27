import fs from 'node:fs';
import ReactMarkdown from 'react-markdown';

interface TextPageProps {
  filePath: string;
}

export default function TextPage({ filePath }: TextPageProps) {
  const content = fs.readFileSync(filePath, 'utf-8');

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#0b0d11',
        color: '#d1d5db',
        padding: '64px 20px',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: '#14171f',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          lineHeight: '1.7',
        }}
      >
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#ffffff', marginBottom: '24px' }}>
                {children}
              </h1>
            ),
            h3: ({ children }) => (
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#f3f4f6', marginTop: '32px', marginBottom: '12px' }}>
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p style={{ marginBottom: '16px', color: '#9ca3af', fontSize: '15px' }}>
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul style={{ paddingLeft: '24px', marginBottom: '16px', color: '#9ca3af', fontSize: '15px' }}>
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li style={{ marginBottom: '8px' }}>{children}</li>
            ),
            strong: ({ children }) => (
              <strong style={{ color: '#ffffff', fontWeight: '600' }}>{children}</strong>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </main>
  );
}