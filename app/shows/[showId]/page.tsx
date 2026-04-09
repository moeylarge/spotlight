import ShowLobbyClient from "./show-lobby-client";

interface ShowLobbyPageProps {
  params: Promise<{ showId: string }>;
}

export default async function ShowLobbyPage({ params }: ShowLobbyPageProps) {
  const { showId } = await params;
  return <ShowLobbyClient showId={showId} />;
}
