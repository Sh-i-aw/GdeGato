import Image from "next/image";
import NavOption from "@/ui/NavOption";
import {NavBarProps} from "@/lib/types";


export default function NavBar(options: NavBarProps) {
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
                {
                    options.options.map((option, index) => (
                        <NavOption key={`navOptions${index}`} title={option.title} link={option.link}/>
                    ))
                }
            </div>
        </div>

    )
}
