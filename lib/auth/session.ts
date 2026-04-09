import { redirect } from "next/navigation";

import { getCurrentSessionIdentity } from "@/lib/data/spotlight";

export async function requireAuthenticatedUser(redirectTo: string = "/auth/signin") {
  const identity = await getCurrentSessionIdentity();

  if (!identity.user) {
    redirect(redirectTo);
  }

  return identity;
}
