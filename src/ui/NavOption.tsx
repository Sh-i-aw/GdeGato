import {NavOptionProps} from "@/lib/types";

export default function NavOption ({title, link}: NavOptionProps)
{
        return (
            <>
                <a
                    className="text-[#f6e0ae] text-lg uppercase"
                    href={link}
                    rel="noopener noreferrer"
                >
                    {title}
                </a>
            </>
        )
    }
