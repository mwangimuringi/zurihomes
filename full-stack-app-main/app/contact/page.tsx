//components
import Form from "@/components/Form";

// icons lucide react
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const ContactPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-2 xl:h-[400px] mb-6 xl:mb-24">
          {/* text*/}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Lets work together.</h1>
            <p className="subtitle max-w-[400px]">
              Loren ipsum dolor sit, amet contetur adipsicing elit.
            </p>
          </div>
          {/* illustration */}
          <div
            className="hidden xl:flex w-full bg-contact_illustration_light
          dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat "
          ></div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="felx flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg ">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>yourmail@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>8420 Pine Avenue, Meadwville MC 842</div>
            </div>
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+98 123 546 7890</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
