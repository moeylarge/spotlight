import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface HostConsolePageProps {
  params: Promise<{ showId: string }>;
}

const hostPanels = [
  {
    title: "Stage Control",
    description: "Pull next contestant, hard-cut camera, and enforce countdown.",
  },
  {
    title: "Queue Board",
    description: "Review contestant readiness and reorder without breaking the show.",
  },
  {
    title: "Vote Pulse",
    description: "Track live audience vote velocity during each 60-second turn.",
  },
  {
    title: "Clip Markers",
    description: "Mark top moments for instant post-turn clip generation.",
  },
];

export default async function HostConsolePage({ params }: HostConsolePageProps) {
  const { showId } = await params;

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Host Console Shell</p>
        <h1 className="mt-3 text-5xl leading-none">Control Room: {showId.replace(/-/g, " ")}</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Host-first architecture foundation. Live controls and moderation logic will be layered in next iterations.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {hostPanels.map((panel) => (
          <Card key={panel.title}>
            <CardHeader>
              <CardTitle className="text-2xl">{panel.title}</CardTitle>
              <CardDescription>{panel.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Non-negotiables encoded in this foundation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>1. Audience scale and stage scarcity are separate surfaces.</p>
          <p>2. Host controls state transitions, not contestants.</p>
          <p>3. 60-second turn timing is explicit in route-level UX.</p>
          <p>4. Voting and clip moments are first-class planned panels.</p>
        </CardContent>
      </Card>
    </section>
  );
}
