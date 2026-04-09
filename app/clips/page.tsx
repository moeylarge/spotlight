import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const placeholderClips = [
  {
    title: "Mic Drop in 48 Seconds",
    show: "Main Event",
    engagement: "12.4k live votes",
  },
  {
    title: "Judge Save Reversal",
    show: "Rookie Night",
    engagement: "8.1k live votes",
  },
  {
    title: "Wildcard Entry Win",
    show: "Main Event",
    engagement: "15.7k live votes",
  },
];

export default function ClipsPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Top Moments</p>
        <h1 className="mt-3 text-5xl leading-none">Clip Feed Foundation</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Clips are an output of live competition turns. This route reserves the product surface for highlight replay.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {placeholderClips.map((clip) => (
          <Card key={clip.title}>
            <CardHeader>
              <CardTitle className="text-2xl">{clip.title}</CardTitle>
              <CardDescription>{clip.show}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{clip.engagement}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
