import {NavOptionProps} from "@/lib/types";
import {Link} from '@/i18n/navigation';

export default function NavOption ({title, link}: NavOptionProps)
{
        return (
            <>
                <Link
                    className="flex items-center text-md sm:text-lg text-[#F5E3AF] uppercase"
                    href={link}
                    rel="noopener noreferrer"
                >
                    {title}
                </Link>
            </>
        )
    }
