import ProductPageSection from "@/components/ProductPageSection";
import React from "react";

export default function Page() {
  return (
    <>
      <ProductPageSection
        logo="/images/project/p2logo.svg"
        logoBgColor="#2A1F88"
        title="CAREERAI"
        description="
CareerAI is a free AI-powered tool that helps users create ATS-friendly resumes and cover letters, track job applications, and even auto-fill forms with a Chrome extension. It also offers a virtual assistant to apply for jobs on your behalf."
        tags={["Web Design", "UI/UX Design"]}
        topImage="/images/project/careerai/inside1.png"
        bottomImage="/images/project/careerai/inside2.png"
        visitLink="https://careerai.app"
      />
      {/* <section className="my-16 mt-0 w-full flex items-center justify-center flex-col ">
        <p className="w-[720px] max-w-[90%] text-center text-2xl mb-[40px]">
          &quot;Working with Rikesh was a seamless and inspiring experience. As
          the UI/UX designer he brought clarity to our vision and transformed
          complex LMS requirements into intuitive, user-friendly designs. His
          communication was clear, timelines were respected, and the final
          outcome helped us deliver a product that truly resonates with users.
          I’d highly recommend Rikesh to any team looking for a thoughtful and
          creative designer.&quot;
        </p>
        <p className="text-center text-2xl font-semibold">Maven Solutions</p>
        <p className="text-center text-xl ">Co Founder</p>
      </section> */}
    </>
  );
}
