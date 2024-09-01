import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FadeText } from "@/components/magicui/fade-text";
import {
  IconHome,
  IconCode,
  IconUser,
  IconMail as IconContact,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome
          className="h-full w-full text-sky-500 dark:text-sky-300" // Solid sky blue color
          onClick={() => handleLinkClick("#home")}
        />
      ),
      href: "#home",
    },
    {
      title: "About",
      icon: (
        <IconUser
          className="h-full w-full text-sky-500 dark:text-sky-300" // Solid sky blue color
          onClick={() => handleLinkClick("#about")}
        />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconCode
          className="h-full w-full text-sky-500 dark:text-sky-300" // Solid sky blue color
          onClick={() => handleLinkClick("#projects")}
        />
      ),
      href: "#projects",
    },
    {
      title: "Contact",
      icon: (
        <IconContact
          className="h-full w-full text-sky-500 dark:text-sky-300" // Solid sky blue color
          onClick={() => handleLinkClick("#contact")}
        />
      ),
      href: "#contact",
    },
  ];
  

  const handleLinkClick = (href) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  

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
