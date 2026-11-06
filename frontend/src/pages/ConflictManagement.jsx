import { useMemo, useState } from "react";
import ConflictTable from "../components/dashboard/ConflictTable";
import { conflictList } from "../data/conflicts";

function ConflictManagement() {
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [severityFilter, setSeverityFilter] = useState("All");

  const filteredConflicts = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase();

    return conflictList.filter((conflict) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        conflict.student.toLowerCase().includes(normalizedSearch) ||
        conflict.id.toLowerCase().includes(normalizedSearch) ||
        conflict.conflictType.toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        statusFilter === "All" || conflict.status === statusFilter;

      const matchesSeverity =
        severityFilter === "All" || conflict.severity === severityFilter;

      return matchesSearch && matchesStatus && matchesSeverity;
    });
  }, [searchValue, statusFilter, severityFilter]);

  return (
    <section className="dashboard-page">
      <div className="page-heading">
        <div>
          <h2>Conflict Management</h2>
          <p>
            View and review discrepancies detected across campus systems.
          </p>
        </div>
      </div>

      <div className="filters-panel">
        <input
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search by student, ID, or issue"
          className="filter-input"
          aria-label="Search conflicts"
        />

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          className="filter-select"
          aria-label="Filter conflicts by status"
        >
          <option value="All">All statuses</option>
          <option value="Needs Review">Needs Review</option>
          <option value="Pending Approval">Pending Approval</option>
          <option value="Review Requested">Review Requested</option>
        </select>

        <select
          value={severityFilter}
          onChange={(event) => setSeverityFilter(event.target.value)}
          className="filter-select"
          aria-label="Filter conflicts by severity"
        >
          <option value="All">All severities</option>
          <option value="High">High</option>
          <option value="Critical">Critical</option>
        </select>
      </div>

      <ConflictTable conflicts={filteredConflicts} />
    </section>
  );
}

export default ConflictManagement;