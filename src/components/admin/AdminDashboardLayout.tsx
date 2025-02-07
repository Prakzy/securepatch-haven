import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminDashboardSidebar } from "./AdminDashboardSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

export function AdminDashboardLayout({ children }: AdminDashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminDashboardSidebar />
        <main className="flex-1 p-6 overflow-auto space-y-6">
          <DashboardHeader />
          <DashboardStats />
          <TicketManagement />
          <PatchUpload />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}

function DashboardHeader() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <Button className="rounded-2xl">Log Out</Button>
    </div>
  );
}

function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard title="Total Users" value="1,245" />
      <StatCard title="Active Tickets" value="45" />
      <StatCard title="Patches Uploaded" value="320" />
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-2xl font-bold mt-2">{value}</p>
      </CardContent>
    </Card>
  );
}

function TicketManagement() {
  const [tickets, setTickets] = useState([
    { id: 1, issue: "Patch not downloading", status: "Open" },
    { id: 2, issue: "Login issues", status: "In Progress" },
    { id: 3, issue: "Incorrect patch version", status: "Resolved" },
  ]);

  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-4">Ticket Management</h2>
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="flex justify-between items-center">
              <span>{ticket.issue}</span>
              <span className={`text-sm ${ticket.status === "Open" ? "text-red-500" : ticket.status === "In Progress" ? "text-yellow-500" : "text-green-500"}`}>
                {ticket.status}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function PatchUpload() {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-4">Upload New Patch</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Patch Name" className="w-full p-2 border rounded-lg" />
          <input type="file" className="w-full p-2 border rounded-lg" />
          <Button className="rounded-2xl">Upload Patch</Button>
        </form>
      </CardContent>
    </Card>
  );
}
