"use client";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { useLocale } from "next-intl";
import React, { useEffect, useState } from "react";
import {
  LanguageSwitcherContainer,
  StyledLanguageButton,
} from "./styles/StyledLanguage";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const storedLocale = localStorage.getItem("selectedLanguage");

    if (storedLocale && storedLocale !== currentLocale) {
      router.replace(pathname, { locale: storedLocale });
    }
  }, []);

  if (!mounted) return null;

  const switchLocale = (newLocale: string) => {
    localStorage.setItem("selectedLanguage", newLocale);

    router.replace(pathname, { locale: newLocale });
  };

  return (
    <LanguageSwitcherContainer>
      <StyledLanguageButton
        variant="contained"
        onClick={() => switchLocale("en")}
        disabled={currentLocale === "en"}
      >
        English
      </StyledLanguageButton>
      <StyledLanguageButton
        variant="contained"
        onClick={() => switchLocale("bg")}
        disabled={currentLocale === "bg"}
      >
        Bulgarian
      </StyledLanguageButton>
    </LanguageSwitcherContainer>
  );
};

export default LanguageSwitcher;
