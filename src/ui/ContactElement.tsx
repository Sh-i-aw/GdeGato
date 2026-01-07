import {ContactElementProps} from "@/lib/types";

export default function ContactElement({ icon: Icon, content, link }: ContactElementProps) {
    const Element = link ? "a" : "div"
    // optionally render row as an <a> tag if it's email or phone

    return (
        <div className="flex items-start gap-3">

            <Icon className="mt-0.5 h-5 w-5 shrink-0" />

            <Element
                {...(link
                    ? {
                        href: link,
                        target: "_blank",
                        rel: "noreferrer",
                        className:
                            "text-base underline underline-offset-6 hover:text-white/80 break-words",
                    }
                    : { className: "text-base break-words" })}
            >
                {content}
            </Element>
        </div>
    );
}