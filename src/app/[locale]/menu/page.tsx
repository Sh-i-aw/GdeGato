import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";

export default function MenuPage() {
    const t = useTranslations();
    const locale = useLocale();

  return (
    <div className="flex w-full flex-1 flex-col px-3">
        <div className="flex flex-wrap justify-center items-end gap-0.5 sm:gap-10 w-full mt-2 sm:mt-10">
            <div className='relative w-full  sm:w-2/5 '>
                <div className="text-xs p-2"> * {t("Menu.priceText")} </div>
                <div className=" aspect-3/4 rounded-sm">
                    <Image
                        src={`/menu/menu-${locale}1.jpg`}
                        alt="menu for g de gato"
                        width={1024}
                        height={2000}
                        className="object-fill"
                        sizes="(min-width: 1024px) 66vw, (min-width: 768px) 75vw, 95vw"
                    />
                </div>
            </div>
            <div className="relative w-full sm:w-2/5 aspect-3/4 rounded-sm">
                <Image
                    src={`/menu/menu-${locale}2.jpg`}
                    alt="menu for g de gato"
                    className="object-fill"
                    width={1024}
                    height={2000}
                    sizes="(min-width: 1024px) 66vw, (min-width: 768px) 75vw, 95vw"
                />
            </div>
        </div>

    </div>
  );
}
