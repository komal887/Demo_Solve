import { useMemo, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getConflictById, requestReview } from "../data/conflicts";

function ConflictDetails() {
  const { conflictId } = useParams();
  const navigate = useNavigate();
  const conflict = getConflictById(conflictId);
  const [status, setStatus] = useState(conflict?.status ?? "");

  const isBadgeConflict = useMemo(
    () => conflict?.id === "CON-002",
    [conflict]
  );

  if (!conflict) {
    return (
      <section className="conflict-details-page empty-state-panel">
        <h2>Conflict not found</h2>
        <p>
          The requested record could not be located in the current demo dataset.
        </p>
        <button
          type="button"
          className="primary-button"
          onClick={() => navigate("/conflicts")}
        >
          Back to conflicts
        </button>
      </section>
    );
  }

  const handleReviewRequest = (type) => {
    requestReview(conflict.id, type);
    setStatus("Review Requested");
  };

  return (
    <section className="conflict-details-page">
      <div className="details-breadcrumb">
        <Link to="/conflicts">Conflicts</Link> / <strong>{conflict.id}</strong>
      </div>

      <div className="details-heading">
        <div>
          <div className="details-title-row">
            <h2>{`${conflict.id} · ${conflict.student}`}</h2>
            <span className={`severity-badge ${conflict.severity.toLowerCase()}`}>
              {conflict.severity}
            </span>
          </div>

          <p>{conflict.description}</p>
        </div>

        <span className="status-badge review">{status}</span>
      </div>

      <div className="details-summary-grid">
        <article className="details-summary-card">
          <span>Student</span>
          <strong>{conflict.student}</strong>
          <small>{conflict.studentId}</small>
        </article>

        <article className="details-summary-card">
          <span>Department</span>
          <strong>{conflict.department}</strong>
          <small>{conflict.academicTerm}</small>
        </article>

        <article className="details-summary-card">
          <span>Conflict Type</span>
          <strong>{conflict.conflictType}</strong>
          <small>
            {isBadgeConflict ? "Suspension vs. Access Control" : "Enrollment vs. Lab System"}
          </small>
        </article>
      </div>

      <div className="details-section-heading">
        <div>
          <h2>Evidence & Source Records</h2>
          <p>Compare the authoritative records involved in this conflict.</p>
        </div>
      </div>

      <div className="evidence-grid">
        {conflict.evidence.map((item) => (
          <article key={item.source} className="evidence-card">
            <div className="evidence-header">
              <div>
                <p className="evidence-source">{item.source}</p>
                <h3>{item.sourceTitle}</h3>
              </div>

              <span className="evidence-status">{item.status}</span>
            </div>

            <div className="evidence-details">
              <div className="evidence-row">
                <span>{item.recordLabel}</span>
                <strong>{item.recordValue}</strong>
              </div>

              <div className="evidence-row">
                <span>{item.extraLabel}</span>
                <strong>{item.extraValue}</strong>
              </div>

              <div className="evidence-row">
                <span>Academic Term</span>
                <strong>{conflict.academicTerm}</strong>
              </div>

              <div className="evidence-row">
                <span>Source Updated</span>
                <strong>Today, 09:15 AM</strong>
              </div>
            </div>
          </article>
        ))}
      </div>

      <article className="resolution-card">
        <div className="resolution-heading">
          <div className="resolution-icon">!</div>

          <div>
            <h2>Recommended Resolution</h2>
            <p>
              {isBadgeConflict
                ? "Authorized security review required"
                : "Academic verification required"}
            </p>
          </div>
        </div>

        <p className="resolution-description">{conflict.resolution}</p>

        <div className="resolution-actions">
          <button
            className="primary-button"
            type="button"
            onClick={() => handleReviewRequest(isBadgeConflict ? "access" : "academic")}
          >
            {conflict.reviewAction}
          </button>

          <button
            type="button"
            className="secondary-button"
            onClick={() => navigate("/conflicts")}
          >
            Back to Conflicts
          </button>
        </div>
      </article>
    </section>
  );
}

export default ConflictDetails;
