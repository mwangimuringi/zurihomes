"use client";

// shadcd ui
import { Button } from "@/components/ui/button";

// next link
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 dark:bg-secondary/40 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Prepared to turn your ideas reality? I am here to help
          </h2>
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
