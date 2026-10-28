"use client";

import { useEffect, useState } from "react";
import { useLocale, type Locale } from "@/lib/i18n";

const FORTUNES: Record<Locale, string[]> = {
  en: [
    "There are 10 types of people: those who understand binary, and those who don't.",
    "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
    "It works on my machine.",
    "99 little bugs in the code, 99 little bugs. Take one down, patch it around, 127 little bugs in the code.",
    "In Rust we trust (the borrow checker, eventually).",
    "There is no cloud, just someone else's computer.",
  ],
  fr: [
    "Il y a 10 types de personnes : ceux qui comprennent le binaire, et les autres.",
    "Ça marche sur ma machine.",
    "99 petits bugs dans le code, 99 petits bugs. On en corrige un, ça en recolle deux, 127 petits bugs dans le code.",
    "Le cloud n'existe pas, c'est juste l'ordinateur de quelqu'un d'autre.",
    "Rust : le compilateur a toujours raison, même quand ça fait mal.",
    "Un SELECT sans WHERE, et c'est toute la prod qui tombe.",
  ],
};

function cowsay(text: string): string {
  const maxWidth = 40;
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if ((current + " " + word).trim().length > maxWidth) {
      lines.push(current.trim());
      current = word;
    } else {
      current = (current + " " + word).trim();
    }
  }
  if (current) lines.push(current);

  const width = Math.max(...lines.map((l) => l.length));
  const top = " " + "_".repeat(width + 2);
  const bottom = " " + "-".repeat(width + 2);
  const body = lines
    .map((line, i) => {
      const padded = line.padEnd(width, " ");
      const left =
        lines.length === 1 ? "<" : i === 0 ? "/" : i === lines.length - 1 ? "\\" : "|";
      const right =
        lines.length === 1 ? ">" : i === 0 ? "\\" : i === lines.length - 1 ? "/" : "|";
      return `${left} ${padded} ${right}`;
    })
    .join("\n");

  return `${top}
${body}
${bottom}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;
}

export default function CowFortune() {
  const { locale } = useLocale();
  const [fortune, setFortune] = useState<string | null>(null);

  useEffect(() => {
    const list = FORTUNES[locale];
    // Random pick must happen client-side post-mount to avoid an SSR/client mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFortune(list[Math.floor(Math.random() * list.length)]);
  }, [locale]);

  if (!fortune) return null;

  return (
    <pre className="text-xs leading-tight text-neutral-500 dark:text-neutral-400">
      {cowsay(fortune)}
    </pre>
  );
}
