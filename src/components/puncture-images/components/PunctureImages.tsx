import { Add } from "@/icons/Add";
import Image from "next/image";

export const PunctureImages = () => {
  return (
    <div className="flex flex-row flex-wrap items-center px-[246px] gap-8 mt-10">
      <div className="relative w-[626px] h-[418px]">
        <Image
          src={"/images/home-banner.jpg"}
          fill
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative w-[626px] h-[418px]">
        <Image
          src={"/images/image-2.jpg"}
          fill
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative w-[626px] h-[418px]">
        <Image
          src={"/images/image-3.jpg"}
          fill
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="ml-[200px]">
        <Add />
      </div>
    </div>
  );
};
