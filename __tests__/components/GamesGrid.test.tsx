import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
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
  {
    image: "/gameZ.webp",
    id: 3,
    category: "poker",
    categories: ["poker"],
    game_type_code: "poker",
    name: "Game Z",
    provider: "Provider Z",
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
    imageModern: { modern: "/gameZ.webp", fallback: "/gameZ.png" },
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
  it("should render slot games only", () => {
    renderWithIntl(<GamesGrid games={mockGames} />);

    expect(screen.getByText("Game X")).toBeInTheDocument();
    expect(screen.getByText("Game Y")).toBeInTheDocument();

    expect(screen.queryByText("Game Z")).not.toBeInTheDocument();
  });

  it("should render providers correctly", () => {
    renderWithIntl(<GamesGrid games={mockGames} />);
    expect(screen.getAllByText(/Provider X/i).length).toBeGreaterThan(0);
  });

  it("should handle pagination correctly", async () => {
    const paginatedGames = Array.from({ length: 10 }, (_, i) => ({
      image: `/game${i + 1}.webp`,
      id: i + 1,
      category: "slots",
      categories: ["slots"],
      game_type_code: "slots",
      name: `Game ${i + 1}`,
      provider: `Provider ${i + 1}`,
      index: i + 1,
      order: {
        csn: i + 200,
        trn: i + 10,
        rlt: i + 2,
        prm: i + 5,
        nw: i + 1,
      },
      isMobileGame: false,
      isDesktopGame: true,
      lines: i + 20,
      mainCategory: "allSlots",
      betMin: `${i + 1} * 10`,
      betMax: `${i + 1} * 100`,
      imageModern: {
        modern: `/game${i + 1}.webp`,
        fallback: `/game${i + 1}.png`,
      },
    }));

    renderWithIntl(<GamesGrid games={paginatedGames} />);

    await waitFor(() => {
      expect(screen.getByText("Game 1")).toBeInTheDocument();
      expect(screen.getByText("Game 8")).toBeInTheDocument();
    });
    expect(screen.queryByText("Game 9")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Next"));

    await waitFor(() => {
      expect(screen.getByText("Game 9")).toBeInTheDocument();
      expect(screen.getByText("Game 10")).toBeInTheDocument();
    });
    expect(screen.queryByText("Game 1")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Previous"));

    await waitFor(() => {
      expect(screen.getByText("Game 1")).toBeInTheDocument();
      expect(screen.getByText("Game 8")).toBeInTheDocument();
    });
    expect(screen.queryByText("Game 9")).not.toBeInTheDocument();
  });
});
