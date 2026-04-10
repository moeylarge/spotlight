"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle, Waves } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import type { PerformanceClip } from "@/lib/competitive-intel";

type ProofClipRailProps = {
  clips: PerformanceClip[];
  includeAction?: boolean;
  actionLabel?: string;
  actionHref?: string;
  maxClips?: number;
};

function outcomeCopy(outcome: PerformanceClip["outcome"]) {
  switch (outcome) {
    case "Winner":
      return "Momentum unlock";
    case "Audience save":
      return "Crowd recovery";
    case "Turnaround":
      return "Pressure reversal";
    case "Top 3":
      return "Stage resilience";
    default:
      return "Intensity hold";
  }
}

export function ProofClipRail({
  clips,
  includeAction = true,
  actionLabel = "Open in arena context",
  actionHref = "/shows/main-event",
  maxClips = 6,
}: ProofClipRailProps) {
  const visibleClips = useMemo(() => clips.slice(0, maxClips), [clips, maxClips]);
  const [selectedClipId, setSelectedClipId] = useState(visibleClips[0]?.id);

  const selectedClip = useMemo(
    () => visibleClips.find((clip) => clip.id === selectedClipId) ?? visibleClips[0],
    [visibleClips, selectedClipId],
  );

  if (!selectedClip) {
    return null;
  }

  return (
    <div className="space-y-3">
      <div className="rail">
        {visibleClips.map((clip) => (
          <button
            key={clip.id}
            type="button"
            onClick={() => setSelectedClipId(clip.id)}
            aria-current={clip.id === selectedClip.id}
            className={`rail-item reveal min-w-[16rem] rounded-[1.1rem] border text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-black/35 ${
              clip.id === selectedClip.id
                ? "border-accent/55 bg-accent/12 shadow-[0_0_22px_rgba(255,132,70,0.2)]"
                : "border-white/12 bg-black/50 hover:border-white/22"
            }`}
          >
            <div className="overflow-hidden rounded-[1.1rem]">
              <div className="relative h-32 bg-gradient-to-br from-black/75 via-black/45 to-black/30 p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/12" />
                <PlayCircle className="absolute right-3 top-3 h-5 w-5 text-white/85" />
                <div className="relative z-10 flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-md bg-black/55 px-2 py-1 text-[11px] text-white">{clip.runtime}</span>
                </div>
                <div className="relative absolute inset-x-4 bottom-4 z-10">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/75">{clip.show}</p>
                  <h3 className="mt-2 line-clamp-2 min-h-[2.75rem] text-lg leading-tight font-medium text-white">
                    {clip.title}
                  </h3>
                </div>
              </div>
              <div className="space-y-1.5 border-t border-border/55 px-4 pb-3 pt-2.5">
                <p className="line-clamp-2 text-sm font-medium text-foreground">{clip.proof}</p>
                <p className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{clip.heat} Heat</span>
                  <span className="inline-flex items-center gap-1">
                    <Waves className="h-3.5 w-3.5 text-accent" />
                    <span className="whitespace-nowrap">{outcomeCopy(clip.outcome)}</span>
                  </span>
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <article className="min-h-[11.25rem] rounded-[1.1rem] bg-black/34 p-4">
        <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Proof now</p>
        <h3 className="mt-2 text-lg font-semibold leading-tight text-foreground line-clamp-1 min-h-[2.25rem]">
          {selectedClip.title}
        </h3>
        <p className="text-xs uppercase tracking-[0.16em] text-accent">
          {selectedClip.show} · {selectedClip.runtime} · {outcomeCopy(selectedClip.outcome)}
        </p>
        <p className="mt-2 text-sm text-white/80 line-clamp-2">{selectedClip.proof}</p>
        {includeAction && (
          <Button asChild size="sm" className="mt-3 w-full sm:w-auto" variant="default">
            <Link href={actionHref}>
              {actionLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </article>
    </div>
  );
}
