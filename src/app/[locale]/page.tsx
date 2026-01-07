import InstagramCarousel from "@/ui/InstagramCarousel";
import Footer from "@/ui/Footer";
import {useTranslations} from "next-intl";

export default function Home() {
  const t = useTranslations()
  return (
    <div className="flex flex-1 items-center justify-center">
      <main className="flex w-full flex-col items-center py-32 gap-40 sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left px-30">
          <h2 className="text-3xl font-semibold tracking-tight">
            {t('Home.bannerText1')}
          </h2>
          <h2 className="text-3xl font-semibold leading-10 tracking-tight">
            {t('Home.bannerText2')}
          </h2>
        </div>
        <InstagramCarousel/>
        <Footer/>
      </main>
    </div>
  );
}
