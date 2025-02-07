
import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { PatchesView } from "@/components/dashboard/PatchesView";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<Navigate to="patches" replace />} />
        <Route path="patches" element={<PatchesView />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
