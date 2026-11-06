export const demoConflicts = {
  "CON-001": {
    id: "CON-001",
    student: "Aarav Sharma",
    studentId: "STU-2026-1042",
    department: "Computer Science",
    academicTerm: "2026–27",
    conflictType: "Missing Lab Schedule",
    severity: "High",
    status: "Needs Review",
    description:
      "Enrollment is confirmed, but no laboratory schedule is available for the student.",
    resolution:
      "Academic verification is required. The system should not assign a lab, time, or faculty member without authoritative information.",
    reviewAction: "Request Academic Review",
    evidence: [
      {
        source: "University Register",
        sourceTitle: "Enrollment Record",
        status: "Verified",
        recordLabel: "Enrollment Status",
        recordValue: "Active",
        extraLabel: "Academic Term",
        extraValue: "2026–27",
      },
      {
        source: "Lab Scheduling System",
        sourceTitle: "Laboratory Schedule",
        status: "Missing",
        recordLabel: "Schedule Record",
        recordValue: "Not found",
        extraLabel: "Academic Term",
        extraValue: "2026–27",
      },
    ],
  },
  "CON-002": {
    id: "CON-002",
    student: "Meera Reddy",
    studentId: "STU-2026-1088",
    department: "Computer Science",
    academicTerm: "2026–27",
    conflictType: "Hostel Badge Active Despite Suspension",
    severity: "Critical",
    status: "Pending Approval",
    description:
      "The suspension record conflicts with an active hostel access badge for the student.",
    resolution:
      "Authorized security review is required. An administrator must confirm the appropriate access-control action; the frontend must not change permissions automatically.",
    reviewAction: "Request Access Review",
    evidence: [
      {
        source: "University Suspension Records",
        sourceTitle: "Suspension Record",
        status: "Verified",
        recordLabel: "Suspension Status",
        recordValue: "Active",
        extraLabel: "Student ID",
        extraValue: "STU-2026-1088",
      },
      {
        source: "Hostel Access Control",
        sourceTitle: "Hostel Badge Record",
        status: "Conflict",
        recordLabel: "Badge Status",
        recordValue: "Active",
        extraLabel: "Authorized Action",
        extraValue: "Manual admin review required",
      },
    ],
  },
};

export const conflictList = Object.values(demoConflicts);

export const activityFeed = [
  {
    id: 1,
    title: "Conflict detected",
    description: "Missing lab schedule for student STU-2026-1042",
    time: "10 minutes ago",
    type: "warning",
  },
  {
    id: 2,
    title: "Evidence verified",
    description: "Enrollment status confirmed against university register",
    time: "25 minutes ago",
    type: "success",
  },
  {
    id: 3,
    title: "Approval requested",
    description: "Hostel badge restriction awaiting authorized review",
    time: "42 minutes ago",
    type: "approval",
  },
];

export function getConflictById(conflictId) {
  return demoConflicts[conflictId] ?? null;
}

export function addDemoActivity(entry) {
  activityFeed.unshift({
    ...entry,
    id: Date.now() + Math.random(),
    time: "just now",
  });
}

export function requestReview(conflictId, reviewType) {
  const conflict = demoConflicts[conflictId];

  if (!conflict) {
    return;
  }

  conflict.status = "Review Requested";

  const nextTitle =
    reviewType === "academic" ? "Academic review requested" : "Access review requested";

  const nextDescription =
    reviewType === "academic"
      ? "Academic office review requested for the missing lab schedule discrepancy."
      : "Authorized security review requested for the active hostel badge conflict.";

  addDemoActivity({
    title: nextTitle,
    description: nextDescription,
    type: "approval",
  });
}
