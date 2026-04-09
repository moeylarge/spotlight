import Link from "next/link";

import { getCurrentSessionIdentity } from "@/lib/data/spotlight";
import { SignOutButton } from "@/components/auth/sign-out-button";

export async function SessionStatus() {
  const { user, profile } = await getCurrentSessionIdentity();

  if (!user) {
    return (
      <Link
        href="/auth/signin"
        className="rounded-md border border-white/18 bg-white/[0.06] px-3 py-2 text-xs uppercase tracking-[0.13em] text-muted-foreground transition-colors hover:border-white/30 hover:text-foreground"
      >
        Sign in
      </Link>
    );
  }

  const displayName = user.display_name?.trim() || user.handle;

  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-white/16 bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.13em] text-muted-foreground">
      <span className="text-foreground">{displayName}</span>
      <SignOutButton />
    </div>
  );
}
