"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <nav className="p-6 px-10 flex justify-between items-center shadow-sm fixed top-8 z-10 bg-white w-full">
      <div className="flex gap-12 items-center">
        <Image src={`/logo.svg`} alt="Zuri Homes" width={150} height={150} />
        <ul className="hidden md:flex gap-10">
          <Link href={"/"}>
            <li
              className={`'hover:text-primary font-medium text-sm cursor-pointer' ${
                path == "/" && "text-primary"
              }`}
            >
              For Sale
            </li>
          </Link>
          <li className="hover:text-primary font-medium text-sm cursor-pointer">
            For Rent
          </li>
          <li className="hover:text-primary font-medium text-sm cursor-pointer">
            Agent Finder
          </li>
        </ul>
      </div>
      <div className="flex gap-2 items-center">
        <Button className="flex gap-2">
          <Plus className="h-5 w-5" /> Post Your Ad
        </Button>
        <Button variant="outline">Login</Button>
      </div>
    </nav>
  );
}

export default Header;
