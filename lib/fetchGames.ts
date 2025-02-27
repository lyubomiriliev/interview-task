interface Game {
  image: string;
  id: number;
  category: string;
  categories: string[];
  game_type_code: string;
  name: string;
  provider: string;
  index: number;
  order: { csn: number; trn: number; rlt: number; prm: number; nw: number };
  isMobileGame: boolean;
  isDesktopGame: boolean;
  lines: number;
  mainCategory: string;
  betMin: string;
  betMax: string;
  imageModern: { modern: string; fallback: string };
}

export const fetchGames = async () => {
  const res = await fetch("https://cdn.palmsbet.com/static/games.json", {
    cache: "force-cache",
  });
  const data = await res.json();

  return data
    .filter((game: Game) => game.index)
    .sort((a: Game, b: Game) => a.index - b.index);
};
