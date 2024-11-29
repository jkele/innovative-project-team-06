import { ContactUsForm } from "./ContactUsForm";

export const ContactUs = () => {
  return (
    <div className="bg-[#054166] p-10 flex flex-col" id="contactUs">
      <div className="flex flex-col">
        <div className="flex flex-row leading-none gap-2 lg:gap-4 justify-center text-white w-full">
          <p className="text-base lg:text-[40px] lg:mt-4">Let’s</p>
          <p className="text-[20px] lg:text-[60px] font-semibold">
            detect, analyze, secure
          </p>
          <p className="text-base lg:text-[40px] lg:mt-4">your</p>
        </div>
        <p className="text-base lg:text-[40px] mt-0 lg:mt-3 text-white self-center">
          punctures together.
        </p>
      </div>
      <ContactUsForm />
    </div>
  );
};
