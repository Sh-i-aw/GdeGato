import Image from "next/image";

export default function MenuPage() {
  return (
    <div className="flex w-full flex-1 justify-center items-center">
      <div className="relative w-1/2 aspect-3/4 rounded-sm">
        <Image
          src="/menu/menu.png"
          alt="menu for g de gato"
          className="object-contain"
          fill
          sizes="(min-width: 1600px) 50vw, 100vw"
        />
      </div>
    </div>
  );
}
