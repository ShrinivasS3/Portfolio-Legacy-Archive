import "./navbar.scss"
import { SlGlobe } from "react-icons/sl";
import { motion} from "framer-motion";
import Menubar from "../menubar/menubar";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <motion.span
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:1}}>
                        SHRINIVAS
                </motion.span>
                <motion.div className="location"
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:1}}
                >
                    <div className="icon">
                        <SlGlobe />
                    </div>
                    <span>
                        TN, INDIA
                    </span>
                </motion.div>
                <motion.div className="menu">
                        <Menubar/>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar;