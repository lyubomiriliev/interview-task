"use client";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { Button } from "@mui/material";
import { useLocale } from "next-intl";
import React from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLocale = () => {
    const newLocale = currentLocale === "en" ? "bg" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Button onClick={switchLocale}>
      {currentLocale === "en" ? "Български" : "English"}
    </Button>
  );
};

export default LanguageSwitcher;
