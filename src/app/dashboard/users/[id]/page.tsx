"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const user = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  role: "Admin",
  status: "Active",
  lastActive: "2024-03-10",
  createdAt: "2024-01-01",
  phone: "+1 234 567 890",
  department: "Engineering",
  location: "New York, USA",
};

export default function UserDetailsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/users">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">User Details</h2>
          <p className="text-muted-foreground">
            View and manage user information.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Basic information about the user.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <div className="text-sm font-medium">Name</div>
              <div className="text-sm text-muted-foreground">{user.name}</div>
            </div>
            <div className="grid gap-2">
              <div className="text-sm font-medium">Email</div>
              <div className="text-sm text-muted-foreground">{user.email}</div>
            </div>
            <div className="grid gap-2">
              <div className="text-sm font-medium">Phone</div>
              <div className="text-sm text-muted-foreground">{user.phone}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Account settings and permissions.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <div className="text-sm font-medium">Role</div>
              <div className="text-sm text-muted-foreground">{user.role}</div>
            </div>
            <div className="grid gap-2">
              <div className="text-sm font-medium">Status</div>
              <div className="text-sm text-muted-foreground">{user.status}</div>
            </div>
            <div className="grid gap-2">
              <div className="text-sm font-medium">Department</div>
              <div className="text-sm text-muted-foreground">
                {user.department}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity</CardTitle>
            <CardDescription>
              User activity and account information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <div className="text-sm font-medium">Last Active</div>
              <div className="text-sm text-muted-foreground">
                {user.lastActive}
              </div>
            </div>
            <div className="grid gap-2">
              <div className="text-sm font-medium">Account Created</div>
              <div className="text-sm text-muted-foreground">
                {user.createdAt}
              </div>
            </div>
            <div className="grid gap-2">
              <div className="text-sm font-medium">Location</div>
              <div className="text-sm text-muted-foreground">
                {user.location}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
            <CardDescription>Manage user account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button asChild>
                <Link href={`/dashboard/users/${user.id}/edit`}>Edit User</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/dashboard/users">Back to Users</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
