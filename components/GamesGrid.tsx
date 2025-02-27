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
        {games.slice(0, 10).map((game) => {
          const imageUrl = game.imageModern?.modern;
          const fileExtension = imageUrl?.split(".").pop()?.toLowerCase();

          return (
            <li key={game.id}>
              <p>{game.name}</p>
              <p>{game.provider}</p>
              <p>{game.index}</p>
              <p>{game.category}</p>

              {fileExtension === "webp" ||
              fileExtension === "jpg" ||
              fileExtension === "png" ? (
                <Image
                  width={600}
                  height={600}
                  alt={game.name}
                  src={`https://cdn.palmsbet.com${game.imageModern.modern}`}
                />
              ) : fileExtension === "webm" ? (
                <video width={600} height={600} autoPlay loop muted playsInline>
                  <source
                    src={`https://cdn.palmsbet.com${game.imageModern.modern}`}
                    type="video/webm"
                  />
                </video>
              ) : (
                <p>No Image Available</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GamesGrid;
