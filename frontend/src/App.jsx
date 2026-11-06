import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import ConflictDetails from "./pages/ConflictDetails";
import ConflictManagement from "./pages/ConflictManagement";
import Approvals from "./pages/Approvals";
import AuditLogs from "./pages/AuditLogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/conflicts"
          element={
            <MainLayout>
              <ConflictManagement />
            </MainLayout>
          }
        />

        <Route
          path="/conflicts/:conflictId"
          element={
            <MainLayout>
              <ConflictDetails />
            </MainLayout>
          }
        />

        <Route
          path="/approvals"
          element={
            <MainLayout>
              <Approvals />
            </MainLayout>
          }
        />

        <Route
          path="/audit-logs"
          element={
            <MainLayout>
              <AuditLogs />
            </MainLayout>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;