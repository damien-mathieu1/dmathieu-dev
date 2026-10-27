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
  {
    name: "kippu",
    description: "Kafka ticket creation CLI",
    url: "https://github.com/damien-mathieu1/kippu",
  },
];

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 space-y-16">
      <section>
        <h1 className="text-2xl font-semibold mb-4">Damien Mathieu</h1>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Full-stack developer based in Montpellier, France. Working at{" "}
          <a
            href="https://anaba.fr"
            className="underline hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            anaba
          </a>
          , building side projects and contributing to open source in Rust
          and TypeScript.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Open source</h2>
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
        <h2 className="text-lg font-semibold mb-4">Contact</h2>
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
    </div>
  );
}
