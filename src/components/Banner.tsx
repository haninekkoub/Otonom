import banner_first from "../assets/banner_first.png";
import banner_second from "../assets/banner_second.png";
import banner_third from "../assets/banner_third.png";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

//style={{ scaleX }}
const BannerImages = [
  [{ url: banner_first }, { url: banner_second }, { url: banner_third }],
  [{ url: banner_second }, { url: banner_third }, { url: banner_first }],
  [{ url: banner_third }, { url: banner_first }, { url: banner_second }],
];

export default function Banner() {
  const { scrollYProgress } = useScroll();

  const scrollLeft = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [100, -200]),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );
  const scrollCenter = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [-400, 200]),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );
  const scrollRight = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-50, -300]),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  return (
    <section className="w-full h-[250px] lg:h-[320px] bg-[#F2F2F5] overflow-hidden relative">
      <motion.div className="flex gap-6 justify-center items-center rotate-12">
        <motion.div
          className="flex flex-col justify-center items-center gap-6 grow -pt-[150px] lg:pt-0"
          style={{ y: scrollLeft }}
        >
          {BannerImages[1].map((BannerImage, i) => {
            return (
              <motion.div
                key={i}
                className="w-[50vw] lg:w-full h-[150px] lg:h-[280px]"
                style={{
                  backgroundImage: `url(${BannerImage.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                }}
              />
            );
          })}
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center gap-6 grow pt-[150px] lg:pt-0"
          style={{ y: scrollCenter }}
        >
          {BannerImages[1].map((BannerImage, i) => {
            return (
              <motion.div
                key={i}
                className="w-[50vw] lg:w-full h-[150px] lg:h-[280px]"
                style={{
                  backgroundImage: `url(${BannerImage.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                }}
              />
            );
          })}
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center gap-6 grow -pt-[150px] lg:pt-0"
          style={{ y: scrollRight }}
        >
          {BannerImages[2].map((BannerImage, i) => {
            return (
              <motion.div
                key={i}
                className="w-[50vw] lg:w-full h-[150px] lg:h-[280px]"
                style={{
                  backgroundImage: `url(${BannerImage.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                }}
              />
            );
          })}
        </motion.div>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full gradienImage"></div>
    </section>
  );
}
