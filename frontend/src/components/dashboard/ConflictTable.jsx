import { Link, useNavigate } from "react-router-dom";
import { conflictList } from "../../data/conflicts";

function ConflictTable({ conflicts = conflictList }) {
  const navigate = useNavigate();

  return (
    <section className="conflict-table-section">
      <div className="section-heading">
        <div>
          <h2>Recent Conflicts</h2>
          <p>Live review queue for unresolved reconciliation issues.</p>
        </div>

        <button type="button" className="text-button" onClick={() => navigate("/conflicts")}>
          View all conflicts
        </button>
      </div>

      <div className="table-wrapper">
        <table className="conflict-table">
          <thead>
            <tr>
              <th>Conflict ID</th>
              <th>Student</th>
              <th>Issue</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {conflicts.map((conflict) => (
              <tr key={conflict.id}>
                <td className="conflict-id">{conflict.id}</td>

                <td>
                  <div className="student-cell">
                    <strong>{conflict.student}</strong>
                    <span>{conflict.studentId}</span>
                  </div>
                </td>

                <td>
                  <div className="issue-cell">
                    <strong>{conflict.conflictType}</strong>
                    <span>{conflict.description}</span>
                  </div>
                </td>

                <td>
                  <span className={`severity-badge ${conflict.severity.toLowerCase()}`}>
                    {conflict.severity}
                  </span>
                </td>

                <td>
                  <span className="status-badge review">{conflict.status}</span>
                </td>

                <td>
                  <button
                    type="button"
                    className="view-button"
                    onClick={() => navigate(`/conflicts/${conflict.id}`)}
                  >
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <span>{conflicts.length} open cases</span>
        <Link to="/conflicts" className="text-button">
          Manage all records
        </Link>
      </div>
    </section>
  );
}

export default ConflictTable;