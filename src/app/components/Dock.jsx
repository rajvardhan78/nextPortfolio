import React from "react";
import { FadeText } from "@/components/magicui/fade-text";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconHome,
    IconCode,
    IconUser,
    IconMail as IconContact,
} from "@tabler/icons-react";

export function FloatingDockDemo() {  // Named export
    const links = [
        { title: "Home", icon: <IconHome />, href: "/" },
        { title: "Projects", icon: <IconCode />, href: "#" },
        { title: "About", icon: <IconUser />, href: "#" },
        { title: "Contact", icon: <IconContact />, href: "#" },
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
