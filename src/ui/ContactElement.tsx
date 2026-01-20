import {ContactElementProps} from "@/lib/types";

export default function ContactElement({ icon: Icon, content, link }: ContactElementProps) {
    const Element = link ? "a" : "div"
    // optionally render row as an <a> tag if it's email or phone

    return (
        <div className="flex items-start gap-2 sm:gap-3">

            <Icon className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0" />

            <Element
                {...(link
                    && {
                        href: link,
                        target: "_blank",
                        rel: "noreferrer",
                        className:
                            "underline underline-offset-6 hover:text-white/80",
                    }
                )}
            >
                <div className="text-sm sm:text-base wrap-break-word">
                    {content}
                </div>
            </Element>
        </div>
    );
}