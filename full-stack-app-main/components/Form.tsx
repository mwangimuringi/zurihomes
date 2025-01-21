"use client";

// shadcd ui
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

// icons lucide react
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea id="name" placeholder="Type Your Message Here." />
        <MessageSquare className="absolute top-6 right-6" size={20} />
      </div>
      <Button className="flex items-center max-x-1 max-w-[166px]">
        Let s Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
