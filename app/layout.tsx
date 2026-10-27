import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Damien Mathieu",
  description: "Full-stack developer in Montpellier, France.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-neutral-200 dark:border-neutral-800">
          <nav className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold">
              Home
            </Link>
            <Link href="/blog" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">
              Blog
            </Link>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800">
          <div className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-neutral-500">
            <span>© 2026 Damien Mathieu</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/damien-mathieu1/dmathieu-dev"
                className="hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                Source
              </a>
              <a
                href="https://www.linkedin.com/in/damien-mathieu-a70348241/"
                className="hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                LinkedIn
              </a>
              <a
                href="mailto:damien.mathieu.pro@gmail.com"
                className="hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
