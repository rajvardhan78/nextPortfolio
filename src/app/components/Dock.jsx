import React from "react";
import { FadeText } from "@/components/magicui/fade-text";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconHome,
    IconCode,
    IconUser,
    IconMail as IconContact,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
    const links = [
        { title: "Home", icon: <IconHome />, href: "#home" },
        { title: "About", icon: <IconUser />, href: "#about" },
        { title: "Projects", icon: <IconCode />, href: "#projects" },
        { title: "Contact", icon: <IconContact />, href: "#contact" },
    ];

    return (
        <div className="fixed bottom-7 left-1/2 transform -translate-x-1/2 z-50">
            <FadeText
                className="text-4xl font-bold text-black dark:text-white"
                direction="up"
                framerProps={{
                    show: { transition: { delay: 1 } },
                }}
                text={<FloatingDock items={links} />}
            />
        </div>
    );
}