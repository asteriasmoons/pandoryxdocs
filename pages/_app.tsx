import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://pandoryx.lystaria.im"),
  title: {
    default: "Pandoryx Docs",
    template: "%s · Pandoryx Docs",
  },
  description:
    "Pandoryx is a powerful server management bot for Discord, combining moderation, automation, and advanced utilities into one cohesive system built for control, clarity, and efficiency.",
  applicationName: "Pandoryx",
  keywords: [
    "Pandoryx",
    "Discord bot",
    "server management",
    "moderation",
    "automation",
    "utilities",
    "Discord moderation",
    "server control",
  ],
  authors: [{ name: "asteriasmoons", url: "https://lystaria.im" }],
  creator: "asteriasmoons",
  publisher: "asteriasmoons",

  // ── Open Graph ──────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: "https://pandoryx.lystaria.im",
    siteName: "Pandoryx Docs",
    title: "Pandoryx Docs",
    description:
      "Pandoryx is a powerful server management bot for Discord, combining moderation, automation, and advanced utilities into one cohesive system built for control, clarity, and efficiency.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Pandoryx — Server Management Bot for Discord",
      },
    ],
    locale: "en_US",
  },

  // ── Twitter / X ──────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Pandoryx Docs",
    description:
      "Pandoryx is a powerful server management bot for Discord, combining moderation, automation, and advanced utilities into one cohesive system built for control, clarity, and efficiency.",
    images: ["/banner.png"],
    creator: "@asteriasmoons",
  },

  // ── Canonical & alternates ────────────────────────────────────
  alternates: {
    canonical: "https://pandoryx.lystaria.im",
  },

  // ── Robots ───────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Icons ────────────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // ── Theme ────────────────────────────────────────────────────
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0f" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};
