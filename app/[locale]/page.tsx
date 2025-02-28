import GamesGrid from "@/components/GamesGrid";
import { fetchGames } from "@/lib/fetchGames";

export default async function Home() {
  const games = await fetchGames();

  return (
    <main>
      <GamesGrid games={games} />
    </main>
  );
}

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "bg" }];
}
