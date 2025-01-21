"use client";

// next link
import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

interface INavPrps {
  containerStyles?: string;
  LinkStyles?: string;
  underLineStyles?: string;
}

// frame motion
import { motion } from "framer-motion";
import React from "react";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my project" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, LinkStyles, underLineStyles }: INavPrps) => {
  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`capitalize ${LinkStyles}`}
        >
          {link.path === pathname && (
            <motion.span
              initial={{ y: "-100" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underLineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
