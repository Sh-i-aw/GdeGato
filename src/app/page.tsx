import Image from "next/image";
import InstagramCarousel from "@/ui/InstagramCarousel";
import Footer from "@/ui/Footer";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center py-32 gap-40 sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left px-30">
          <h2 className="max-w-xs text-3xl font-semibold tracking-tight">
            With love and kittens
          </h2>
          <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
            From Vedado, Havana
          </h2>
        </div>
        <InstagramCarousel/>
        <Footer/>
      </main>
    </div>
  );
}
