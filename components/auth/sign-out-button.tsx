"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { signOutFromClient } from "@/lib/data/spotlight";
import { Button } from "@/components/ui/button";

export function SignOutButton() {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    const result = await signOutFromClient();
    if (result === "ok") {
      router.refresh();
    }
    setIsSigningOut(false);
  };

  return (
    <Button type="button" size="sm" variant="ghost" onClick={handleSignOut} disabled={isSigningOut}>
      {isSigningOut ? "Signing out..." : "Sign out"}
    </Button>
  );
}
