import Image from "next/image";

export default function MenuPage() {
  return (
    <div className="flex w-full flex-1 justify-center items-center">
      <div className="relative mt-10 w-[95%] md:w-3/4 lg:w-2/3 aspect-3/4 rounded-sm">
        <Image
          src="/menu/menu.png"
          alt="menu for g de gato"
          className="object-contain"
          fill
          sizes="(min-width: 1024px) 66vw, (min-width: 768px) 75vw, 95vw"
        />
      </div>
    </div>
  );
}
