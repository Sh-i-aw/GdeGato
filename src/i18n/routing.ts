import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  localePrefix: "as-needed", // or 'always' if you want /en and /es always visible
  localeDetection: true, // Enable browser locale detection
});
