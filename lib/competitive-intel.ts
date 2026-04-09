export type CompetitiveTier = "Elite" | "Gold" | "Silver" | "Bronze" | "Open";

export type RankingSignal = "Momentum" | "Holding" | "Surging" | "Live edge";

export type ContestantStanding = {
  id: string;
  name: string;
  handle: string;
  score: number;
  wins: number;
  losses: number;
  streak: number;
  tier: CompetitiveTier;
  trend: RankingSignal;
};

export type HomeLeaderboardEntry = ContestantStanding & {
  rank: number;
  statusLine: string;
};

export type CompetitionBand = {
  id: CompetitiveTier;
  label: string;
  proof: string;
  gate: string;
};

export type ShowArenaCard = {
  id: string;
  title: string;
  host: string;
  startAt: string;
  state: "Live now" | "Opening soon";
  queueOpen: string;
  audience: string;
  pressure: "Rising" | "Cooling" | "At limit";
  entrants: string;
  seatsLeft: string;
  flavor: string;
  requiredTier: CompetitiveTier;
};

export type PerformanceClip = {
  id: string;
  title: string;
  show: string;
  proof: string;
  heat: string;
  runtime: string;
  outcome: "Winner" | "Hold" | "Turnaround" | "Audience save" | "Top 3";
  category: string;
};

export type ArenaAppearanceRecord = {
  id: string;
  title: string;
  result: "Win" | "Runner-up" | "Queued";
  outcome: string;
  when: string;
  lane: string;
  scoreDelta: string;
};

export type ProfileShell = {
  handle: string;
  displayName: string;
  bio: string;
  category: string;
  standing: ContestantStanding;
  rankHeadline: string;
};

export const competitionBands: CompetitionBand[] = [
  { id: "Elite", label: "Arena Elite", proof: "Top 5% this season", gate: "Above 95%" },
  { id: "Gold", label: "Arena Gold I", proof: "Ready for prime slots", gate: "Above 88%" },
  { id: "Silver", label: "Arena Silver II", proof: "Stable pressure profile", gate: "Above 72%" },
  { id: "Bronze", label: "Arena Bronze", proof: "Building momentum", gate: "Above 55%" },
  { id: "Open", label: "Open queue", proof: "Public entry queue", gate: "Entry path" },
];

export const leaderboardStandings: HomeLeaderboardEntry[] = [
  {
    id: "performer-01",
    name: "Rae Kim",
    handle: "rae-k",
    score: 98,
    wins: 15,
    losses: 3,
    streak: 4,
    tier: "Elite",
    trend: "Momentum",
    rank: 1,
    statusLine: "Dominant",
  },
  {
    id: "performer-02",
    name: "Noah R.",
    handle: "noah-r",
    score: 95,
    wins: 12,
    losses: 5,
    streak: 3,
    tier: "Gold",
    trend: "Surging",
    rank: 2,
    statusLine: "Pressing",
  },
  {
    id: "performer-03",
    name: "Mina O.",
    handle: "mina-o",
    score: 90,
    wins: 11,
    losses: 7,
    streak: 2,
    tier: "Gold",
    trend: "Holding",
    rank: 3,
    statusLine: "Staying sharp",
  },
  {
    id: "performer-04",
    name: "Jules B.",
    handle: "jules-b",
    score: 86,
    wins: 9,
    losses: 8,
    streak: 1,
    tier: "Silver",
    trend: "Live edge",
    rank: 4,
    statusLine: "Ready",
  },
];

export const performanceClips: PerformanceClip[] = [
  {
    id: "clip-01",
    title: "Double-take punchline",
    show: "Main Event",
    proof: "Audience lock-in after 8 seconds",
    heat: "12.4k",
    runtime: "01:00",
    outcome: "Winner",
    category: "Performance",
  },
  {
    id: "clip-02",
    title: "Judge reversal on improvised pivot",
    show: "Rookie Night",
    proof: "Crowd momentum flipped from hold to surge in 9s",
    heat: "9.9k",
    runtime: "00:58",
    outcome: "Audience save",
    category: "Improv",
  },
  {
    id: "clip-03",
    title: "One-minute entrance with no drops",
    show: "Main Event",
    proof: "Fastest hold signal with zero mistakes",
    heat: "14.1k",
    runtime: "00:45",
    outcome: "Hold",
    category: "Voice",
  },
  {
    id: "clip-04",
    title: "Host cuts noise, pivot lands",
    show: "Main Event",
    proof: "Stage rhythm recovered in under 12 seconds",
    heat: "7.7k",
    runtime: "00:52",
    outcome: "Turnaround",
    category: "Live format",
  },
];

