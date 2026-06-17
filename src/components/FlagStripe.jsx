export default function FlagStripe({ width = 80 }) {
  return (
    <div
      style={{
        display: 'flex',
        height: '3px',
        width: `${width}px`,
        marginBottom: '28px',
      }}
    >
      <div style={{ flex: 1, background: 'var(--green)' }} />
      <div style={{ flex: 1, background: 'var(--gold)' }} />
      <div style={{ flex: 1, background: 'var(--red)' }} />
    </div>
  );
}
