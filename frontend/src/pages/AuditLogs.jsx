import { activityFeed } from "../data/conflicts";

function AuditLogs() {
  return (
    <section className="page-shell audit-page">
      <div className="page-heading">
        <div>
          <h2>Audit Logs</h2>
          <p>
            Demonstration trail of reconciliation, verification, and review
            actions across the platform.
          </p>
        </div>
      </div>

      <div className="log-list">
        {activityFeed.map((entry) => (
          <article key={entry.id} className="log-item">
            <div className={`activity-marker ${entry.type}`}>
              {entry.type === "warning" ? "!" : entry.type === "success" ? "✓" : "↗"}
            </div>

            <div className="activity-content">
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
              <span>{entry.time}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AuditLogs;
