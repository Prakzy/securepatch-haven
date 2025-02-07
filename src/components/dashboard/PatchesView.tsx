
import { Download, Filter, FileCheck } from "lucide-react";
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

const mockPatches = [
  {
    id: 1,
    name: "Windows Security Update KB5034441",
    type: "Microsoft",
    severity: "Critical",
    releaseDate: "2024-02-07",
    status: "Available",
  },
  {
    id: 2,
    name: "Adobe Reader Security Update",
    type: "Third-party",
    severity: "High",
    releaseDate: "2024-02-06",
    status: "Available",
  },
];

export function PatchesView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-primary">Available Patches</h1>
          <p className="text-muted-foreground mt-1">
            View and manage your system patches
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Download Selected
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Download className="h-5 w-5 text-accent" />
              Available Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{mockPatches.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-success" />
              Installed Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">24</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Download className="h-5 w-5 text-destructive" />
              Critical Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">2</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Available Patches</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <input type="checkbox" />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Release Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPatches.map((patch) => (
                <TableRow key={patch.id}>
                  <TableCell>
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell className="font-medium">{patch.name}</TableCell>
                  <TableCell>{patch.type}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        patch.severity === "Critical"
                          ? "bg-destructive/10 text-destructive"
                          : "bg-warning/10 text-warning"
                      }`}
                    >
                      {patch.severity}
                    </span>
                  </TableCell>
                  <TableCell>{patch.releaseDate}</TableCell>
                  <TableCell>{patch.status}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
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
