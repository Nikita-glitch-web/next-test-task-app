"use client";

import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/useToast";

export default function SettingsPage() {
  const [name, setName] = useState("User Random");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSave = () => {
    if (!name.trim()) {
      toast.error("Validation Error", "Name cannot be empty");
      return;
    }

    const savePromise = new Promise((resolve) => {
      setTimeout(() => resolve({ name }), 1500);
    });

    toast.promise(savePromise, {
      loading: "Saving settings...",
      success: "Settings saved successfully!",
      error: "Failed to save settings",
    });
  };

  const handleLogout = () => {
    toast.warning("Logging out", "You will be redirected to login page");
    setTimeout(() => {
      console.log("Logging out...");
    }, 1000);
  };

  return (
    <div className="w-full min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold">Settings</h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
          {/* Left Side - Settings Form */}
          <div className="flex-1">
            <div className="space-y-4 sm:space-y-6 bg-card p-4 sm:p-6 rounded-lg shadow-sm border border-border">
              {/* Name Field */}
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-medium mb-2 block"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="User Random"
                  className="w-full"
                />
              </div>

              {/* Password Field */}
              <div>
                <Label
                  htmlFor="password"
                  className="text-sm font-medium mb-2 block"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Your password is between 4 and 12 characters
                </p>
              </div>

              {/* Save Button */}
              <Button
                onClick={handleSave}
                className="w-full bg-[#4CAF50] hover:bg-green-600 text-white"
              >
                Save
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Card */}
          <Card className="w-full md:w-80 shadow-sm border-border">
            <CardContent className="pt-6 text-center">
              <h3 className="text-sm font-medium mb-2">My Profile</h3>
              <button className="text-xs text-[#4CAF50] hover:underline mb-4">
                You completed your profile
              </button>

              <Avatar className="h-20 w-20 sm:h-24 sm:w-24 mx-auto mb-4">
                <AvatarFallback className="bg-muted text-xl sm:text-2xl">
                  <span className="text-muted-foreground">UR</span>
                </AvatarFallback>
              </Avatar>

              <h4 className="font-medium">User R.</h4>
              <p className="text-sm text-muted-foreground mb-6">
                Developer in White Digital
              </p>

              <Button
                onClick={handleLogout}
                variant="destructive"
                className="w-full bg-[#EF5350] hover:bg-red-600"
              >
                Logout
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
