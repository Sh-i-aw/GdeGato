import {NavOptionProps} from "@/lib/types";
import {Link} from '@/i18n/navigation';

export default function NavOption ({title, link}: NavOptionProps)
{
        return (
            <>
                <Link
                    className="text-[#f6e0ae] text-lg uppercase"
                    href={link}
                    rel="noopener noreferrer"
                >
                    {title}
                </Link>
            </>
        )
    }
