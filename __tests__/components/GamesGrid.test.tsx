import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import GamesGrid from "@/components/GamesGrid";

const mockGames = [
  {
    image: "/gameX.webp",
    id: 1,
    category: "slots",
    categories: ["slots"],
    game_type_code: "slots",
    name: "Game X",
    provider: "Provider X",
    index: 1,
    order: {
      csn: 331,
      trn: 13,
      rlt: 2,
      prm: 5,
      nw: 2,
    },
    isMobileGame: false,
    isDesktopGame: true,
    lines: 50,
    mainCategory: "allSlots",
    betMin: "10",
    betMax: "100",
    imageModern: { modern: "/gameX.webp", fallback: "/gameX.png" },
  },
  {
    image: "/gameY.webp",
    id: 2,
    category: "slots",
    categories: ["slots"],
    game_type_code: "slots",
    name: "Game Y",
    provider: "Provider X",
    index: 1,
    order: {
      csn: 513,
      trn: 25,
      rlt: 6,
      prm: 1,
      nw: 7,
    },
    isMobileGame: true,
    isDesktopGame: false,
    lines: 30,
    mainCategory: "allSlots",
    betMin: "20",
    betMax: "200",
    imageModern: { modern: "/gameY.webp", fallback: "/gameY.png" },
  },
];

const messages = {
  HomePage: {
    provider: "Provider",
    minBet: "Min Bet",
    maxBet: "Max Bet",
  },
};

const renderWithIntl = (ui: React.ReactElement) => {
  return render(
    <NextIntlClientProvider messages={messages} locale="en">
      {ui}
    </NextIntlClientProvider>
  );
};

describe("GamesGrid", () => {
  it("Should render games correctly", () => {
    renderWithIntl(<GamesGrid games={mockGames} />);

    expect(screen.getByText("Game X")).toBeInTheDocument();
  });

  it("displays the game name", () => {
    renderWithIntl(<GamesGrid games={mockGames} />);
    expect(screen.getByText(/Game X/)).toBeInTheDocument();
  });
});
