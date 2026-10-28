"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-neutral-500">
        <span>© 2026 Damien Mathieu</span>
        <div className="flex gap-4">
          <a
            href="https://github.com/damien-mathieu1/dmathieu-dev"
            className="hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            {t("footer.source")}
          </a>
          <a
            href="https://www.linkedin.com/in/damien-mathieu-a70348241/"
            className="hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            {t("footer.linkedin")}
          </a>
          <a
            href="mailto:damien.mathieu.pro@gmail.com"
            className="hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            {t("footer.email")}
          </a>
        </div>
      </div>
    </footer>
  );
}
