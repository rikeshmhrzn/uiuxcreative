import React from "react";
import LabelSparkle from "./Shared/LabelSparkle";
import NavBar from "./NavBar";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="pt-[200px] sm:pt-[400px] pb-[40px] sm:pb-[132px] h-fit sm:h-screen bg-[url('/herogradient.svg')] bg-cover bg-center flex flex-col items-center justify-center text-white text-center">
      <NavBar />
      <div className="hidden sm:block my-width m-auto text-black ">
        <div className="w-full flex-col lg:flex-row  flex items-center justify-between gap-12 lg:gap-0">
          <div className="lg:w-[805px] text-[25px] md:text-[30px] leading-[110%] text-center lg:text-left">
            Hi! Meet your trusted design partner for
            <br />
            websites, apps, and digital products.
          </div>
          <div>
            <LabelSparkle
              className="bg-[#FFCF24]  lg:rotate-10 lg:translate-y-[-100px] transition-all hover:rotate-0 font-bold "
              text="Industry-leading Design"
              isLeft={false}
            />
          </div>
        </div>
        <h1 className=" mt-5 md:mt-0 text-[45px] sm:text-[50px] md:text-[100px] lg:text-[183px]  font-[900] leading-[120%] [@media(min-width:1920px)]:text-[220px] ">
          UIUXCREATIVE
        </h1>
      </div>
      <div className="block sm:hidden my-width m-auto text-black ">
        <div className="w-full flex-row  flex items-center justify-center mb-[9px]">
          <LabelSparkle
            className="bg-[#FFCF24]  lg:rotate-10 lg:translate-y-[-100px] transition-all hover:rotate-0 font-bold "
            text="Industry-leading Design"
            isLeft={false}
            small
          />
        </div>
        <h1 className=" text-[45px]  font-[900] leading-[120%] mb-2.5">
          UIUXCREATIVE
        </h1>
        <div className=" text-[16px]  leading-[150%] text-center ">
          Hi! Meet your trusted design partner for
          <br />
          websites, apps, and digital products.
        </div>
        <div className="mt-[30px] flex items-center justify-center">
          <Link
            href="https://wa.me/9779813270713?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="button-gradient p-[13px_38px] rounded-[100px] text-white font-[600] text-[14px]"
          >
            Start Project
          </Link>
        </div>
      </div>
    </div>
  );
}
