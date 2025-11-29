import "./App.scss"
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Project from "./components/project/project";
import Social from "./components/social/social";
import AboutMe from "./components/about/aboutme";
import AboutMe1 from "./components/about1/aboutme1";

const App = () => {
  return <div>
    <section id="INFO">
      <Navbar/>
      <Hero/>
    </section>
    <section id="ABOUT ME">
      <AboutMe />
    </section>
    <section>
      <AboutMe1 />
    </section>
    <Project />
    <section id="SOCIAL"><Social /></section>
  </div>;
};

export default App;
