import About01 from "../assets/About_01.png";
import About02 from "../assets/About_02.png";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";

export default function About() {
  const { scrollYProgress } = useScroll();

  const y1 = useSpring(useTransform(scrollYProgress, [0.3, 0.55], [0, -25]), {
    stiffness: 100,
    damping: 60,
    restDelta: 0.001,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0.4, 0.65], [0, -35]), {
    stiffness: 100,
    damping: 60,
    restDelta: 0.001,
  });

  return (
    <motion.section className="bg-darkbackground w-[100%] px-4 md:px-8 lg:px-[5vw] py-16">
      <motion.div className="flex flex-col lg:flex-row justify-center lg:items-end gap-4  lg:gap-28 relative pb-16 ">
        <motion.div className="w-[90vw] md:w-[50vw] lg:w-[30vw] h-[40vh] md:h-[35vw] lg:h-[30vw] lg:mt-16 relative overflow-hidden">
          <motion.div
            className="w-[100vw] md:w-[55vw] lg:w-[35vw] h-[50vh] md:h-[40vw] lg:h-[35vw]  bg-no-repeat bg-cover absolute top-0"
            style={{ y: y1, backgroundImage: `url(${About01})` }}
          />
        </motion.div>
        <div>
          <h2 className="text-xl md:text-2xl lg:text-aboutTitle text-white font-bold w-[80vw] md:w-[50vw] lg:w-[36.6vw] static md:absolute  md:top-[10%] lg:top-0 md:left-2/3 lg:left-1/2 md:transform md:-translate-x-1/2 pb-4 md:pb-0">
            Elevating Your Brand with Immersive Web Experiences
          </h2>
          <h5 className="text-base md:text-ms lg:text-sm xl:text-lg 2xl:text-[1.5rem] 3xl:text-xl leading-[160%] text-[#D9DDF2] text-justify w-[90vw] lg:w-[36vw] leading-[160%]">
            At Otonom, we specialize in creating unique and immersive web
            experiences that help modern brands stand out in the digital world.
            Our focus on customization ensures that each project we undertake is
            tailored to meet the unique needs of our clients, resulting in a web
            experience that is truly one-of-a-kind.
          </h5>
        </div>
      </motion.div>
      <motion.div className="flex flex-col lg:flex-row-reverse justify-center lg:items-end gap-4 lg:gap-28 relative">
        <motion.div className="w-[90vw] md:w-[50vw] lg:w-[30vw] h-[40vh] md:h-[35vw] lg:h-[30vw] lg:mt-16 relative overflow-hidden">
          <motion.div
            className="w-[100vw] md:w-[55vw] lg:w-[35vw] h-[50vh] md:h-[40vw] lg:h-[35vw] bg-no-repeat bg-cover absolute top-0"
            style={{ y: y2, backgroundImage: `url(${About02})` }}
          />
        </motion.div>

        <div>
          <h2 className="text-xl  md:text-2xl lg:text-aboutTitle text-white font-bold w-[80vw] md:w-[50vw] lg:w-[30vw] lg:text-right static md:absolute md:top-[10%] lg:top-0 md:left-2/3 lg:left-1/2 md:transform md:-translate-x-1/2 pb-4 md:pb-0">
            Tailored Web Design Solutions for Modern Brands
          </h2>
          <h5 className="text-base md:text-ms lg:text-sm xl:text-lg 2xl:text-[1.5rem] 3xl:text-xl leading-[160%] text-[#D9DDF2] text-justify w-[90vw] lg:w-[36vw] leading-[160%]">
            At Otonom, we specialize in creating unique and immersive web
            experiences that help modern brands stand out in the digital world.
            Our focus on customization ensures that each project we undertake is
            tailored to meet the unique needs of our clients, resulting in a web
            experience that is truly one-of-a-kind.
          </h5>
        </div>
      </motion.div>
    </motion.section>
  );
}
