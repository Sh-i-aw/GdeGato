import ContactElement from "@/ui/ContactElement";
import {ContactSectionProps} from "@/lib/types";
import {useTranslations} from "next-intl";

export default function ContactSection (
    { contactInfo, className }: ContactSectionProps
) {
    const t = useTranslations()

    return (
        <div className={`flex flex-col lg:w-2/5 px-10 p-2 ${className ?? ""}`}>
            <h2 className="font-bold text-lg"> {t('Contact.header')} </h2>
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
