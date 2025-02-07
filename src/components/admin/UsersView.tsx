
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function UsersView() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">User Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>Manage user accounts and permissions</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Add user management functionality here */}
          <div className="text-sm text-muted-foreground">
            User management interface will be implemented here
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
