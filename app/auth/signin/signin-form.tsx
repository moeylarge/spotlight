"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const supabase = createBrowserSupabaseClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setIsSubmitting(false);
      return;
    }

    router.push("/");
    router.refresh();
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <label className="text-xs uppercase tracking-[0.14em] text-muted-foreground" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-10 rounded-md border border-white/20 bg-black/25 px-3 text-sm text-foreground"
          placeholder="you@spotlight.com"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-xs uppercase tracking-[0.14em] text-muted-foreground" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="h-10 rounded-md border border-white/20 bg-black/25 px-3 text-sm text-foreground"
          placeholder="Your password"
        />
      </div>

      {error ? <p className="text-sm text-rose-300">{error}</p> : null}

      <Button type="submit" size="sm" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>

      <p className="text-xs uppercase tracking-[0.14em] text-white/55">
        Existing users only (Supabase auth). Add your own sign-up flow in next pass.
      </p>
      <p className="text-xs uppercase tracking-[0.14em] text-white/55">
        <Link href="/" className="text-white underline-offset-4 hover:underline">
          Back to home
        </Link>
      </p>
    </form>
  );
}
