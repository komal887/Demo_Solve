import { Link } from "react-router-dom";
import { conflictList } from "../data/conflicts";

function Approvals() {
  const approvalQueue = conflictList.filter((conflict) =>
    ["Pending Approval", "Review Requested"].includes(conflict.status)
  );

  return (
    <section className="page-shell approvals-page">
      <div className="page-heading">
        <div>
          <h2>Approvals</h2>
          <p>
            Review outstanding actions that require authorization before any
            campus record is changed.
          </p>
        </div>
      </div>

      <div className="list-card">
        {approvalQueue.length === 0 ? (
          <div className="empty-state">
            <h3>No approvals pending</h3>
            <p>All active cases are currently in a healthy review state.</p>
          </div>
        ) : (
          approvalQueue.map((conflict) => (
            <article key={conflict.id} className="list-item">
              <div>
                <p className="list-item-eyebrow">{conflict.id}</p>
                <h3>{conflict.student}</h3>
                <p>{conflict.conflictType}</p>
              </div>

              <div className="list-item-meta">
                <span className={`severity-badge ${conflict.severity.toLowerCase()}`}>
                  {conflict.severity}
                </span>
                <span className="status-badge badge">{conflict.status}</span>
              </div>

              <Link className="text-button" to={`/conflicts/${conflict.id}`}>
                Review case
              </Link>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default Approvals;
