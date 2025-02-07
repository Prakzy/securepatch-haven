
import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { PatchesView } from "@/components/dashboard/PatchesView";
import { SystemHealthView } from "@/components/dashboard/SystemHealthView";
import { TicketsView } from "@/components/dashboard/TicketsView";
import { ActivityView } from "@/components/dashboard/ActivityView";
import { NotificationsView } from "@/components/dashboard/NotificationsView";
import { SettingsView } from "@/components/dashboard/SettingsView";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<Navigate to="patches" replace />} />
        <Route path="patches" element={<PatchesView />} />
        <Route path="health" element={<SystemHealthView />} />
        <Route path="tickets" element={<TicketsView />} />
        <Route path="activity" element={<ActivityView />} />
        <Route path="notifications" element={<NotificationsView />} />
        <Route path="settings" element={<SettingsView />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
