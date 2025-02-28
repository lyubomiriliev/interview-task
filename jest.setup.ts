import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    pathname: "/",
  })),
  usePathname: jest.fn(() => "/"),
  useSearchParams: jest.fn(() => ({
    get: jest.fn(),
  })),
  useParams: jest.fn(() => ({})),
}));

// Mock next-intl navigation functions
jest.mock("next-intl/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    pathname: "/",
  })),
  usePathname: jest.fn(() => "/"),
  useLocale: jest.fn(() => "en"),
  createNavigation: jest.fn(() => ({
    useRouter: jest.fn(() => ({
      push: jest.fn(),
      replace: jest.fn(),
      pathname: "/",
    })),
    usePathname: jest.fn(() => "/"),
    useLocale: jest.fn(() => "en"),
    getPathname: jest.fn(() => "/"),
  })),
}));
