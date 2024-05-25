import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
export const About = () => {
  return (
    <div className=" pointer-events-none border-b border-neutral-900 pb-4 -mt-5">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500">Me</span>
      </h2>

      <div className=" caret-transparent flex flex-wrap justify-center items-center lg:justify-normal">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center lg:w-1/2 lg:p-8"
        >
          <div className="pointer-events-none flex rounded-2xl items-center justify-center overflow-hidden h-[20rem] w-[19rem] lg:w-[25rem]  ">
            <img
              className="rounded-2xl object-cover size-[170%] lg:size-[200%]  object-right select-none "
              src={aboutImg}
              alt="profile"
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/3"
        >
          <div className="flex  flex-wrapjustify-center lg:justify-start">
            <p
              className="my-2 max-w-xl text-base py-6"
              dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
