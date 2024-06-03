import { Stats } from "@/components/stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-[#F3FAFF]">
      <div className="ml-32">
        <p className="items-center">
          <span className="text-[60px] 2xl:text-[80px]">Make</span>
          <span className="text-[#054166] ml-5 font-bold text-[80px] 2xl:text-[120px]">
            sure
          </span>
        </p>
        <p className="flex flex-row leading-10">
          <span className="text-[60px] 2xl:text-[80px]">
            to care about your
          </span>
          <span className="text-[#054166] ml-5 font-bold text-[80px] 2xl:text-[120px]">
            structure
          </span>
        </p>
      </div>
      <div className="w-full h-[600px] relative mt-[90px]">
        <Image
          src={"/images/home-banner.jpg"}
          fill
          alt=""
          className="object-cover object-center"
        />
      </div>
      <Stats />
      <div className="flex flex-col px-[146px] mt-32">
        <div className="flex flex-row relative">
          <div className="w-[840px] h-[560px] z-20 relative">
            <Image
              src={"/images/image-1.jpg"}
              fill
              alt=""
              className="object-cover object-center"
            />
          </div>
          <p className="text-[60px] self-center w-[650px] ml-10 text-black">
            One place for organizing & updating punctures easily.
          </p>
        </div>
        <div className="flex flex-row relative mt-[-100px]">
          <p className="text-[60px] w-[650px] ml-10 text-black self-end">
            One place for organizing & updating punctures easily.
          </p>
          <div className="w-[840px] h-[560px] relative">
            <Image
              src={"/images/image-2.jpg"}
              fill
              alt=""
              className="object-cover object-center ml-24"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-[40px] gap-12 items-center mt-[150px] px-[146px]">
        <h2 id="aboutus"></h2>
        <h2 className="text-[#054166] font-bold text-[80px]">About us</h2>
        <p>
          Our vision is to provide a dedicated platform that not only
          streamlines the organization and analysis of puncture data but also
          sets a new standard in precision and efficiency.
        </p>
      </div>
      <div className="flex flex-row gap-[110px] mt-[110px]">
        <div className="w-[840px] h-[856px] z-20 relative ml-[146px]">
          <Image
            src={"/images/image-3.jpg"}
            fill
            alt=""
            className="object-cover object-center"
          />
        </div>
        <p className="text-[50px] w-[650px] ml-10 self-center text-black">
          We strive to empower engineers and project managers with an intuitive
          and specialized tool that addresses the unique complexities of
          puncture management.
        </p>
      </div>
      <div className="flex flex-col text-[50px] gap-12 items-center mt-[50px]">
        <h2 id="services"></h2>
        <h2 className="text-[#054166] font-bold text-[80px]">Services</h2>
        <div className="flex flex-row gap-[110px] mt-[50px]">
          <p className="text-[50px] w-[650px] ml-10 self-center text-black">
            The challenge of efficiently documenting, tracking, and managing
            punctures in various structures over time is met head-on.
          </p>
          <div className="w-[840px] h-[856px] z-20 relative">
            <Image
              src={"/images/image-4.jpg"}
              fill
              alt=""
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
      <p className="self-center text-[40px] px-[146px] mt-[100px]">
        StructSure simplifies the process of storing data for civil engineering
        projects, making it faster and more convenient to save and access
        important information.
      </p>
      <span className="flex flex-row gap-4 text-[50px] justify-center mt-[200px]">
        <p className="text-[#054166] font-bold text-[50px]">Create account</p>
        <p>to better manage your time, your team & your punctures!</p>
      </span>
      <div className="w-full relative h-[336px] mt-[400px]">
        <Image
          src={"/images/skyline.png"}
          fill
          alt=""
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
