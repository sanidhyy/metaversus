"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="Search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] loading-[30px] text-white">
        METAVERSUS
      </h2>
      <a
        href="https://github.com/sanidhyy/metaversus"
        target="_blank"
        rel="noreferrer noopener"
        title="Source Code"
      >
        <img
          src="/github.svg"
          alt="Menu"
          className="w-[24px] h-[24px] object-contain"
        />
      </a>
    </div>
  </motion.nav>
);

export default Navbar;
