"use client";

import Image from "next/image";
import NavOption from "@/ui/NavOption";
import { NavBarProps } from "@/lib/types";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Languages } from "lucide-react"

export default function NavBar(options: NavBarProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === "en" ? "es" : "en";

  const handleLocaleSwitch = () => {
    // usePathname() from next-intl should return pathname without locale
    // Clean any accidental locale segments from the start of the pathname
    let cleanPathname = pathname;
    if (cleanPathname.startsWith(`/${locale}/`)) {
      cleanPathname = cleanPathname.replace(`/${locale}/`, "/");
    } else if (cleanPathname === `/${locale}`) {
      cleanPathname = "/";
    }

    // Use push to navigate to the same path with new locale
    router.push(cleanPathname, { locale: nextLocale });
  };

  return (
    <div className="flex h-1/8 bg-[#003312] px-10 pb-2 items-center justify-between">
      <Image
        src="/storeLogo.png"
        alt="Next.js logo"
        width={90}
        height={20}
        priority
      />
      <div className="flex gap-6 ">
        {options.options.map((option, index) => (
          <NavOption
            key={`navOptions${index}`}
            title={option.title}
            link={option.link}
          />
        ))}
        <button
          onClick={handleLocaleSwitch}
          className="flex items-center gap-2 px-3 py-1 rounded-2xl ring-1 ring-amber-100/25 shadow-sm shadow-black/10 hover:ring-amber-100/40 hover:shadow-md hover:bg-amber-100/20 transition"
        >
          <Languages className="mt-0.5 h-4 w-4 shrink-0"/>
          {nextLocale === "es" ? "ES" : "EN"}
        </button>
      </div>
    </div>
  );
}
