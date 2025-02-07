
import { Activity, Clock, User, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockActivities = [
  {
    id: 1,
    action: "Downloaded patch KB5034441",
    user: "John Doe",
    timestamp: "2024-02-07 14:30",
    type: "download",
  },
  {
    id: 2,
    action: "Created support ticket T-1001",
    user: "Jane Smith",
    timestamp: "2024-02-07 13:15",
    type: "ticket",
  },
];

export function ActivityView() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-primary">Activity Log</h1>
        <p className="text-muted-foreground mt-1">
          Track system and user activities
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="h-5 w-5 text-accent" />
              Total Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">156</p>
            <p className="text-sm text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Download className="h-5 w-5 text-success" />
              Downloads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">89</p>
            <p className="text-sm text-muted-foreground">Patches downloaded</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="h-5 w-5 text-warning" />
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">Currently online</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              Average Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">18m</p>
            <p className="text-sm text-muted-foreground">Per session</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockActivities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell>{activity.action}</TableCell>
                  <TableCell>{activity.user}</TableCell>
                  <TableCell>{activity.timestamp}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activity.type === "download"
                          ? "bg-success/10 text-success"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {activity.type}
                    </span>
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
