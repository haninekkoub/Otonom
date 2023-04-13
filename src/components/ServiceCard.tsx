import clsx from "clsx";
export default function ServiceCard({
  firstPart,
  secondPart,
  description,
  image,
  setIsHovered,
  hovered,
  id,
}: {
  firstPart: string;
  secondPart: string;
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
          "group overflow-hidden h-full w-1/3 grow bg-[#F2F2F5]",
          "ease duration-300 cursor-pointer rounded-xl relative",
          "flex gap-3 px-4 py-6 ",
        ],
        {
          "flex-col justify-start items-start ": firstComponent,
          "flex-row justify-start items-end": secondComponent,
          "flex-col justify-between items-start ": thirdComponent,
          "w-[65%]": hoverState,
          "bg-violet": firstComponent && hoverState,
          "bg-[#FF742D]": secondComponent && hoverState,
          "bg-indigo-500": thirdComponent && hoverState,
        }
      )}
    >
      <div>
        <div className="h-[28px] w-[25px] bg-black opacity-30 group-hover:opacity-100"></div>
        <h4 className="text-xl font-meduim text-white leading-[171%] whitespace-nowrap">
          { firstPart} <br /> {secondPart}
        </h4>
      </div>
      <p className= {clsx( [ "text-sm font-normal text-white leading-[200%] relative opacity-0"],
        {
          "w-[18vw]": firstComponent,
          "w-[22vw]": secondComponent,
          "w-[20vw]": thirdComponent,
          "opacity-100": hoverState,
          
        }
      )}>
        {description}
      </p>
      <div
        className={clsx( ["absolute right-0 h-3/5 ",],
          {
            "bottom-0 w-[50%]": firstComponent,
            "top-0 w-[65%]": secondComponent,
            "top-[30%] w-[50%]": thirdComponent,
          }
        )}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "top left",
        }}
      ></div>
    </div>
  );
}