export const profileClips: PerformanceClip[] = [
  {
    id: "profile-clip-01",
    title: "Midnight pivot saves the first 20s",
    show: "Main Event",
    proof: "Hold lane under pressure from a mixed room.",
    heat: "9.8k",
    runtime: "01:00",
    outcome: "Winner",
    category: "Performance",
  },
  {
    id: "profile-clip-02",
    title: "Rapid improv beat with no drop",
    show: "Late Switch",
    proof: "Recovered from weak start and reclaimed judges energy.",
    heat: "6.4k",
    runtime: "00:58",
    outcome: "Hold",
    category: "Improv",
  },
  {
    id: "profile-clip-03",
    title: "Crowd surge in round 2",
    show: "Main Event",
    proof: "Built pressure line across 3 judges and audience spikes.",
    heat: "8.2k",
    runtime: "00:56",
    outcome: "Top 3",
    category: "Voice",
  },
] as const satisfies PerformanceClip[];

export const profileAppearances: ArenaAppearanceRecord[] = [
  {
    id: "appearance-01",
    title: "Main Event",
    result: "Queued",
    outcome: "Promoted to live slot on rotation",
    when: "Tonight",
    lane: "A1",
    scoreDelta: "+4.2",
  },
  {
    id: "appearance-02",
    title: "Rookie Night Qualifier",
    result: "Runner-up",
    outcome: "Held pressure through two rounds",
    when: "Friday",
    lane: "B2",
    scoreDelta: "+0.9",
  },
  {
    id: "appearance-03",
    title: "Vibe Arena",
    result: "Win",
    outcome: "Advanced to open lane queue",
    when: "Tue",
    lane: "C4",
    scoreDelta: "+3.6",
  },
] as const;

export const arenaCards: ShowArenaCard[] = [
  {
    id: "main-event",
    title: "Main Event",
    host: "Host: Mira K.",
    startAt: "Tonight • 8:00 PM PT",
    state: "Live now",
    queueOpen: "Queue open in 14m",
    audience: "7.5k waiting",
    pressure: "Rising",
    entrants: "4 in queue",
    seatsLeft: "3 of 6 turns live",
    flavor: "Performance + sharp judging. 60-second rounds.",
    requiredTier: "Silver",
  },
  {
    id: "rookie-night",
    title: "Rookie Night Qualifier",
    host: "Host: Dane L.",
    startAt: "Friday • 7:30 PM PT",
    state: "Opening soon",
    queueOpen: "Applications open",
    audience: "3.2k expected",
    pressure: "At limit",
    entrants: "2 waiting",
    seatsLeft: "Spots filling fast",
    flavor: "Improv lane. First 3 get a shot.",
    requiredTier: "Bronze",
  },
];

export const profileShell: ProfileShell = {
  handle: "spotlight-vybe",
  displayName: "Nova Pulse",
  bio: "Arena-first performer building precision under pressure in 60-second rounds.",
  category: "Performance / Voice",
  standing: {
    id: "nova-pulse",
    name: "Nova Pulse",
    handle: "nova-pulse",
    score: 248,
    wins: 18,
    losses: 9,
    streak: 4,
    tier: "Silver",
    trend: "Momentum",
  },
  rankHeadline: "Arena Silver II",
};

export const showContestants: ContestantStanding[] = [
  {
    id: "c-01",
    name: "LUNA V.",
    handle: "luna-v",
    score: 248,
    wins: 14,
    losses: 4,
    streak: 3,
    tier: "Silver",
    trend: "Momentum",
  },
  {
    id: "c-02",
    name: "Milo D.",
    handle: "milo-d",
    score: 212,
    wins: 11,
    losses: 7,
    streak: 2,
    tier: "Gold",
    trend: "Surging",
  },
  {
    id: "c-03",
    name: "Kiara M.",
    handle: "kiara-m",
    score: 188,
    wins: 9,
    losses: 8,
    streak: 1,
    tier: "Bronze",
    trend: "Live edge",
  },
  {
    id: "c-04",
    name: "Noah R.",
    handle: "noah-r",
    score: 181,
    wins: 8,
    losses: 9,
    streak: -1,
    tier: "Bronze",
    trend: "Holding",
  },
];

export function tierFromScore(score: number): CompetitionBand["id"] {
  if (score >= 230) return "Elite";
  if (score >= 215) return "Gold";
  if (score >= 185) return "Silver";
  if (score >= 160) return "Bronze";
  return "Open";
}

export function formatRecord(wins: number, losses: number) {
  return `${wins}-${losses}`;
}

export function competitionBandLabel(tier: CompetitiveTier) {
  return competitionBands.find((entry) => entry.id === tier)?.label ?? "Open queue";
}
