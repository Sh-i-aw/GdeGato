import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export type NavOptionProps = {
    title: string,
    link: string,
}

export type NavBarProps = {
    options: NavOptionProps[]
}

export type CatCardProps = {
    catName: string,
    imageLink: string,
    description: string,
}

export type IconType = ComponentType<LucideProps>;

export type ContactSectionProps = {
    icon: IconType,
    content: string,
    link?: string
}

export type InstagramTileProps = {
    imageLink: string,
    src: string,
    description: string,
}
