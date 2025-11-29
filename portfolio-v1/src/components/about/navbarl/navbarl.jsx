import "./navbarl.scss"
import { SlGlobe } from "react-icons/sl";
import { motion} from "framer-motion";

const NavbarL = () => {
    return (
        <div className="navbarl">
            <div className="navbarl-container">
                <motion.span className="navname"
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:1}}>
                        SHRINIVAS
                </motion.span>
                <motion.div className="locationl"
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:1}}
                >
                    <div className="iconl">
                        <SlGlobe />
                    </div>
                    <span>
                        TN, INDIA
                    </span>
                </motion.div>
                <motion.div className="menul">
                        <a href="#INFO">INFO</a>
                        <a href="#PROJECTS">PROJECTS</a>
                        <a href="#SOCIAL">SOCIAL</a>
                </motion.div>
            </div>
        </div>
    )
}

export default NavbarL;