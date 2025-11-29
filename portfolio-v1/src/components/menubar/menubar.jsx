import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./menubar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(2000px at 200% 50%)",
    transition: {
      delay: 0.05,
      type: "spring",
      stiffness: 90,
      damping: 40,
    },
  },
  closed: {
    clipPath: "circle(0px at 200% 50%)",
    transition: {
      delay: 0.05,
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
};
const Menubar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="menubar" animate={open ? "open" : "closed"}>
      <motion.div className="menubar-container" variants={variants}>
        <Links setOpen={setOpen}/>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Menubar;