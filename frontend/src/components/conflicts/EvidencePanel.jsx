
function EvidencePanel({ title, source, status, details }) {
  return (
    <article className="evidence-card">
      <div className="evidence-header">
        <div>
          <p className="evidence-source">{source}</p>
          <h3>{title}</h3>
        </div>

        <span className="evidence-status">{status}</span>
      </div>

      <div className="evidence-details">
        {details.map((detail) => (
          <div className="evidence-row" key={detail.label}>
            <span>{detail.label}</span>
            <strong>{detail.value}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}

export default EvidencePanel;
