import { QuoteMarks } from "@/icons/QuoteMarks";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <div className="w-full h-[500px] mb-[150px] lg:h-[700px] relative">
      <div className="w-full h-full z-10 bg-[#0B0C3A61] absolute"></div>
      <Image
        src={"/images/testimonial.png"}
        fill
        alt=""
        className="object-center object-cover"
      />
      <div className="flex flex-row z-50 gap-6 lg:gap-20 justify-center mt-10 lg:mt-12 px-4">
        <div className="flex flex-col lg:justify-center w-[140px] lg:w-[450px] p-1 lg:px-[80px] h-[350px] lg:h-[600px] bg-white z-30">
          <QuoteMarks className="w-4 h-4 lg:w-14 lg:h-14" />
          <div className="flex flex-col justify-center text-center">
            <p className="font-semibold text-base lg:text-[32px]">
              I also find this app useful. It also helped me with all punctures
              on my project!
            </p>
            <QuoteMarks className="w-4 h-4 lg:w-14 lg:h-14 self-end" />
            <p className="text-base lg:text-[32px] mt-6">Luigi, architect</p>
          </div>
        </div>
        <div className="flex flex-col lg:justify-center w-[140px] lg:w-[450px] p-1 lg:px-[80px] h-[350px] lg:h-[600px] bg-white z-30">
          <QuoteMarks className="w-4 h-4 lg:w-14 lg:h-14" />
          <div className="flex flex-col justify-center text-center">
            <p className="font-semibold text-base lg:text-[32px]">
              This is a very useful app, it helped me with all punctures on my
              project!
            </p>
            <QuoteMarks className="w-4 h-4 lg:w-14 lg:h-14 self-end" />
            <p className="text-base lg:text-[32px] mt-[80px]">
              Mario, architect
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:justify-center w-[140px] lg:w-[450px] p-1 lg:px-[80px] h-[350px] lg:h-[600px] bg-white z-30">
          <QuoteMarks className="w-4 h-4 lg:w-14 lg:h-14" />
          <div className="flex flex-col justify-center text-center">
            <p className="font-semibold text-base lg:text-[32px]">
              I agree with what Mario said.
            </p>
            <QuoteMarks className="w-4 h-4 lg:w-14 lg:h-14 self-end" />
            <p className="text-base lg:text-[32px] mt-[180px]">
              Wario, engineer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
