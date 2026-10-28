"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import CowFortune from "./CowFortune";

const PROJECTS = [
  {
    name: "db9s",
    description: "Database TUI, Rust",
    url: "https://github.com/damien-mathieu1/db9s",
  },
  {
    name: "monkeyread",
    description: "RSVP speed reader, same look & feel as monkeytype",
    url: "https://github.com/damien-mathieu1/monkeyread",
  },
  {
    name: "finExtract",
    description:
      "Pulls financial statements from SEC/EDINET filings, normalizes XBRL into clean CSV/Excel",
    url: "https://github.com/damien-mathieu1/finExtract",
  },
];

export default function Home() {
  const { locale, t } = useLocale();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 space-y-16">
      <section className="flex items-start gap-6">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">Damien Mathieu</h1>
          {locale === "fr" ? (
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Développeur full-stack basé à Montpellier. Je travaille chez{" "}
              <a
                href="https://anaba.fr"
                className="underline hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                anaba
              </a>
              , je construis des side projects et je contribue à l&apos;open
              source en Rust et TypeScript.
            </p>
          ) : (
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Full-stack developer based in Montpellier, France. Working at{" "}
              <a
                href="https://anaba.fr"
                className="underline hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                anaba
              </a>
              , building side projects and contributing to open source in
              Rust and TypeScript.
            </p>
          )}
        </div>
        <div className="shrink-0 w-28 text-center">
          <Image
            src="/gabano.jpg"
            alt="Gabano"
            width={112}
            height={112}
            className="rounded-full object-cover mx-auto"
          />
          <p className="text-sm font-medium mt-2">Gabano</p>
          <p className="text-xs text-neutral-500">DevOps Engineer</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">{t("home.openSource")}</h2>
        <ul className="space-y-3">
          {PROJECTS.map((p) => (
            <li key={p.name}>
              <a
                href={p.url}
                className="font-medium underline hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                {p.name}
              </a>
              <span className="text-neutral-600 dark:text-neutral-400">
                {" "}
                — {p.description}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">{t("home.contact")}</h2>
        <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
          <li>
            <a
              href="https://www.linkedin.com/in/damien-mathieu-a70348241/"
              className="underline hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:damien.mathieu.pro@gmail.com"
              className="underline hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              damien.mathieu.pro@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/damien-mathieu1"
              className="underline hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>

      <section>
        <CowFortune />
      </section>
    </div>
  );
}
