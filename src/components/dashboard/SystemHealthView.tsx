
import { Shield, Server, Activity, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Mock data for demonstration
const systemMetrics = {
  systemHealth: 85,
  patchSuccess: 92,
  vulnerabilities: 3,
  criticalUpdates: 2,
};

export function SystemHealthView() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-primary">System Health</h1>
        <p className="text-muted-foreground mt-1">
          Monitor your system's health and security status
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              Overall Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <span className="text-sm font-medium">{systemMetrics.systemHealth}%</span>
              </div>
              <Progress value={systemMetrics.systemHealth} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Server className="h-5 w-5 text-success" />
              Patch Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Rate</span>
                <span className="text-sm font-medium">{systemMetrics.patchSuccess}%</span>
              </div>
              <Progress value={systemMetrics.patchSuccess} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="h-5 w-5 text-warning" />
              Vulnerabilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{systemMetrics.vulnerabilities}</p>
            <p className="text-sm text-muted-foreground">Active vulnerabilities</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Critical Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{systemMetrics.criticalUpdates}</p>
            <p className="text-sm text-muted-foreground">Pending updates</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>System Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">CPU Usage</span>
                  <span className="text-sm text-muted-foreground">45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Memory Usage</span>
                  <span className="text-sm text-muted-foreground">60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Disk Space</span>
                  <span className="text-sm text-muted-foreground">25%</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Firewall Status</span>
                  <span className="text-sm text-success">Active</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Antivirus Status</span>
                  <span className="text-sm text-success">Protected</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Last Scan</span>
                  <span className="text-sm text-muted-foreground">2 hours ago</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
