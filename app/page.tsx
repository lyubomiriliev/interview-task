import GamesGrid from "@/components/GamesGrid";
import { fetchGames } from "@/lib/fetchGames";

export default async function Home() {
  const games = await fetchGames();

  return (
    <main>
      <h1>Casino Games List</h1>
      <GamesGrid games={games} />
    </main>
  );
}
