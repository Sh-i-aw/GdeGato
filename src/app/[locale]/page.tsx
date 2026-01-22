import InstagramCarousel from "@/ui/InstagramCarousel";
import Footer from "@/ui/Footer";
import { useTranslations } from "next-intl";
import { VideoBanner } from "@/ui/VideoBanner";

export default function Home() {
  const t = useTranslations();
  return (
    <div className="flex flex-1 items-center justify-center w-full max-w-full overflow-x-hidden">
      <main className="flex w-full max-w-full flex-col sm:items-start">
        <VideoBanner />
          <div className="flex items-center py-60 text-3xl">
              <p>
                  Other content like promotion, highlights from menu, short bio of the store
              </p>
          </div>
        <InstagramCarousel/>
        <Footer />
      </main>
    </div>
  );
}
