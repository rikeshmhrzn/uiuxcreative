import React from "react";
import LatestProjectCard from "./Shared/LatestProjectCard";

export default function LatestProject() {
  return (
    <div
      className="my-width m-auto pt-[100px] pb-[40px] sm:py-[121px]   flex items-center justify-center flex-col"
      id="work"
    >
      <h2 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]  font-extrabold mb-10 sm:mb-[110px] relative">
        OUR LATEST WORKS
        <span className="text-2xl lg:text-4xl font-cursive bg-gradient-to-r from-[#4776E6] to-[#8E54E9] text-transparent bg-clip-text absolute top-[-30px] right-0 sm:right-[-80px] pr-1 rotate-[5deg]">
          Since 2021
        </span>
      </h2>
      <div className="w-full flex flex-col gap-[65px]">
        <LatestProjectCard
          title="AGILE ACADEMY"
          description="Agile Academy is a professional learning platform focused on Agile, Scrum, and leadership development. "
          img1="/images/project/p11.svg"
          img2="/images/project/p12.svg"
          link="/agile-academy"
          img="/images/project/agile/Agile1.png"
        />
        <LatestProjectCard
          title="CAREERAI"
          description="CareerAI is a free AI-powered tool that helps users create ATS-friendly resumes and cover letters, track job applications, and even auto-fill forms with a Chrome extension."
          img1="/images/project/p21.png"
          img2="/images/project/p22.png"
          // secondImageClass="!md:rotate-[50deg]"
          link="/careerai"
          img="/images/project/careerai/Career1.png"
        />
      </div>
    </div>
  );
}
