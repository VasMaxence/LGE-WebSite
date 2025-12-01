"use client";

import { motion } from "framer-motion";
import CwdBottomIcon from "../icon/cubeWithDot/CwdBottomIcon";
import CwdTopIcon from "../icon/cubeWithDot/CwdTopIcon";

interface Porps {
  title: string;
  onClick: () => void;
  color: "primary" | "dark"
}

export default function Button({ title, onClick, color = "primary" }: Porps) {
  return (
    <motion.div
      whileHover={{ scale: .96 }}
      whileTap={{ scale: .9 }}
    >
      <button onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
        className="flex flex-row items-center gap-x-6 cursor-pointer"
        style={{
          backgroundColor: color === "primary" ? "var(--main)" : "var(--background)",
          color: color === "primary" ? "var(--background)" : "var(--main)",
          padding: "5px 6px",
        }}
      >
        <CwdTopIcon height={45} color={"var(--background)"} />
        <span className="text-dark joyful-font text-xl uppercase">{title}</span>
        <CwdBottomIcon height={45} color={"var(--background)"} />
      </button>
    </motion.div>
  );
}

