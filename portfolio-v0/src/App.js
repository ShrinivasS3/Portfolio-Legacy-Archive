import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./styles.css";
import Summary from "./Components/summary.js";
import Interests from "./Components/interests.js";
import Skills from "./Components/skills.js";
import Profiles from "./Components/profiles.js";
import Projects from "./Components/projects.js";
import Education from "./Components/education.js";
import Experience from "./Components/experience.js";

const contents = [
  {
    id: 1,
    title: "Shrinivas Sesadri",
    content: <Profiles/>,
  },
  {
    id: 2,
    title: "Summary",
    content: <Summary/>,
  },
  {
    id: 3,
    title: "Education",
    content: <Education/>,
  },
  {
    id: 4,
    title: "Skills",
    content: <Skills/>,
  },
  {
    id: 5,
    title: "Experience",
    content: <Experience/>,
  },
  {
    id: 6,
    title: "Projects",
    content: <Projects/>,
  },
  {
    id: 7,
    title: "Interests",
    content: <Interests/>,
  },
];

function Display({ title, content }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 325]);
  return (
    <section>
      <motion.div ref={ref} className="cardholder">
        <motion.div style={{ y }} className="card">
          {content}
        </motion.div>
      </motion.div>
      <motion.h2 style={{ y }}>{title}</motion.h2>
    </section>
  );
}

export default function App() {
  return (
    <div className="App">
      {contents.map((cont) => (
        <Display key={cont.id} title={cont.title} content={cont.content}/>
      ))}
    </div>
  );
}