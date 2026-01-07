import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/ui/NavBar";
import PageTransition from "@/ui/PageTransition";
import {NextIntlClientProvider, useTranslations} from "next-intl";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "G de Gato",
  description: "With Love and Kittens in Vedado, Havana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const t = useTranslations()

    const NavBarOptions = [
        {title: t('Nav.homePageTitle'), link: './'},
        {title: t('Nav.menuPageTitle'), link: './menu'},
        {title: t('Nav.catPageTitle'), link: './meetTheKitties'},
        {title: t('Nav.contactPageTitle'), link: './contactUs'},
    ]
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <NextIntlClientProvider>
                <div className="min-h-screen w-full bg-[#295239] font-sans text-[#f6e0ae] flex flex-col">
                    <div className="sticky top-0">
                        <NavBar
                            options={NavBarOptions}
                        />
                    </div>
                    <PageTransition>
                            {children}
                    </PageTransition>
                </div>
            </NextIntlClientProvider>
        </body>
        </html>
    );
}
