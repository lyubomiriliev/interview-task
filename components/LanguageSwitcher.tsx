"use client";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { useLocale } from "next-intl";
import React from "react";
import {
  LanguageSwitcherContainer,
  StyledLanguageButton,
} from "./styles/StyledLanguage";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLocale = () => {
    const newLocale = currentLocale === "en" ? "bg" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <LanguageSwitcherContainer>
      <StyledLanguageButton onClick={switchLocale}>
        {currentLocale === "en" ? "Български" : "English"}
      </StyledLanguageButton>
    </LanguageSwitcherContainer>
  );
};

export default LanguageSwitcher;
