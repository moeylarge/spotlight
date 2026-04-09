import Link from "next/link";

import { SignInForm } from "./signin-form";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <section className="space-y-4 rounded-2xl border border-white/12 bg-black/35 p-6 md:p-8">
      <p className="section-title">Session</p>
      <h1 className="text-4xl leading-tight text-foreground md:text-6xl">Sign in to your account</h1>
      <p className="text-sm text-muted-foreground md:text-base">
        Authenticate once for protected write actions on your shows and clips.
      </p>
      <SignInForm />
      <Button asChild size="sm" variant="outline" className="w-full">
        <Link href="/">Enter as visitor</Link>
      </Button>
    </section>
  );
}
