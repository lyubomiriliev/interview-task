import { GetStaticProps } from "next";
import Image from "next/image";

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

interface Props {
  games: Game[];
}

const GamesGrid: React.FC<Props> = ({ games }) => {
  return (
    <div>
      <h1>Games Grid</h1>
      <ul>
        {games.slice(0, 10).map((game) => (
          <li key={game.id}>
            <p>{game.name}</p>
            <p>{game.provider}</p>
            <p>{game.index}</p>
            <p>{game.category}</p>
            <Image
              width={600}
              height={600}
              alt={game.name}
              src={`https://cdn.palmsbet.com${game.imageModern.modern}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamesGrid;
