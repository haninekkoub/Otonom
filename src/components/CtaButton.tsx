export default function CtaButton() {
  return (
    <div className="group flex flex-col md:flex-row gap-2 md:gap-11 justify-center items-center py-8 px-11 md:px-0 w-full mt-16 bg-darkbackground rounded-xl cursor-pointer overflow-hidden">
      <div className="flex flex-col gap-2 items-center font-meduim">
        <h4 className="text-white text-lg md:text-xl">You have a project?</h4>
        <p className="text-gray text-base opacity-50 text-center">
          Contact us and let’s collaborate!
        </p>
      </div>
      <div className="flex flex-col relative group-hover:animate-[rotateY_2s_ease_infinite]">
        <span className=""></span>
        <span className="-translate-y-[425%] absolute top-0 left-0"></span>
      </div>
    </div>
  );
}
