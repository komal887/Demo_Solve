import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import StatCard from "../components/dashboard/StatCard";
import ConflictTable from "../components/dashboard/ConflictTable";

const stats = [
  {
    title: "Total Records",
    value: "2,480",
    subtitle: "Synthetic demo data only; not an authoritative university record",
    icon: "▤",
    color: "blue",
  },
  {
    title: "Conflicts Detected",
    value: "02",
    subtitle: "Open discrepancies requiring review",
    icon: "⚠",
    color: "orange",
  },
  {
    title: "Pending Approvals",
    value: "02",
    subtitle: "Waiting for authorized review",
    icon: "◷",
    color: "purple",
  },
  {
    title: "Resolved Cases",
    value: "156",
    subtitle: "Successfully reconciled",
    icon: "✓",
    color: "green",
  },
];

function Dashboard() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="dashboard-page">
      <div className="page-heading">
        <div>
          <h2>Campus Overview</h2>
          <p>
            Monitor student records, identify discrepancies, and review
            reconciliation activity across campus systems.
          </p>
        </div>

        <button
          className="primary-button"
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          + New Reconciliation
        </button>
      </div>

      <div className="welcome-panel">
        <div>
          <p className="welcome-eyebrow">UNISOLVER WORKSPACE</p>
          <h2>Welcome to UniSolver</h2>
          <p>
            A unified view of campus record discrepancies and evidence-backed
            resolution workflows. This demo shows synthetic university data only.
          </p>
        </div>

        <div className="welcome-symbol">U</div>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <ActivityFeed />
      <ConflictTable />

      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <h3>New Reconciliation Intake</h3>
              <button
                type="button"
                className="close-button"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>

            <p>
              This demo creates a reconciliation workflow for a new record review.
              Real data integration would be handled by a connected backend.
            </p>

            <div className="modal-actions">
              <button
                type="button"
                className="primary-button"
                onClick={() => {
                  setIsModalOpen(false);
                  navigate("/conflicts");
                }}
              >
                Open reconciliation queue
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Dashboard;
