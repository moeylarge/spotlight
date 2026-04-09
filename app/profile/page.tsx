import Link from "next/link";
import { Award, Flame, Trophy, Users } from "lucide-react";

import { AppearanceHistory } from "@/components/showcase/appearance-history";
import { ProofClipRail } from "@/components/showcase/proof-clip-rail";
import { Button } from "@/components/ui/button";
import {
  competitionBandLabel,
  competitionBands,
  formatRecord,
  profileAppearances,
  profileClips,
  profileShell,
} from "@/lib/competitive-intel";

const rankLabel = competitionBandLabel(profileShell.standing.tier);
const rankMeta = competitionBands.find((band) => band.id === profileShell.standing.tier);
const profileRecord = formatRecord(profileShell.standing.wins, profileShell.standing.losses);
const profileLatestClip = profileClips[0];
const profileLatestAppearance = profileAppearances[0];
const profileProofSignal = `${profileLatestClip.outcome} · ${profileLatestClip.heat} heat`;
const profileLaneEffect = `${profileLatestClip.show} · ${profileLatestAppearance.result} lane carry`;

export default function ProfilePage() {
  return (
    <section className="spotlight-flow">
      <div className="surface-panel-strong relative overflow-hidden p-7 md:p-9">
        <div className="pointer-events-none absolute inset-y-0 right-[-14%] w-2/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,132,70,0.18),transparent_62%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,_rgba(0,0,0,0.5),rgba(0,0,0,0.82))]" />
        <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:items-end">
          <div className="grid h-20 w-20 place-items-center rounded-full border border-white/20 bg-black/45 text-2xl font-black tracking-[0.12em]">
            {profileShell.displayName.slice(0, 2).toUpperCase()}
          </div>
          <div className="space-y-3">
            <p className="section-title">Profile shell</p>
            <h1 className="text-4xl leading-tight text-foreground md:text-6xl">{profileShell.displayName}</h1>
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">@{profileShell.handle}</p>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">{profileShell.bio}</p>
            <p className="text-xs uppercase tracking-[0.14em] text-accent">{profileShell.category}</p>
          </div>
        </div>

        <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
          <p className="chip">
            <Trophy className="h-3.5 w-3.5" />
            <span>{rankLabel}</span>
          </p>
          <p className="chip">
            <Flame className="h-3.5 w-3.5" />
            <span>
              {profileRecord} · streak +{profileShell.standing.streak}
            </span>
          </p>
          <p className="chip">
            <Award className="h-3.5 w-3.5" />
            <span>{rankMeta?.proof}</span>
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_1.25fr]">
        <article className="space-y-4 rounded-2xl border border-white/14 bg-black/30 p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold">Rank ladder</h2>
            <p className="text-xs uppercase tracking-[0.16em] text-white/60">Competition proof</p>
          </div>
          <div className="space-y-2">
            {competitionBands.map((rank) => (
              <div
                key={rank.id}
                className={`flex items-center justify-between rounded-lg border px-3 py-2 text-sm ${
                  rank.id === profileShell.standing.tier
                    ? "border-accent/45 bg-accent/10"
                    : "border-white/12 bg-black/22"
                }`}
              >
                <p className="uppercase tracking-[0.12em] text-white/80">{rank.label}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-white/55">{rank.gate}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="space-y-4 rounded-2xl border border-white/14 bg-black/30 p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold">Live status</h2>
            <p className="text-xs uppercase tracking-[0.16em] text-white/60">Current identity</p>
          </div>
          <div className="grid gap-3 text-sm text-white/75">
            <p>
              <span className="text-white">Trend:</span> {profileShell.standing.trend}
            </p>
            <p>
              <span className="text-white">Momentum:</span> {profileShell.standing.score} · Lane score
            </p>
            <p>
              <span className="text-white">Gate:</span> {profileShell.rankHeadline}
            </p>
            <p>
              <span className="text-white">Proof carry:</span> {profileProofSignal} · {profileLaneEffect}
            </p>
          </div>
        </article>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-white/14 bg-black/30 p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold">Recent clips</h2>
            <p className="text-xs uppercase tracking-[0.16em] text-white/60">Proof reel</p>
          </div>
          <ProofClipRail clips={profileClips} includeAction={false} />
        </article>

        <article className="rounded-2xl border border-white/14 bg-black/30 p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold">Recent show appearances</h2>
            <p className="text-xs uppercase tracking-[0.16em] text-white/60">Arena history</p>
          </div>
          <AppearanceHistory appearances={profileAppearances} />
        </article>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/12 bg-black/35 px-5 py-4">
        <p className="text-sm uppercase tracking-[0.14em] text-white/60">Status and rank stay lightweight and event-first.</p>
        <Button asChild variant="cta" size="sm">
          <Link href="/shows/main-event" className="inline-flex items-center gap-2">
            <Users className="h-3.5 w-3.5" />
            Enter the arena
          </Link>
        </Button>
      </footer>
    </section>
  );
}
