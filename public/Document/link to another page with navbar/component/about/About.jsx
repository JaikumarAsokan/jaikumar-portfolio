import React from "react";
import AboutCSS from "./About.module.css";
import AboutImg from "../../assets/Jaikumar A_about.png";

function About() {
  return (
    <div className={AboutCSS.about}>
      <div className={AboutCSS.aboutTitle}>
        <h1>About me</h1>
      </div>

      <div className={AboutCSS.aboutSecion}>
        <div className={AboutCSS.aboutLeft}>
          <img src={AboutImg} alt="Jaikumar A" />
        </div>

        <div className={AboutCSS.aboutRight}>
          <div className={AboutCSS.aboutPara}>
            <p>I am Fresher</p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and detication I
              bring to each project
            </p>
          </div>
          <div className={AboutCSS.skills}>
            <div className={AboutCSS.skill}>
              <h2>Skills</h2>
              <p>Html</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>React js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
