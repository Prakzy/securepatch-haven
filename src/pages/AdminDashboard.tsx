
import { Routes, Route, Navigate } from "react-router-dom";
import { AdminDashboardLayout } from "@/components/admin/AdminDashboardLayout";
import { UsersView } from "@/components/admin/UsersView";
import { SystemStatsView } from "@/components/admin/SystemStatsView";
import { SubscriptionsView } from "@/components/admin/SubscriptionsView";
import { LogsView } from "@/components/admin/LogsView";
import { AdminSettingsView } from "@/components/admin/AdminSettingsView";

const AdminDashboard = () => {
  return (
    <AdminDashboardLayout>
      <Routes>
        <Route index element={<Navigate to="users" replace />} />
        <Route path="users" element={<UsersView />} />
        <Route path="stats" element={<SystemStatsView />} />
        <Route path="subscriptions" element={<SubscriptionsView />} />
        <Route path="logs" element={<LogsView />} />
        <Route path="settings" element={<AdminSettingsView />} />
      </Routes>
    </AdminDashboardLayout>
  );
};

export default AdminDashboard;
