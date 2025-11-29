import "./about.scss"
import Education from "../education/education";
import Summary from "../bio/summary";
import { TbAlignBoxLeftMiddle } from "react-icons/tb";

const About = () => {
    return(
        <div className="abt0">
          <div className="at0">
          <h1 className="title">Get To</h1>
          <h1 className="title1">Know Me<> <TbAlignBoxLeftMiddle /></></h1>
        </div>
        <div className="acontainer0">
          <div className="about0">
            <div className="bio">
              Bio
            </div>
            <div className="cards">
              <Summary />
            </div>
          </div>
          <div className="education">
            <div className="edubio">
              Education
            </div>
            <div className="educards">
              <Education />
            </div>
          </div>
        </div>
        </div>
    );
}

export default About