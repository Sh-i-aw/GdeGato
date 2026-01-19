import {Languages} from "lucide-react";

type LanguageButtonProps = {
    nextLocale: string,
    localeSwitch: () => void
}

export default function LanguageButton ({
    nextLocale,
    localeSwitch
}: LanguageButtonProps) {
    return (
        <>
            <button
                onClick={localeSwitch}
                className="flex text-[#F5E3AF] items-center gap-2 px-3 py-1 rounded-2xl ring-1 ring-amber-100/25 shadow-sm shadow-black/10 hover:ring-amber-100/40 hover:shadow-md hover:bg-amber-100/20 transition"
            >
                <Languages className="mt-0.5 h-4 w-4 shrink-0" />
                {nextLocale === "es" ? "ES" : "EN"}
            </button>
        </>
    )
}