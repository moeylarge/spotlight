import Link from "next/link";
import { Flame, PlayCircle, UserCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SessionStatus } from "@/components/auth/session-status";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.12] bg-black/60 backdrop-blur-xl">
      <div className="spotlight-shell mx-auto flex h-16 items-center justify-between gap-4 px-5 md:px-8">
        <Link
          href="/"
          className={cn(
            "group inline-flex items-center gap-2 font-semibold tracking-[0.16em] text-sm uppercase text-foreground transition-colors hover:text-foreground/90",
          )}
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] transition-colors group-hover:bg-white/[0.14]">
            <Flame className="h-3.5 w-3.5 text-primary" />
          </span>
          <span className="tracking-[0.22em]">Spotlight</span>
        </Link>
        <p className="hidden items-center gap-2 text-[11px] tracking-[0.16em] text-muted-foreground md:inline-flex">
          <PlayCircle className="h-3.5 w-3.5 text-accent" />
          LIVE SHOWROOM
        </p>
        <div className="flex items-center gap-2">
          <SessionStatus />
          <Button asChild size="sm" variant="ghost" className="h-9 px-3 font-medium tracking-[0.08em]">
            <Link href="/profile" className="tracking-[0.08em]">
              <UserCircle2 className="h-3.5 w-3.5" />
              Profile
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="font-medium tracking-[0.08em] uppercase">
            <Link href="/shows" className="tracking-[0.08em]">
              Watch Live
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
