"use client";

import { useTranslations } from "next-intl";
import {Link} from '@/i18n/navigation';
import {NavOptionProps} from "@/lib/types";

export function VideoBanner() {
  const t = useTranslations();

  const bannerButtons: NavOptionProps[]= [
      {title: t('Banner.seeOurMenu'), link:"./menu"},
      {title: t('Banner.meetTheKitties'), link:"./meetTheKitties"}
  ]

  return (
    <div className="relative w-full max-w-full max-h-140 aspect-video overflow-hidden">
      <video
        className="h-full w-full max-w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/insta/outdoor-croissants.png"
      >
        <source src="/video/banner.mp4" type="video/mp4" />
        {/* Optional: add WebM first if you have it */}
        {/* <source src="/hero.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>
        <div className="absolute z-10 h-full w-full bottom-0 right-0 bg-white/30">

        </div>

      <div className="absolute z-20 h-full w-full bottom-0 right-0 flex flex-col gap-6 items-center justify-center p-8 sm:p-12">
        <h2 className="text-4xl text-white/90 font-bold tracking-tight">
          {t("Home.bannerText1")}
        </h2>
        <h2 className="text-4xl text-white/90 font-bold tracking-tight">
          {t("Home.bannerText2")}
        </h2>
          <div className="flex w-full p-8 justify-center gap-25">
              {bannerButtons.map((button, index) => (
                  <BannerButton
                      key={`bannerButton${index}`}
                      title={button.title}
                      link={button.link}
                  />
              ))}
          </div>
      </div>
    </div>
  )
}

function BannerButton({title, link}: NavOptionProps){
    return (
        <>
            <Link
                className="text-lg font-semibold py-2 px-4 rounded-full bg-[#f6e0aebb] text-[#295239] hover:bg-[#f6e0ae]"
                href={link}
            >
                {title}
            </Link>
        </>
    )
}
