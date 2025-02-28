import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  // matcher: ["/", "/(bg|en)/:path*"],
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
