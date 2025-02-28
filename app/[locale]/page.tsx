import GamesGrid from "@/components/GamesGrid";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { fetchGames } from "@/lib/fetchGames";

export default async function Home() {
  const games = await fetchGames();

  return (
    <main>
      <LanguageSwitcher />
      <GamesGrid games={games} />
    </main>
  );
}
