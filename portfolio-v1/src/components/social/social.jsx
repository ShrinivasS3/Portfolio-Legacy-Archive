import "./social.scss"
import { FiArrowUpRight } from "react-icons/fi";
import {motion} from "framer-motion";

const Social = () => {

    return(
        <div className="pag">
        <div className="social">
            <div className="SocNav">
                <h3>SOCIALS</h3>
                <motion.div className="menula">
                        <a href="#INFO">INFO</a>
                        <a href="#PROJECTS">PROJECTS</a>
                        <a href="https://shrinivas.tech/" target="_blank" rel="noopener noreferrer">BLOG</a>
                </motion.div>
                <a href="https://www.linkedin.com/in/shrinivas-sesadri-52118a263/" target="_blank" rel="noopener noreferrer"><h2 className="linkedin">LinkedIn<FiArrowUpRight/></h2></a>
            </div>
            <div className="social-container">
            {/* <p> */}
                <a href="https://github.com/ShrinivasS3" target="_blank" rel="noopener noreferrer"><div className="p1">
                    <div>A computer science undergraduate with a head full of algorithms and a heart set on exploring the frontiers of AI research.</div>
                    <div><b><h2>GITHUB <FiArrowUpRight /></h2></b></div>
                </div></a>
                <div className="p2">But when I’m not diving into code, you’ll find me lost in a world of vibrant colours and intricate lines....</div>
                <a href="https://www.behance.net/shrinivsesadri1" target="_blank" rel="noopener noreferrer"><div className="p3">
                    <div>My camera is my passport to capturing the world’s magic, from sunrise hues to cityscapes bustling with life.</div>
                    <div><b><h2>Through the Lens <FiArrowUpRight /></h2></b>(Behance)</div>
                </div></a>
                <a href="https://www.deviantart.com/3ss123" target="_blank" rel="noopener noreferrer"><div className="p4">
                    <div><b><h2>Drawing Dreams<FiArrowUpRight /></h2></b>(DeviantArt)</div>
                    <div>Pencil, brushes and computer tools help me create an imaginative and passionate world out of blank canvases.</div>
                </div></a>
                <a href="https://www.artstation.com/shrinivassesadri8" target="_blank" rel="noopener noreferrer"><div className="p5">
                    <div>My playgrounds are Blender and Unreal Engine, where I create interactive experiences and bring futuristic concepts to life.</div>
                    <div><b><h2>3D Worlds<FiArrowUpRight /></h2></b>(ArtStation)</div>
                </div></a>
                <div className="p6">
                    <div><b><h2>Melodies & Harmony</h2></b></div>
                    <div>My fingers dance across the piano keys, weaving tales through classical pieces and my compositions.</div>
                </div>
                <div className="p7">
                    <div>When I’m not conquering algorithms, you’ll find me ace-ing smashes on the badminton court, keeping my competitive spirit alive.</div>
                    <div><b><h2>Beyond the Code</h2></b></div>
                </div>
                <div className="p8">
                    My diverse hobbies are more than just pastimes, they continuously feed me to push frontiers in AI. My artistic eye lends a unique
                    perspective to problem-solving, and my musical knowledge allows me to understand complex algorithms through the lens of harmony and rhythm.<br /><br />
                    <br />This trip is just getting started, and I’m excited to see where it takes me while also enjoying the journey....
                </div>
            </div>
        </div>
        </div>
    );
}

export default Social