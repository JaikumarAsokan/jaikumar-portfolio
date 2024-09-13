import React from "react";
import MyProjectCSS from "./MyProject.module.css";
import myWorkData from "../../assets/mywork_data";

function MyProject() {
  return (
    <div id="project" className={MyProjectCSS.myProject}>
      <div className={MyProjectCSS.projectTitle}>
        <h1>My Project</h1>
      </div>

      <div className={MyProjectCSS.container}>
        {myWorkData.map((value, index) => {
          const { w_no, w_name, w_img } = value;
          return (
            <div>
              <img key={index}src={w_img} alt="" />
              <p>{w_no}</p>
              <p>{w_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyProject;
