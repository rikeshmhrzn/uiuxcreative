import React from "react";
import greenArrow from "../../public/greenarrow.svg";
import Image from "next/image";
import LabelSparkle from "./Shared/LabelSparkle";

export default function StepsSection() {
  return (
    <div
      className="my-width m-auto py-[80px]  flex items-center justify-center flex-col"
      id="process"
    >
      <div className="block sm:hidden relative mb-5">
        <LabelSparkle
          className="bg-[#F3ABCB] md:rotate-[-15deg] transition-all hover:rotate-0  "
          text="Our Process"
          isLeft={true}
          small
        />
      </div>
      <h2 className="text-2xl md:text-[60px] font-extrabold mb-[50px] sm:mb-[110px]  uppercase text-center leading-[100%] relative">
        What OUR perfect
        <br /> collab looks like
        <Image
          src={greenArrow}
          width={150}
          alt="green arrow"
          className=" hidden md:inline-block  absolute right-[-220px]"
        />
      </h2>
      <div className="w-full flex flex-col gap-[65px] items-center justify-center relative">
        <div className="hidden sm:block relative lg:absolute left-0">
          <LabelSparkle
            className="bg-[#F3ABCB] md:rotate-[-15deg] transition-all hover:rotate-0 font-bold "
            text="Our Process"
            isLeft={true}
            small
          />
        </div>
        <div
          className="w-[600px] h-fit sm:h-[580px] max-w-full rounded-[100px]  overflow-hidden "
          style={{
            boxShadow: `
      inset 0px -4px 4px 0px #00000014,
      inset 0px 4px 4px 0px #FFFFFF52,
      inset 0px -40px 64px 0px #0000000A,
      inset 0px 32px 64px 0px #FFFFFF40,
      inset 0px -2px 2px 0px #FFFFFF66
    `,
          }}
        >
          <div className="h-[80px] sm:h-[120px] w-full bg-[#FFCF24]"></div>
          <div>
            {[
              "",
              "1. Book a Quick Discovery Call",
              "",
              "2. Seamless Onboarding & Kickoff",
              "",
              "3. Deliver Strategic Designs to ",
              "Help You Grow",
              "",
              "",
            ].map((item: string, index: number) => {
              return (
                <div
                  key={index}
                  className="text-[#4776E6] font-cursive border-[2px] border-[#f5f5f5] text-2xl md:text-[30px] h-[50px] leading-[30px] font-semibold"
                >
                  <span className={index === 6 ? "ml-16" : "ml-12"}>
                    {" "}
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
