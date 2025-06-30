import ProductPageSection from "@/components/ProductPageSection";
import React from "react";

export default function Page() {
  return (
    <>
      <ProductPageSection
        logo="/images/project/p1logo.svg"
        logoBgColor="#014066"
        title="AGILE ACADEMY"
        description="Agile Academy is a professional learning platform focused on Agile, Scrum, and leadership development. The design emphasizes simplicity, clarity, and user engagement making it easy for learners to explore courses, track progress, and stay motivated."
        tags={["Web Design", "UI/UX Design"]}
        topImage="/images/project/agile/inside.png"
        bottomImage=""
        visitLink="https://www.agileacademy.io/"
      />
    </>
  );
}
