import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Timer,
} from "lucide-react";

import { ProofClipRail } from "@/components/showcase/proof-clip-rail";
import { Button } from "@/components/ui/button";
import {
  competitionBandLabel,
  formatRecord,
  leaderboardStandings,
  performanceClips,
} from "@/lib/competitive-intel";

const liveNow = [
  {
    id: "luna",
    performer: "Luna V.",
    show: "Main Event",
    category: "Performance",
    turn: "00:42",
    judges: "2",
    audience: "8.7k",
    lane: "A",
    hostCue: "Pressing edge on delivery",
    score: "94",
    liveNow: true,
  },
  {
    id: "milo",
    performer: "Milo D.",
    show: "Rookie Night",
    category: "Improv",
    turn: "01:03",
    judges: "3",
    audience: "3.1k",
    lane: "B",
    hostCue: "Queue pressure, opening soon",
    score: "88",
    liveNow: false,
  },
  {
    id: "kiara",
    performer: "Kiara M.",
    show: "Main Event",
    category: "Voice",
    turn: "00:29",
    judges: "2",
    audience: "5.4k",
    lane: "C",
    hostCue: "Round reset in 30s",
    score: "91",
    liveNow: true,
  },
  {
    id: "enzo",
    performer: "Enzo K.",
    show: "Late Switch",
    category: "Debate",
    turn: "00:58",
    judges: "2",
    audience: "2.7k",
    lane: "D",
    hostCue: "Queue near full",
    score: "82",
    liveNow: false,
  },
] as const;

const categories = [
  { label: "Comedy", stat: "19 live contenders", tone: "Fast heat windows" },
  { label: "Music", stat: "11 live contenders", tone: "Precision under pressure" },
  { label: "Debate", stat: "6 live contenders", tone: "Audience-first scoring" },
  { label: "Talent", stat: "14 live contenders", tone: "Sharp judging moments" },
  { label: "Freestyle", stat: "9 live contenders", tone: "High variance, high stakes" },
] as const;

const schedule = [
  { time: "8:00 PM", title: "Main Event", viewers: "10k", state: "Queue open" },
  { time: "9:30 PM", title: "Rookie Night", viewers: "4.5k", state: "Open soon" },
  { time: "11:00 PM", title: "Late Switch", viewers: "2.3k", state: "Spots available" },
] as const;

const featuredShow = liveNow[0];
const queueDeck = liveNow.slice(1, 3);

