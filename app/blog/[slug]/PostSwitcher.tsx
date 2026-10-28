"use client";

import type { ReactNode } from "react";
import { useLocale } from "@/lib/i18n";

export default function PostSwitcher({
  en,
  fr,
}: {
  en: ReactNode;
  fr: ReactNode;
}) {
  const { locale } = useLocale();
  return locale === "fr" ? fr : en;
}
