import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
//react icon for resume import from react-icons
import { MdOutlineContactPage } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <nav className="z-20  mb-10  py-6 mx-0 flex justify-center items-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        id="main"
        className="m-8 px-20 flex items-center justify-center gap-4 text-4xl bg-gray-500 p-4 rounded-full nav-gradient"
      >
        <motion.a
          href="https://linkedin.com/in/contactyashraj"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/miikkuu"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://twitter.com/mikku_exe"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </motion.a>

        <motion.a
          href="https://drive.google.com/file/d/1sLWg8af33INfstSqzYHxdv0WW0afnvAI/view?usp=sharing"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineContactPage />
        </motion.a>

        <motion.a
          href="mailto:your-email@example.com"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <MdEmail />
        </motion.a>
      </motion.div>
    </nav>
  );
};
