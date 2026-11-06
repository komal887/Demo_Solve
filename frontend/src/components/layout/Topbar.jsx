
import { useLocation } from "react-router-dom";

function Topbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const pageMeta = {
    "/": { breadcrumb: "Workspace / Overview", title: "Dashboard" },
    "/conflicts": { breadcrumb: "Workspace / Conflicts", title: "Conflict Management" },
    "/approvals": { breadcrumb: "Workspace / Approvals", title: "Approvals" },
    "/audit-logs": { breadcrumb: "Workspace / Audit Logs", title: "Audit Logs" },
  };

  const matchedMeta = pathname.startsWith("/conflicts/")
    ? {
        breadcrumb: "Workspace / Conflicts / Details",
        title: "Conflict Details",
      }
    : pageMeta[pathname] ?? { breadcrumb: "Workspace / Overview", title: "Dashboard" };

  return (
    <header className="topbar">
      <div className="topbar-heading">
        <p className="topbar-breadcrumb">{matchedMeta.breadcrumb}</p>
        <h1>{matchedMeta.title}</h1>
      </div>

      <div className="topbar-actions">
        <div className="topbar-search">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search records, students..."
            aria-label="Search records and students"
          />
          <span className="search-shortcut">⌘ K</span>
        </div>

        <button
          className="notification-button"
          type="button"
          aria-label="Notifications"
        >
          ♧
          <span className="notification-dot"></span>
        </button>

        <div className="topbar-avatar">A</div>
      </div>
    </header>
  );
}

export default Topbar;
