
import { Bell, Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockNotifications = [
  {
    id: 1,
    title: "New Critical Update Available",
    message: "Windows Security Update KB5034441 is ready for download",
    type: "critical",
    timestamp: "2024-02-07 14:30",
    read: false,
  },
  {
    id: 2,
    title: "Ticket Status Updated",
    message: "Your ticket T-1001 has been assigned to a technician",
    type: "info",
    timestamp: "2024-02-07 13:15",
    read: true,
  },
];

export function NotificationsView() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-primary">Notifications</h1>
          <p className="text-muted-foreground mt-1">
            Stay updated with system alerts and activities
          </p>
        </div>
        <Button variant="outline">
          <Check className="h-4 w-4 mr-2" />
          Mark All as Read
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="h-5 w-5 text-accent" />
              All Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">24</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="h-5 w-5 text-destructive" />
              Critical
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="h-5 w-5 text-warning" />
              Warnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">8</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="h-5 w-5 text-success" />
              Info
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">13</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Time</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockNotifications.map((notification) => (
                <TableRow key={notification.id}>
                  <TableCell className="font-medium">
                    {notification.title}
                  </TableCell>
                  <TableCell>{notification.message}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        notification.type === "critical"
                          ? "bg-destructive/10 text-destructive"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {notification.type}
                    </span>
                  </TableCell>
                  <TableCell>{notification.timestamp}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline">
                      <X className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
