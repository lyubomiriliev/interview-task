"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FlexCardContent,
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
} from "./styles/StyledCard";
import {
  BetInfo,
  GameIndex,
  GameTitle,
  Provider,
} from "./styles/StyledTypography";
import { StyledGridContainer, StyledGridItem } from "./styles/StyledGrid";

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
  const [mounted, setMounted] = useState(false);

  //   FIXING THE HYDRATION WARNING FROM VIDEOS
  useEffect(() => {
    setMounted(true);
  }, []);

  const slotGames = games.filter(
    (game) => game.category.toLowerCase() === "slots"
  );

  return (
    <div>
      <StyledGridContainer container spacing={3}>
        {slotGames.slice(0, 12).map((game) => {
          const imageUrl = game.imageModern?.modern;
          const fileExtension = imageUrl?.split(".").pop()?.toLowerCase();

          return (
            <StyledGridItem key={game.id}>
              <StyledCard>
                {fileExtension === "webp" ||
                fileExtension === "jpg" ||
                fileExtension === "png" ? (
                  <StyledCardMedia>
                    <Image
                      width={250}
                      height={150}
                      alt={game.name}
                      src={`https://cdn.palmsbet.com${game.imageModern.modern}`}
                    />
                  </StyledCardMedia>
                ) : fileExtension === "webm" && mounted ? (
                  <video
                    width="100%"
                    height="150"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source
                      src={`https://cdn.palmsbet.com${game.imageModern.modern}`}
                      type="video/webm"
                    />
                  </video>
                ) : (
                  <Typography variant="body2">No Image Available</Typography>
                )}

                <StyledCardContent>
                  <GameTitle variant="h6">{game.name}</GameTitle>
                  <GameIndex variant="h6">{game.index}</GameIndex>
                  <Provider variant="body2" color="textSecondary">
                    {game.provider}
                  </Provider>
                  <FlexCardContent>
                    <BetInfo variant="body2">Min Bet: {game.betMin}</BetInfo>
                    <BetInfo variant="body2">Max Bet: {game.betMax}</BetInfo>
                  </FlexCardContent>
                </StyledCardContent>
              </StyledCard>
            </StyledGridItem>
          );
        })}
      </StyledGridContainer>
    </div>
  );
};

export default GamesGrid;
