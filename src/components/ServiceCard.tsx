import clsx from "clsx";
import { useState } from "react";

export default function ServiceCard({
  name,
  description,
  image,
  setIsHovered,
  hovered,
  id,
}: {
  name: string;
  description: string;
  image: string;
  setIsHovered: any;
  hovered: number;
  id: number;
}) {
  const hoverState = id === hovered;
  const firstComponent = id === 0;
  const secondComponent = id === 1;
  const thirdComponent = id === 2;

  return (
    <div
      onMouseEnter={() => setIsHovered(id)}
      className={clsx(
        [
          "group overflow-hidden w-[65%] h-full grow bg-[#DA33D0]",
          "ease duration-700 cursor-pointer rounded-xl relative",
          "flex flex-col justify-between gap-3 items-start pl-4 pt-8 target",
        ],
        {
          "": firstComponent,
          "flex-row justify-start": secondComponent,
          " ": thirdComponent,
          "bg-[#DA33D0] w-[95%]": hoverState && firstComponent,
        }
      )}
    >
      <div className="h-[28px] w-[25px] bg-black opacity-30 group-hover:opacity-100"></div>
      <h4 className="text-xl font-meduim text-white leading-[171%] title">
        {name}
      </h4>
      <p className="text-sm font-normal w-[20vw] text-white leading-[200%] paragraph">
        {description}
      </p>
      <div
        className="absolute bottom-0 right-0 h-1/2 w-[15vw]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "top left",
        }}
      ></div>
    </div>
  );
}