export default function HomePage() {
  return (
    <div className="spotlight-flow">
      <section className="hero-surface relative overflow-hidden rounded-[2rem] bg-black/45 p-7 md:p-12">
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/60" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-6">
            <p className="section-title">Shark Tank for creators</p>
            <h1 className="max-w-4xl text-5xl leading-[0.94] md:text-6xl">
              Your live pitch room.
              <br />
              Fast, public, defensible.
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              Put your apps, websites, and products in front of real audiences, with proof deciding what moves next.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto" variant="cta">
                <Link href="/shows">
                  Enter the live arena
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link
                href="/shows"
                className="inline-flex items-center text-sm uppercase tracking-[0.16em] text-foreground/85 transition hover:text-white"
              >
                Pitch your next build
              </Link>
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              <p className="stat-ticker">
                <span>Live floor</span>
                <span>Main stage rotates fast</span>
              </p>
              <p className="stat-ticker">
                <span>Queue pulse</span>
                <span>12 on deck · 3 queued</span>
              </p>
              <p className="stat-ticker">
                <span>Proof on deck</span>
                <span>90s proof clips, instant outcome</span>
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] bg-black/40 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Arena live deck</p>
            <div className="mt-4 grid gap-4">
              <div className="flex items-center justify-between rounded-[1.1rem] border border-primary/30 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-primary">Spotlight pitch</p>
                  <p className="mt-1 text-3xl font-semibold text-foreground">{featuredShow.performer}</p>
                  <p className="text-sm text-muted-foreground">{featuredShow.show}</p>
                </div>
                <p className="live-pulse text-xs uppercase tracking-[0.14em] text-primary">LIVE</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-black/30 p-3">
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Contestant context</p>
                  <p className="mt-2 text-base font-semibold text-foreground">Lane {featuredShow.lane} • momentum</p>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Audience heat</p>
                  <p className="mt-2 text-base font-semibold text-foreground">{featuredShow.audience} live</p>
                </div>
              </div>
              <p className="rounded-xl bg-black/45 p-3 text-sm text-muted-foreground">
                Pitch {featuredShow.turn} • {featuredShow.hostCue}
              </p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="h-1.5 rounded-full bg-white/10">
                <div className="h-full w-[70%] rounded-full bg-primary" />
              </div>
              <div className="h-1.5 rounded-full bg-white/10">
                <div className="h-full w-[62%] rounded-full bg-accent" />
              </div>
              <div className="h-1.5 rounded-full bg-white/10">
                <div className="h-full w-[54%] rounded-full bg-white/85" />
              </div>
            </div>
          </div>
        </div>

        <div className="cinematic-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="section-title">Creator Arena</p>
            <h2 className="section-heading mt-1">Strongest signals, biggest stage advantage</h2>
          </div>
          <Link href="/shows" className="text-xs uppercase tracking-[0.16em] text-foreground/80 transition hover:text-white">
            Open full board
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.45fr_0.9fr]">
          <article className="relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(130deg,_hsla(14,100%,62%,0.16)_0%,_hsla(226,24%,10%,0.9)_45%,_hsla(224,26%,7%,0.95)_100%)] p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Stage lead</p>
            <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-primary">LIVE ON STAGE</p>
                <h3 className="mt-2 text-4xl text-foreground md:text-5xl">{featuredShow.performer}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {featuredShow.show} · {featuredShow.category} · Score {featuredShow.score}
                </p>
              </div>
              <p className="live-pulse text-sm text-primary">Live room</p>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{featuredShow.hostCue}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-black/35 p-3">
                <p className="text-xs uppercase tracking-[0.13em] text-muted-foreground">Judge read</p>
                <p className="mt-1 text-lg font-semibold text-foreground">{featuredShow.judges} judges</p>
              </div>
              <div className="rounded-xl bg-black/35 p-3">
                <p className="text-xs uppercase tracking-[0.13em] text-muted-foreground">Audience read</p>
                <p className="mt-1 text-lg font-semibold text-foreground">{featuredShow.audience}</p>
              </div>
              <div className="rounded-xl bg-black/35 p-3">
                <p className="text-xs uppercase tracking-[0.13em] text-muted-foreground">Pitch clock</p>
                <p className="mt-1 text-lg font-semibold text-foreground">{featuredShow.turn}</p>
              </div>
            </div>
          </article>

          <div className="grid gap-3">
            {queueDeck.map((contestant) => (
              <div
                key={contestant.id}
                className="grid gap-1 rounded-xl bg-black/32 px-4 py-3 transition"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Lane {contestant.lane}</p>
                <p className="mt-1 text-xl font-semibold text-foreground">{contestant.performer}</p>
                <p className="text-sm text-muted-foreground">{contestant.show} • {contestant.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="section-title">Proof deck</p>
            <h2 className="section-heading mt-1">Clips that changed outcomes</h2>
          </div>
        </div>
        <ProofClipRail clips={performanceClips} maxClips={3} />
        <div className="flex justify-end">
          <Link href="/clips" className="text-xs uppercase tracking-[0.16em] text-muted-foreground transition hover:text-white">
            Open proof vault
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <p className="section-title">Creator lanes</p>
        <h2 className="section-heading mt-1">Categories in rotation</h2>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {categories.slice(0, 4).map((category, index) => (
            <article
              key={category.label}
              className={`rounded-2xl border border-white/8 bg-black/25 px-4 py-4 transition-colors hover:bg-black/40 ${
                index % 2 === 0 ? "border-primary/35 bg-black/30" : "border-white/10 bg-black/22"
              }`}
            >
              <h3 className="mt-2 text-2xl">{category.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{category.stat}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="surface-panel-strong p-6">
          <p className="section-title">Tonight&apos;s live queue</p>
          <h2 className="section-heading mt-1 text-4xl md:text-5xl">What&apos;s next on stage</h2>
          <div className="mt-5 space-y-2">
            {schedule.map((entry) => (
              <div
                key={entry.title}
                className="grid gap-1.5 rounded-lg bg-black/32 p-3 sm:grid-cols-[0.8fr_1.5fr_1fr]"
              >
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4 text-accent" />
                  {entry.time}
                </p>
                <p className="font-semibold text-foreground">{entry.title}</p>
                <p className="text-sm text-accent">{entry.state}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-panel border-white/18 p-6">
          <p className="section-title">Creator status ladder</p>
          <h2 className="section-heading mt-1 text-4xl md:text-4xl">Ranking by real traction</h2>
          <div className="mt-5 space-y-3">
            {leaderboardStandings.map((entry) => (
              <div key={entry.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg bg-black/25 p-2 text-sm">
                <div>
                  <p className="font-medium text-foreground">
                    {entry.rank}. {entry.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-accent">{competitionBandLabel(entry.tier)}</span> · {formatRecord(entry.wins, entry.losses)} · {entry.statusLine}
                  </p>
                </div>
                <p className="font-semibold text-foreground">
                  {entry.score}
                  <span className="ml-2 text-xs text-muted-foreground">
                    {entry.streak >= 0 ? `+${entry.streak}` : `${entry.streak}`} streak
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-white/15 bg-[linear-gradient(150deg,_hsla(14,100%,64%,0.24)_0%,_hsla(226,40%,10%,0.84)_52%,_hsla(224,22%,8%,0.92)_100%)] p-8 md:p-10">
        <div className="grid items-start gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="section-title">Ready to pitch live?</p>
            <h2 className="section-heading mt-1 text-3xl md:text-5xl">
              Publish your profile.
              <br />
              Claim a live slot.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
              Proof over promise. Put your work in front of judges, users, and peers now.
            </p>
          </div>
          <div className="grid min-w-fit gap-3 sm:grid-cols-2 md:min-w-[22rem]">
            <Button asChild size="lg" variant="cta">
              <Link href="/shows">
                Claim slot
                <Timer className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Link href="/shows/main-event" className="inline-flex items-center justify-center rounded-lg border border-white/18 px-4 py-2 text-xs uppercase tracking-[0.16em] text-muted-foreground transition hover:border-white/35 hover:text-white">
              Watch main room
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
