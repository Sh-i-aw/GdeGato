import {ContactElementProps, ContactSectionProps} from "@/lib/types";
import { MapPin, Phone, Clock, CalendarDays, Instagram } from "lucide-react";
import {useTranslations} from "next-intl";
import ContactSection from "@/ui/ContactSection";

export default function ContactPage() {
    const t = useTranslations()
    const contactPageInfo: ContactElementProps[] = [
        {icon: MapPin, content: "Calle G e/ 21 y 23 #507, La Habana, Cuba"},
        {icon: Phone, content: "+53 56289815", link: "tel:+5356289815"},
        {icon: Clock, content: t('Contact.openHoursText')},
        {icon: CalendarDays, content: t('Contact.closingHoursText')},
        {icon: Instagram, content: "@g_de_gato_", link:"https://www.instagram.com/g_de_gato_/"},
    ]
    return (
      <main className="flex-1 flex flex-wrap h-fit justify-center p-10 mt-10">
          {/* google map embed */}
          <div
              className="overflow-hidden w-2/5 sm:w-3/5 rounded-2xl shadow-lg ring-1 ring-black/10"
          >
              <iframe
                  aria-label="google map embed"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.9147227580847!2d-82.39294870961936!3d23.136792125189192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd79002bf3e9ad%3A0x60750547d5d48de9!2sG%20de%20Gato!5e0!3m2!1sen!2sca!4v1767483414890!5m2!1sen!2sca"
                  className="w-full h-65 sm:h-85 lg:h-115"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              />
          </div>
          <ContactSection
              contactInfo={contactPageInfo}
              className={"gap-6"}
          />
      </main>
    );
}
