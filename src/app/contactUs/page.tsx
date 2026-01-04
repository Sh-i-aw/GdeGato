import {ContactSectionProps} from "@/lib/types";
import { MapPin, Phone, Clock, CalendarDays, Instagram } from "lucide-react";

export default function ContactPage() {
    const contactPageInfo: ContactSectionProps[] = [
        {icon: MapPin, content: "Calle G e/ 21 y 23 #507, La Habana, Cuba"},
        {icon: Phone, content: "+53 56289815", link: "tel:+5356289815"},
        {icon: Clock, content: "daily 10am - 9pm"},
        {icon: CalendarDays, content: "Closed Dec 30, 31st"},
        {icon: Instagram, content: "@g_de_gato_", link:"https://www.instagram.com/g_de_gato_/"},
    ]
    return (
      <main className="flex flex-wrap justify-center p-10 mt-10">
          {/* google map embed */}
          <div
              className="overflow-hidden w-2/5 rounded-2xl shadow-lg ring-1 ring-black/10"
          >
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.9147227580847!2d-82.39294870961936!3d23.136792125189192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd79002bf3e9ad%3A0x60750547d5d48de9!2sG%20de%20Gato!5e0!3m2!1sen!2sca!4v1767483414890!5m2!1sen!2sca"
                  className="w-full h-65 sm:h-85 lg:h-115"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              />
          </div>
          <div className="flex flex-col gap-6 w-2/5 px-10 p-2">
              <h2 className="font-bold text-lg"> Come Visit Us    : ) </h2>
              {
                contactPageInfo.map((section, index) => (
                    <ContactSection
                        key={`contactSection${index}`}
                        icon={section.icon}
                        content={section.content}
                        link={section.link}
                    />
                ))
              }
          </div>
      </main>
    );
}


function ContactSection({ icon: Icon, content, link }: ContactSectionProps) {
    const ContentElement = link ? "a" : "div"
    // optionally render row as an <a> tag if it's email or phone

    return (
        <div className="flex items-start gap-3">

            <Icon className="mt-0.5 h-5 w-5 shrink-0" />

            <ContentElement
                {...(link
                    ? {
                        href: link,
                        target: "_blank",
                        rel: "noreferrer",
                        className:
                            "text-base hover:opacity-90 break-words",
                    }
                    : { className: "text-base break-words" })}
            >
                {content}
            </ContentElement>
        </div>
    );
}
