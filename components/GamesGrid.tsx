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
import { useTranslations } from "next-intl";
import { StyledButton } from "./styles/StyledButton";
import VideoClient from "./VideoClient";
import LanguageSwitcher from "./LanguageSwitcher";

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
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  //   FIXING THE HYDRATION WARNING FROM VIDEOS
  useEffect(() => {
    setMounted(true);
  }, []);

  const t = useTranslations("HomePage");

  if (!mounted) {
    return null;
  }

  const slotGames = games.filter(
    (game) => game.category.toLowerCase() === "slots"
  );

  const totalPages = Math.ceil(slotGames.length / GAMES_PER_PAGE);
  const firstPage = (currentPage - 1) * GAMES_PER_PAGE;
  const lastPage = firstPage + GAMES_PER_PAGE;
  const currentGames = slotGames.slice(firstPage, lastPage);

  return (
    <StyledWrapper>
      <LanguageSwitcher />
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
                      priority
                      alt={game.name}
                      src={`https://cdn.palmsbet.com${game.imageModern.modern}`}
                    />
                  </StyledCardMedia>
                ) : fileExtension === "webm" ? (
                  <VideoClient
                    src={`https://cdn.palmsbet.com${game.imageModern.modern}`}
                  />
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
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </StyledButton>
        <GoldText>
          Page {currentPage} of {totalPages}
        </GoldText>
        <StyledButton
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
