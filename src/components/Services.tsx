import { useState } from "react";
import ServiceCard from "./ServiceCard";

export default function Services({
  services,
}: {
  services: {
    firstPart: string;
    secondPart: string;
    image: string;
    description: string;
  }[];
}): any {
  const [hovered, setIsHovered] = useState<number>(0);
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 w-full">
      {services.map((service, idx) => {
        return (
          <ServiceCard
            key={idx}
            id={idx}
            firstPart={service.firstPart}
            secondPart={service.secondPart}
            description={service.description}
            image={service.image}
            setIsHovered={setIsHovered}
            hovered={hovered}
          />
        );
      })}
    </div>
  );
}
