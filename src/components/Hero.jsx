import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pp/1.png";
import { motion } from "framer-motion";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: delay,
    },
  },
});

export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-14 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div id="texts" className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.5}
              className="pb-10 lg:ml-[-20px] text-6xl font-thin tracking-tighter lg:mt-10 lg:text-8xl z-10"
            >
              <AnimatedTextCharacter text="Yashraj Singh" />
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              animate="visible"
              className="bg-gradient-to-r  from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent z-10 "
            >
              {" "}
              Full Stack Devloper{" "}
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter z-10  "
              dangerouslySetInnerHTML={{ __html: HERO_CONTENT }}
            />
          </div>
        </div>
        <div id="logos" className="caret-transparent w-full  lg:p-8 relative pb-40  m-10">
        <motion.img
            className=" z-10      
              absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
              -ml-[30%]
              -mt-[45.5%]
               h-[285%]
               w-[60%]
              lg:w-[100%] lg:h-[230%] lg:-ml-[30%] lg:-mt-[86%]
              xl:w-[70%] xl:-ml-[15%] xl:-mt-[61.5%] xl:h-[265%]              
              
              "
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.5}
            transition={{ duration: 0.5, delay: 0 }}
            src={profilePic}
            alt="profile"
          />

          <motion.svg
            className="absolute left-1/2 top-[150%] transform -translate-x-1/2 -translate-y-[100%]
            h-[250px] w-[250px]
            lg:h-[400px] lg:w-[400px] lg:top-[120%] lg:left-[70%]
            "
            fill={"transparent"}
            viewBox={"0 0 506 506"}
            xmlns={"http://www.w3.org/2000/svg"}
          >
            <defs>
              <linearGradient
                id="custom-gradient"
                gradientTransform="rotate(90)"
              >
                <stop offset="0%" stopColor={"rgba(235, 70, 70, .7"} />{" "}
                {/* Replace with the start color of your custom gradient */}
                <stop offset="100%" stopColor="rgba(173, 51, 249, .7" />{" "}
                {/* Replace with the end color of your custom gradient */}
              </linearGradient>
            </defs>
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="url(#custom-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </div>
      </div>
    </div>
  );
};
