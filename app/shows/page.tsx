import Link from "next/link";
import { ArrowRight, CircleAlert, Clock3, Gauge, Play, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { arenaCards, competitionBandLabel } from "@/lib/competitive-intel";

type Show = (typeof arenaCards)[number];

function ArenaShell({ show }: { show: Show }) {
  const isLive = show.state === "Live now";
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.35rem] border transition-all duration-200 ${
        isLive
          ? "border-primary/40 bg-[linear-gradient(125deg,_hsla(14,100%,58%,0.16)_0%,_hsla(224,24%,9%,0.9)_58%,_hsla(225,30%,8%,0.9)_100%)]"
          : "border-white/14 bg-gradient-to-br from-black/60 to-black/35"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          isLive
            ? "bg-[radial-gradient(circle_at_100%_0%,_hsla(14,100%,60%,0.32),_transparent_55%)] group-hover:opacity-85"
            : "bg-[radial-gradient(circle_at_100%_0%,_hsla(192,100%,52%,0.22),_transparent_56%)] group-hover:opacity-85"
        }`}
      />
      <div className="relative flex flex-col gap-5 p-6 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <CircleAlert className="h-3.5 w-3.5 text-accent" />
            {show.startAt}
          </p>
          <p
            className={`text-xs uppercase tracking-[0.18em] ${isLive ? "text-primary" : "text-muted-foreground"}`}
          >
            {show.state}
          </p>
        </div>

        <div className="grid gap-2 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-4xl leading-tight">{show.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{show.host}</p>
          </div>
          <p className="text-2xl font-semibold text-foreground md:text-right">{show.audience}</p>
        </div>

        <p className="max-w-2xl text-sm text-muted-foreground">{show.flavor}</p>

        <p className="inline-flex max-w-fit items-center gap-2 rounded-full border border-white/18 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/70">
          <span className="text-accent">{competitionBandLabel(show.requiredTier)}</span>
          · Entry gate
        </p>

        <div className="grid gap-3 border-t border-white/12 pt-4 sm:grid-cols-3">
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
            <span className="mr-2 inline-flex text-foreground">
              <Clock3 className="mr-2 inline h-3.5 w-3.5" />
            </span>
            {show.queueOpen}
          </p>
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
            <span className="mr-2 inline-flex text-foreground">
              <Users className="mr-2 inline h-3.5 w-3.5" />
            </span>
            {show.entrants}
          </p>
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
            <span className="mr-2 inline-flex text-foreground">
              <Gauge className="mr-2 inline h-3.5 w-3.5" />
            </span>
            {show.seatsLeft}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild size="lg" className="w-full sm:w-auto" variant="cta">
            <Link href={`/shows/${show.id}`}>
              Enter arena
              <Play className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <p className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/45 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        pressure {show.pressure}
      </p>
    </article>
  );
}

export default function ShowsPage() {
  return (
    <section className="space-y-10">
      <div className="surface-panel-strong grid gap-5 p-7 md:p-10">
        <p className="section-title">Arena Selection</p>
        <h1 className="max-w-4xl text-6xl leading-[0.96] md:text-7xl">Choose your arena tonight.</h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          Pick where competition is highest and your entry band clears the barrier.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Button asChild variant="cta" size="lg">
            <Link href="/shows/main-event">
              Watch the current arena
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {arenaCards.map((show) => (
          <ArenaShell key={show.id} show={show} />
        ))}
      </div>

      <section className="surface-panel-strong p-6">
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Selection note</p>
        <h2 className="mt-2 text-3xl">You enter through rank pressure, not a menu.</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Arenas are intentionally constrained. Watch and vote where the crowd is hottest, or queue for the next spot as soon as a lane clears.
        </p>
      </section>
    </section>
  );
}
