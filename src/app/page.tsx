import Image from "next/image";
import InstagramCarousel from "@/ui/InstagramCarousel";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left px-30">
          <h2 className="max-w-xs text-3xl font-semibold tracking-tight">
            With love and kittens
          </h2>
          <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
            From Vedado, Havana
          </h2>
        </div>
        <InstagramCarousel/>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
              className=""
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
          >
            Where Google map embedding should be
          </a>

        </div>
      </main>
    </div>
  );
}
