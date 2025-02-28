import "@testing-library/jest-dom";

const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  pathname: "/",
};

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => mockRouter),
  usePathname: jest.fn(() => mockRouter.pathname),
  useParams: jest.fn(() => ({})),
}));

jest.mock("next-intl/navigation", () => {
  const mockIntlRouter = {
    ...mockRouter,
    locale: "en",
  };

  return {
    useRouter: jest.fn(() => mockIntlRouter),
    usePathname: jest.fn(() => mockIntlRouter.pathname),
    useLocale: jest.fn(() => mockIntlRouter.locale),
    createNavigation: jest.fn(() => ({
      useRouter: jest.fn(() => mockIntlRouter),
      usePathname: jest.fn(() => mockIntlRouter.pathname),
      useLocale: jest.fn(() => mockIntlRouter.locale),
      getPathname: jest.fn(() => mockIntlRouter.pathname),
    })),
  };
});
