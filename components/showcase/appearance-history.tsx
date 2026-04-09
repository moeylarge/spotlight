"use client";

import { Mic, Mic2, Timer } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { ArenaAppearanceRecord } from "@/lib/competitive-intel";

type AppearanceHistoryProps = {
  appearances: ArenaAppearanceRecord[];
};

function statusTone(result: ArenaAppearanceRecord["result"]) {
  switch (result) {
    case "Win":
      return "text-primary";
    case "Runner-up":
      return "text-accent";
    default:
      return "text-white/75";
  }
}

export function AppearanceHistory({ appearances }: AppearanceHistoryProps) {
  const [selectedAppearanceId, setSelectedAppearanceId] = useState(appearances[0]?.id);

  const selectedAppearance = useMemo(
    () =>
      appearances.find((appearance) => appearance.id === selectedAppearanceId) ??
      appearances[0],
    [appearances, selectedAppearanceId],
  );

  if (!selectedAppearance) {
    return null;
  }

  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        {appearances.map((appearance) => (
          <button
            key={appearance.id}
            type="button"
            onClick={() => setSelectedAppearanceId(appearance.id)}
            className={`w-full rounded-xl border px-3 py-2.5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-black/35 ${
              appearance.id === selectedAppearance.id
                ? "border-accent/45 bg-accent/12"
                : "border-white/12 bg-black/25 hover:border-white/25 hover:bg-black/30"
            }`}
          >
            <div className="flex items-center justify-between gap-2 text-sm">
              <span className="flex items-center gap-2">
                <Mic className="h-3.5 w-3.5 text-white/60" />
                <span>
                  <span className="line-clamp-1 uppercase tracking-[0.12em] text-white">{appearance.title}</span>
                  <span className="line-clamp-1 text-xs text-white/55">
                    {appearance.when} · Lane {appearance.lane}
                  </span>
                </span>
              </span>
              <span className={`text-xs font-medium uppercase tracking-[0.16em] ${statusTone(appearance.result)}`}>
                {appearance.result}
              </span>
            </div>
          </button>
        ))}
      </div>

      <article className="min-h-[11rem] rounded-[1.05rem] border border-white/14 bg-black/30 p-4">
        <div className="grid gap-2 text-sm">
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Arena proof context</p>
          <p className="line-clamp-1 font-semibold text-foreground">{selectedAppearance.title}</p>
          <p className="text-xs uppercase tracking-[0.16em] text-white/65">
            {selectedAppearance.when} · {selectedAppearance.lane}
          </p>
          <p className="line-clamp-2 text-white/80">{selectedAppearance.outcome}</p>
          <div className="flex items-center justify-between gap-3 pt-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Timer className="h-3.5 w-3.5" />
              {selectedAppearance.result} · {selectedAppearance.scoreDelta}
            </span>
            <Button asChild size="sm" variant="outline" className="h-7 px-3">
              <Link href="/shows/main-event">
                <Mic2 className="mr-1 h-3.5 w-3.5" />
                Jump to arena
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
