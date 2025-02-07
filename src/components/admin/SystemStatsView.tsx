
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SystemStatsView() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">System Statistics</h1>
      <Card>
        <CardHeader>
          <CardTitle>System Overview</CardTitle>
          <CardDescription>Key metrics and system performance</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Add system statistics here */}
          <div className="text-sm text-muted-foreground">
            System statistics and metrics will be displayed here
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
