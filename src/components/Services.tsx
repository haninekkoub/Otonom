import { useState } from "react";
import ServiceCard from "./ServiceCard";

export default function Services({
  services,
}: {
  services: { name: string; image: string; description: string }[];
}) {
  const [hovered, setIsHovered] = useState<number>(0);
  return (
    <div className="flex justify-between items-center gap-4 container h-[65vh] xl:h-[50vh]">
      {services.map((service, idx) => {
        return (
          <ServiceCard
            key={idx}
            id={idx}
            name={service.name}
            description={service.description}
            image={service.image}
            setIsHovered={setIsHovered}
            hovered={hovered}
          />
        );
      })}
      ;
    </div>
  );
}
