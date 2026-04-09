export type ShowStatus = "upcoming" | "live" | "ended" | "cancelled";
export type QueueEntryStatus = "queued" | "called" | "on_stage" | "completed" | "disqualified";
export type RoundStatus = "waiting" | "live" | "ended";
export type VoteChoice = "keep" | "swap";
export type ResultOutcome = "spotlight_held" | "spotlight_passed";
export type RankingTier = "bronze" | "silver" | "gold" | "elite";

export type DbUser = {
  id: string;
  auth_user_id: string;
  handle: string;
  display_name: string | null;
  created_at: string;
  updated_at: string;
};

export type Profile = {
  id: string;
  user_id: string;
  category: string | null;
  bio: string | null;
  avatar_url: string | null;
  wins: number;
  losses: number;
  streak: number;
  created_at: string;
  updated_at: string;
};

export type Show = {
  id: string;
  slug: string;
  title: string;
  host_id: string | null;
  category: string | null;
  state: ShowStatus;
  starts_at: string | null;
  ends_at: string | null;
  turn_seconds: number;
  max_queue_size: number;
  audience_cap: number;
  created_at: string;
  updated_at: string;
};

export type ShowParticipant = {
  id: string;
  show_id: string;
  user_id: string;
  lane: string;
  role: string | null;
  status: "pending" | "active" | "complete" | "dropped";
  score: number;
  joined_at: string;
  updated_at: string;
};

export type QueueEntry = {
  id: string;
  show_id: string;
  participant_id: string;
  position: number;
  status: QueueEntryStatus;
  created_at: string;
  updated_at: string;
};

export type Round = {
  id: string;
  show_id: string;
  participant_id: string;
  state: RoundStatus;
  started_at: string | null;
  ended_at: string | null;
  duration_seconds: number;
  created_at: string;
  updated_at: string;
};

export type Vote = {
  id: string;
  round_id: string;
  user_id: string;
  choice: VoteChoice;
  created_at: string;
};

export type Result = {
  id: string;
  round_id: string;
  winner_participant_id: string | null;
  outcome: ResultOutcome;
  headline: string | null;
  detail: string | null;
  winner_votes: number;
  loser_votes: number;
  margin: number;
  posted_at: string;
};

export type Clip = {
  id: string;
  show_id: string | null;
  round_id: string | null;
  participant_id: string | null;
  title: string;
  media_url: string | null;
  outcome: string | null;
  heat: number | null;
  proof_text: string | null;
  duration_seconds: number | null;
  published_at: string | null;
  created_at: string;
};

export type Ranking = {
  id: string;
  user_id: string;
  season: string;
  tier: RankingTier;
  score: number;
  rank: number | null;
  wins: number;
  losses: number;
  streak: number;
  updated_at: string;
};
