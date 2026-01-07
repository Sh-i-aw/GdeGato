import {MapPin, Phone, Clock, CalendarDays, Instagram} from "lucide-react";
import {ContactElementProps} from "@/lib/types";
import {useTranslations} from "next-intl";
import ContactSection from "@/ui/ContactSection";

export default function Footer() {
    const t = useTranslations()

    const FooterInfo: ContactElementProps[] = [
        {icon: MapPin, content: "Calle G e/ 21 y 23 #507, La Habana, Cuba"},
        {icon: Phone, content: "+53 56289815", link: "tel:+5356289815"},
        {icon: Clock, content: t('Contact.openHoursText')},
        {icon: CalendarDays, content: t('Contact.closingHoursText')},
    ]
    return (
        <footer className="w-full border-t border-white/10 bg-[#003312aa] mt-16">
            <div className="w-full px-4 py-10 flex justify-between">
                <ContactSection
                    contactInfo={FooterInfo}
                    className={"gap-2"}
                />

                <div className="pt-8 text-center text-sm opacity-80">
                    © {new Date().getFullYear()} G de Gato
                </div>
            </div>
        </footer>
    );
}
