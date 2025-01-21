"use client";

// next image
import Image from "next/image";
// next link
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <div>
          <Image
            className="dark:hidden"
            src={"/logos/logo-light.png"}
            width={200}
            height={150}
            priority
            alt=""
          />
          <Image
            className="hidden dark:block transition-all"
            src={"/logos/logo-dark.png"}
            width={200}
            height={150}
            priority
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
