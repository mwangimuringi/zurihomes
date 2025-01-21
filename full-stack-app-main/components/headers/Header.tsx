"use client";

import React, { useState, useEffect } from "react";

// next hooks
import { usePathname } from "next/navigation";

// components
import ThemeToggler from "@/components/ThemeToggler";
import Logo from "./logos/Logo";
import MobileNav from "./navbar/MobileNav";
import Nav from "./navbar/Nav";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    // event
    window.addEventListener("scroll", scrollYPos);

    // remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items">
          {/* logo */}
          <Logo />
          <div className="flex items-center gap-x-6 ">
            {/* nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              LinkStyles="relative hover:text-primary transition-all"
              underLineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            {/* mobile nav */}
            <div className="xl:hidden ">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
