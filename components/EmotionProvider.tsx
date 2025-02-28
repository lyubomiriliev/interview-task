"use client";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ReactNode } from "react";

const cache = createCache({ key: "mui", prepend: true });

const EmotionProvider = ({ children }: { children: ReactNode }) => {
  return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export default EmotionProvider;
