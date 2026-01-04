import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-[#003312aa] mt-16 absolute bottom-0">
            <div className="w-full px-4 py-10 flex justify-between">
                <div className="flex flex-col self-start ml-3">
                    <FooterItem
                        icon={MapPin}
                        content="Calle G e/ 21 y 23 #507, La Habana, Cuba"
                    />

                    <FooterItem
                        icon={Phone}
                        content="+53 56289815"
                        link="tel:+5356289815"
                    />

                    <FooterItem icon={Clock} content="Daily 10am - 9pm" />
                </div>

                <div className="pt-8 text-center text-sm opacity-80">
                    © {new Date().getFullYear()} G de Gato
                </div>
            </div>
        </footer>
    );
}

function FooterItem({
                        icon: Icon,
                        content,
                        link,
                    }: {
    icon: React.ElementType;
    content: string;
    link?: string;
}) {
    const ContentElement: any = link ? "a" : "div";

    return (
        <div className="flex items-start gap-3">
            <Icon className="mt-0.5 h-5 w-5 shrink-0" />
            <ContentElement
                {...(link
                    ? {
                        href: link,
                        className: "text-base hover:opacity-90 break-words",
                    }
                    : { className: "text-base break-words" })}
            >
                {content}
            </ContentElement>
        </div>
    );
}
