"use client";

import Image from "next/image";
import NavOption from "@/ui/NavOption";
import { NavBarProps } from "@/lib/types";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import LanguageButton from "@/ui/nav/languageBtn";

export default function NavBar(options: NavBarProps) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
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
    <header className="relative">
      <div className="flex bg-[#003312] px-4 py-1 sm:py-2 sm:px-8 items-center justify-between">
        <Image
          src="/storeLogo.png"
          alt="Next.js logo"
          width={90}
          height={20}
          className="w-13 sm:w-22 h-auto"
          priority
        />

        {/* Nav text section */}
        <div className="hidden sm:flex items-center gap-6 ">
          {options.options.map((option, index) => (
            <NavOption
              key={`navOptions${index}`}
              title={option.title}
              link={option.link}
            />
          ))}
          <LanguageButton
            nextLocale={nextLocale}
            localeSwitch={handleLocaleSwitch}
          />
        </div>

        {/* Mobile Nav Icon */}
        <button
          onClick={() => setOpenDrawer(true)}
          className="sm:hidden p-2 rounded-xl hover:bg-amber-100/20 transition"
          aria-label="open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Drawer - Rendered via Portal at body level to escape stacking contexts */}
      {isMounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-9999 sm:hidden ${openDrawer ? "pointer-events-auto" : "pointer-events-none"}`}
          >
            {/* Background Overlay, click to close nav */}
            <div
              className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${openDrawer ? "opacity-100" : "opacity-0"}`}
              onClick={() => setOpenDrawer(false)}
            />
            {/* Drawer Panel */}
            <div
              className={`absolute right-0 top-0 h-full w-52 bg-[#003312] shadow-2xl transition-transform duration-200 ease-out ${openDrawer ? "translate-x-0" : "translate-x-full"}`}
              aria-hidden={!openDrawer}
            >
              <div className="flex flex-col h-full p-6 justify-between">
                <div className="flex flex-col gap-4">
                  {options.options.map((option, index) => (
                    <NavOption
                      key={`mobileNavOptions${index}`}
                      title={option.title}
                      link={option.link}
                      onCloseDrawer={() => setOpenDrawer(false)}
                    />
                  ))}
                </div>
                <div>
                  <LanguageButton
                    nextLocale={nextLocale}
                    localeSwitch={handleLocaleSwitch}
                  />
                </div>
              </div>
            </div>
          </div>,
          document.body // Second argument: where to render the portal
        )}
    </header>
  );
}
