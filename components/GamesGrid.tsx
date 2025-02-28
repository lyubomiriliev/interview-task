"use client";

import { Typography } from "@mui/material";
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
  GoldText,
  Provider,
} from "./styles/StyledTypography";
import {
  StyledDiv,
  StyledGridContainer,
  StyledGridItem,
  StyledWrapper,
} from "./styles/StyledGrid";
import { StyledButton } from "./styles/StyledButton";
import { useTranslations } from "next-intl";

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

const GAMES_PER_PAGE = 8;

const GamesGrid: React.FC<Props> = ({ games }) => {
  const t = useTranslations("HomePage");

  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  //   FIXING THE HYDRATION WARNING FROM VIDEOS
  useEffect(() => {
    setMounted(true);
  }, []);

  const slotGames = games.filter(
    (game) => game.category.toLowerCase() === "slots"
  );

  const totalPages = Math.ceil(slotGames.length / GAMES_PER_PAGE);
  const firstPage = (currentPage - 1) * GAMES_PER_PAGE;
  const lastPage = firstPage + GAMES_PER_PAGE;
  const currentGames = slotGames.slice(firstPage, lastPage);

  return (
    <StyledWrapper>
      <Image
        width={300}
        height={120}
        alt="PalmsBetLogo"
        src={"../palmsbet-logo.svg"}
      />
      <StyledGridContainer container spacing={3}>
        {currentGames.map((game) => {
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
                    {t("provider")} {game.provider}
                  </Provider>
                  <FlexCardContent>
                    <BetInfo variant="body2">
                      {t("minBet")} {game.betMin}
                    </BetInfo>
                    <BetInfo variant="body2">
                      {t("maxBet")} {game.betMax}
                    </BetInfo>
                  </FlexCardContent>
                </StyledCardContent>
              </StyledCard>
            </StyledGridItem>
          );
        })}
      </StyledGridContainer>
      <StyledDiv>
        <StyledButton
          variant="contained"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === totalPages}
        >
          Previous
        </StyledButton>
        <GoldText>
          Page {currentPage} of {totalPages}
        </GoldText>
        <StyledButton
          variant="contained"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </StyledButton>
      </StyledDiv>
    </StyledWrapper>
  );
};

export default GamesGrid;
