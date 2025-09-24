import {cn} from '@/libs/utils'
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    const navItems = [
      { name: "Home", href: "#hero" },
      { name: "About Me", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Project", href: "#project" },
      { name: "Contact", href: "#contact" },
    ];

    return (
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScroll ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">TaiPhan</span>{" "}
              Portfolio
            </span>
          </a>

          {/*desktop nav*/}
          <div className="hidden md:flex space-x-8">
            {navItems.map((navItem, key) => (
              <a
                key={key}
                href={navItem.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {navItem.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
          {/*mobile nav*/}
          <button
            className="md:hidden p-2 text-foreground z-50"
            onClick={() => {
              setIsMenuOpened(!isMenuOpened);
            }}
            aria-label={isMenuOpened ? "Close Menu" : "Open menu"}
          >
            {" "}
            {isMenuOpened ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div
            className={cn(
              "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
              "transition-all duration-300 md:hidden",
              isMenuOpened
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="flex flex-col space-y-8 text-xl">
              {navItems.map((navItem, key) => (
                <a
                  key={key}
                  href={navItem.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => {
                    setIsMenuOpened(false);
                  }}
                >
                  {navItem.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
}