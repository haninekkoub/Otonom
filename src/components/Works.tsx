import { useState } from "react";
import CtaButton from "./CtaButton";
import Project from "./project";

export default function Works() {
  const [backgroundColor, setBackgroundColor] = useState("#EAF5FB");

  const handleBackgroundChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <section
      className="w-full px-4 md:px-[12.5vw] py-16"
      style={{
        backgroundColor,
        transition: "background-color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      <div className="md:w-[23.88vw] mx-auto mb-16 text-blue">
        <h2 className="text-xl md:text-3xl font-bold text-center pb-2 leading-[123%]">
          Our Pride <br /> & Joy
        </h2>
        <p className="text-base text-meduim text-center opacity-50 leading-[178%]">
          Celebrating the projects that we're most proud of.
        </p>
      </div>
      <Project
        onBackgroundChange={handleBackgroundChange}
        backgroundColor={backgroundColor}
      />
      <CtaButton />
    </section>
  );
}
