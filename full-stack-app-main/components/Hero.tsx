"use client";

// next link
import Link from "next/link";
// shadcn ui
import { Button } from "./ui/button";
// icons lucide react
import { Download, Send } from "lucide-react";

// icons react icons
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
import DrImg from "./MrImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section
      className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat 
    bg-bottom bg-cover dark:bg-none"
    >
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div
            className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0
          text-center xl:text-left"
          >
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developers
            </div>
            <h1 className="h1 mb-4">Hello, my name is Ehsan Fakhri</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Web developer | Web desine
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant={"secondary"} className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem] "
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgetext="Years Of Experience"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={6}
              endCounttext="k"
              badgetext="Finished Projects"
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={9}
              endCounttext="k"
              badgetext="Happy Clients"
            />
            <div
              className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px]
             h-[500px] bg-no-repeat absolute -top-1 -right-2"
            ></div>
            <DrImg
              containerStyle="bg-hero_shape w-[510px] h-[462px] bg-no-repeat
            relative bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
