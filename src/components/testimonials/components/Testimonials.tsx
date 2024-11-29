import { QuoteMarks } from "@/icons/QuoteMarks";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <div className="w-full h-[300px] mb-[150px] lg:h-[700px] relative">
      <div className="w-full h-full z-10 bg-[#0B0C3A61] absolute"></div>
      <Image
        src={"/images/testimonial.png"}
        fill
        alt=""
        className="object-center object-cover"
      />
      <div className="flex flex-row z-50 gap-20 justify-center mt-12 px-10">
        <div className="flex flex-col justify-center w-[450px] px-[80px] h-[600px] bg-white z-30">
          <QuoteMarks className="w-14 h-14" />
          <div className="flex flex-col justify-center text-center">
            <p className="font-semibold text-[32px]">
              I also find this app useful. It also helped me with all punctures
              on my project!
            </p>
            <QuoteMarks className="w-14 h-14 self-end" />
            <p className="text-[32px] mt-6">Luigi, architect</p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[450px] px-[80px] h-[600px] bg-white z-30">
          <QuoteMarks className="w-14 h-14" />
          <div className="flex flex-col justify-center text-center">
            <p className="font-semibold text-[32px]">
              This is a very useful app, it helped me with all punctures on my
              project!
            </p>
            <QuoteMarks className="w-14 h-14 self-end" />
            <p className="text-[32px] mt-[80px]">Mario, architect</p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[450px] px-[80px] h-[600px] bg-white z-30">
          <QuoteMarks className="w-14 h-14" />
          <div className="flex flex-col justify-center text-center">
            <p className="font-semibold text-[32px]">
              I agree with what Mario said.
            </p>
            <QuoteMarks className="w-14 h-14 self-end" />
            <p className="text-[32px] mt-[180px]">Wario, engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
