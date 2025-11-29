import "./about1.scss"
import Skill from "../skill/skill";
import Interest from "../interest/interest";
import Experience from "../experience/experience";

const About1 = () => {
    return(
        <div className="abt1">
          <div className="acontainer1">
            <div className="skill">
              <div className="skillbio">
                Skills
              </div>
              <div className="skillcards">
                <Skill />
              </div>
            </div>
            <div className="exper">
              <div className="ex">
                Experience
              </div>
              <div className="excards">
                <Experience />
              </div>
            </div>
            <div className="interest">
              <div className="intbio">
                Interests
              </div>
              <div className="intcards">
                <Interest />
              </div>
            </div>
          </div>
        </div>
    );
}

export default About1