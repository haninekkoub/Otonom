import React, { useState } from "react";
import Image2 from "../assets/Image2.png";
import Image1 from "../assets/Image3.png";
import Image3 from "../assets/Image4.png";
import Image4 from "../assets/Image1.png";

const Casestudys = [
  {
    name: "Grom Digital",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra amet ipsum risus egestas cursus habitant dictum quisque. ",
    id: 1,
    image: Image1,
    color: "#EAF5FB",
  },
  {
    name: "Pennywise",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra amet ipsum risus egestas cursus habitant dictum quisque. ",
    id: 2,
    image: Image2,
    color: "#F5EAFB",
  },
  {
    name: "MotionUI",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra amet ipsum risus egestas cursus habitant dictum quisque. ",
    id: 3,
    image: Image3,
    color: "#F5E9E9",
  },
  {
    name: "Boarded",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra amet ipsum risus egestas cursus habitant dictum quisque. ",
    id: 4,
    image: Image4,
    color: "#E9EAF5",
  },
];

export default function Project({ onBackgroundChange, backgroundColor }) {
  const [hoveredItemId, setHoveredItemId] = useState(1);
  const [imageEntering, setImageEntering] = useState(false);

  const handleMouseEnter = (
    id: React.SetStateAction<number>,
    color: string
  ) => {
    setImageEntering(true); // Set the entering state

    // After a short delay, change the hoveredItemId
    setTimeout(() => {
      setHoveredItemId(id);

      // Use a slight delay before resetting the entering state
      setTimeout(() => {
        setImageEntering(false); // Reset the entering state
        onBackgroundChange(color); // Call the function to change the background color
      }, 50); // Adjust the delay as needed
    }, 300); // Adjust the delay as needed
  };

  const enteringImageClass =
    "transform translate-y-[110%] opacity-80 transition-transform duration-500 ease-in-out transition-opacity duration-500 ease-in-out";

  const enteredImageClass =
    "transform translate-y-0 opacity-100 transition-transform duration-500 ease-in-out transition-opacity duration-500 ease-in-out";

  return (
    <div className="flex justify-between items-start">
      <div className="h-[500px] w-1/3 overflow-hidden sticky top-[10%] rounded-xl hidden lg:block">
        <img
          src={Casestudys.find((item) => item.id === hoveredItemId).image}
          alt="Project Image"
          className={`bg-no-repeat bg-cover h-full w-full ${
            imageEntering ? enteringImageClass : enteredImageClass
          }`}
        />
      </div>
      <div className="lg:w-1/2 flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-4 jusfity-start items-center ">
        {Casestudys.map((Casestudy, i) => {
          return (
            <div
              className="flex justfiy-start items-center gap-4 bg-lightbackground text-blue px-6 py-4 rounded-xl cursor-pointer"
              key={i}
              onMouseEnter={() =>
                handleMouseEnter(Casestudy.id, Casestudy.color)
              }
            >
              <div className="w-fit">
                <h4 className="text-xl font-medium mb-2 font-Eudoxus">
                  {Casestudy.name}
                </h4>
                <p className="text-base w-11/12 leading-[2rem]">
                  {Casestudy.description}
                </p>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-black"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
