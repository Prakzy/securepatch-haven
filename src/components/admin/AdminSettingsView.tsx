
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function AdminSettingsView() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>System Configuration</CardTitle>
          <CardDescription>Manage system-wide settings and configurations</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Add admin settings functionality here */}
          <div className="text-sm text-muted-foreground">
            Admin settings interface will be implemented here
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
