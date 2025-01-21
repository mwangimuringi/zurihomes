"use client";

// components
import CountUp from "react-countup";

interface IBadgeProps {
  containerStyles: string;
  icon: JSX.Element;
  endCountNum: number;
  endCounttext?: string;
  badgetext: string;
}

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCounttext,
  badgetext,
}: IBadgeProps) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCounttext}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
          {badgetext}
        </div>
      </div>
    </div>
  );
};

export default Badge;
