import ContactElement from "@/ui/ContactElement";
import {ContactSectionProps} from "@/lib/types";
import {useTranslations} from "next-intl";

export default function ContactSection (
    { contactInfo, className }: ContactSectionProps
) {
    const t = useTranslations()

    return (
        <div className={`w-full flex flex-col pl-2 lg:w-2/5 ${className ?? ""}`}>
            <h2 className="font-bold text-md sm:text-lg"> {t('Contact.header')} </h2>
            {
                contactInfo.map((section, index) => (
                    <ContactElement
                        key={`contactSection${index}`}
                        icon={section.icon}
                        content={section.content}
                        link={section.link}
                    />
                ))
            }
        </div>
    )
}
