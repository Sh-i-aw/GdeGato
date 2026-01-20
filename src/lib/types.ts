import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export type NavOptionProps = {
    title: string,
    link: string,
    onCloseDrawer?: () => void,
}

export type NavBarProps = {
    options: NavOptionProps[]
}

export type CatCardProps = {
    catName: string,
    imageLink: string,
    description?: string
    styles?: string,
    onClick?: () => void,
}

export type IconType = ComponentType<LucideProps>;

export type ContactElementProps = {
    icon: IconType,
    content: string,
    link?: string
}

export type ContactSectionProps = {
    contactInfo: ContactElementProps[]
    className?: string
}

export type InstagramTileProps = {
    imageLink: string,
    src: string,
    description: string,
}
