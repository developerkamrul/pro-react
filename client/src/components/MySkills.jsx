import React from "react";
import "./css/myskill.css";

const MySkills = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img src="./images/skills.png" alt="" className="img-fluid" />
        </div>
        <div className=" mt-5 col-md-6">
          <div className="skill-group ">
            <div className="label d-flex justify-content-between">
              <h4 className="skill-name">HTML5</h4>
              <h4 className="skill-ammount ml-auto">95%</h4>
            </div>
            <span className="bar">
              <span className="html"></span>
            </span>
          </div>
          <div className="skill-group">
            <div className="label d-flex justify-content-between">
              <h4 className="skill-name">CSS3</h4>
              <h4 className="skill-ammount ml-auto">95%</h4>{" "}
            </div>
            <span className="bar">
              <span className="css"></span>
            </span>
          </div>

          <div className="skill-group">
            <div className="label d-flex justify-content-between">
              <h4 className="skill-name">Javascript </h4>
              <h4 className="skill-ammount ml-auto">85%</h4>
            </div>
            <span className="bar">
              <span className="js"></span>
            </span>
          </div>
          <div className="skill-group">
            <div className="label d-flex justify-content-between">
              <h4 className="skill-name">ReactJS</h4>
              <h4 className="skill-ammount ml-auto">80%</h4>
            </div>
            <span className="bar">
              <span className="reactjs"></span>
            </span>
          </div>
          <div className="skill-group">
            <div className="label d-flex justify-content-between">
              <h4 className="skill-name">Redux</h4>
              <h4 className="skill-ammount ml-auto">90%</h4>
            </div>
            <span className="bar">
              <span className="redux"></span>
            </span>
          </div>
          <div className="skill-group">
            <div className="label d-flex justify-content-between">
              <h4 className="skill-name">NodeJS</h4>
              <h4 className="skill-ammount ml-auto">70%</h4>
            </div>
            <span className="bar">
              <span className="nodejs"></span>
            </span>
          </div>
          <div className="skill-group">
            <div className="label d-flex justify-content-between">
              <h4 className="skill-name">MongoDB</h4>
              <h4 className="skill-ammount ml-auto">70%</h4>
            </div>
            <span className="bar">
              <span className="mongodb"></span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
