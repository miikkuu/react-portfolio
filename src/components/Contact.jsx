import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-row justify-between items-center ">
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="border-b mx-auto border-neutral-900 pb-10"
      >
        <h1 className="my-10 text-center text-4xl">Get in Touch</h1>

        <div className="text-center tracking-tighter">
          <p className="my-4">{CONTACT.address}</p>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <a href="#" className="border-b ">
            {CONTACT.email}
          </a>
        </div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "red" }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className=" text-center  bottom-10 right-10 bg-purple-800 text-white p-4 rounded-full custom-gradient  "
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Top
      </motion.button>
    </div>
  );
};

export default Contact;
