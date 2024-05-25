import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiRedis } from "react-icons/si";

import { motion } from "framer-motion";

const iconVariants = (durations) => ({
  initial: { y: -10 },

  animate: {
    y: [10, -10],

    transition: {
      duration: durations,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl ">Technologies</h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 text-center"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p>React</p>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 text-center"
        >
          <FaNodeJs className="text-7xl text-green-500" />
          <p>Node</p>
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 text-center"
        >
          <SiAmazonaws className="text-7xl text-yellow-600" />
          <p>AWS</p>
        </motion.div>

        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 text-center"
        >
          <SiRedis className="text-7xl text-red-700" />
          <p>Redis</p>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 text-center"
        >
          <SiPostgresql className="text-7xl text-sky-700" />
          <p>Postgres</p>
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 text-center"
        >
          <SiMongodb className="text-7xl text-green-500" />
          <p>MongoDB</p>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 text-center"
        >
          <SiDocker className="text-7xl text-cyan-400 " />
          <p>Docker</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
