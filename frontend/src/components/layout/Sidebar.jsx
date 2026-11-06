
import { NavLink } from "react-router-dom";

const navigationItems = [
  { label: "Dashboard", icon: "▦", path: "/" },
  { label: "Conflicts", icon: "⚠", path: "/conflicts" },
  { label: "Approvals", icon: "✓", path: "/approvals" },
  { label: "Audit Logs", icon: "≡", path: "/audit-logs" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-logo">U</div>

        <div className="brand-text">
          <h2>UniSolver</h2>
          <p>Campus Reconciliation</p>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-label">WORKSPACE</p>

        <nav className="sidebar-navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="system-status">
          <span className="status-dot"></span>
          <div>
            <p>System Status</p>
            <span>Demo environment</span>
          </div>
        </div>

        <div className="sidebar-profile">
          <div className="profile-avatar">A</div>
          <div className="profile-info">
            <p>Admin User</p>
            <span>Campus Administrator</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
