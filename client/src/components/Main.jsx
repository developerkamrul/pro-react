import React from "react";

const Main = () => {
  return (
    <div className="row mt-3 ">
      <div className="greet-img pt-5 col-md-6  ">
        <br />
        <h3 className="text-left greet-text">Hi</h3>
        <h1 className="greet-name">I'm KAMRUL ISLAM</h1>
        <h4 className="info">Full Stack Web Developer</h4>
        <h5 className="">ReactJS,Node.js,MongoDB </h5>
        <button className="bt btn-primary btn-lg mt-3">Resume</button>
      </div>
      <div className="col-md-6 ">
        <img src="images/bg.png" alt="" className="mt-5 img-fluid" />
      </div>
    </div>
  );
};

export default Main;
