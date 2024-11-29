import { Checkmark } from "@/icons/Checkmark";

export const Services = () => {
  return (
    <div className="flex flex-row flex-wrap sm:p-8 lg:p-0 gap-x-10 justify-center gap-8 lg:gap-[180px] mt-4 lg:mt-[100px] mb-[150px]">
      <div className="flex flex-col gap-4">
        <Checkmark className="lg:w-[140px] self-center" />
        <p className="text-[20px] w-[100px] lg:text-[26px] lg:w-[160px] text-center self-center">
          organize & update in real time
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Checkmark className="self-center" />
        <p className="text-[20px] w-[100px] lg:text-[26px] lg:w-[160px] text-center self-center">
          share with teammates anywhere, anytime
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Checkmark className="self-center" />
        <p className="text-[20px] w-[100px] lg:text-[26px] lg:w-[160px] text-center self-center">
          archive projects for later revision
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Checkmark className="self-center" />
        <p className="text-[20px] w-[100px] lg:text-[26px] lg:w-[160px] text-center self-center">
          add pictures & details for precision
        </p>
      </div>
    </div>
  );
};
