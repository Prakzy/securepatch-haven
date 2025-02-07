
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SubscriptionsView() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Subscription Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Subscriptions Overview</CardTitle>
          <CardDescription>Manage user subscriptions and billing</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Add subscription management functionality here */}
          <div className="text-sm text-muted-foreground">
            Subscription management interface will be implemented here
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
