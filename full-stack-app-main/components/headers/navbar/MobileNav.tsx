"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Nav from "./Nav";
import Logo from "../logos/Logo";
import Socials from "@/components/Socials";

import { AlignJustify } from "lucide-react";
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              LinkStyles="text-2xl"
            />
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
