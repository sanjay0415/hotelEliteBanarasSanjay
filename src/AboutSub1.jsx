import React from "react";
import "./AboutSub1.css";

function AboutSub1() {
  return (
    <>
      <div className="ownerInfo">
        <div className="aboutSub1Image">
          <img className="aboutSub1Img" src="ownerInfo/ownerImg.jpeg" alt="" />
        </div>
        <div className="education">
          <img className="educationImg" src="aboutFiles/download.jpg" alt="" />
          <p className="headingEdu1">Founder Education</p>

          <div className="ownerContent">
            <p className="headingEdu2">Schooling</p>
            <p className="collegeNames">Sharada Vidya Mandira, Kadugodi, Bangalore - 560067</p>

            <p className="headingEdu2">College</p>
            <p className="collegeNames">MVJ PU College, Channasandran Bangalore - 560068</p>

            <p className="headingEdu2">Graduation</p>
            <p className="collegeNames">
              Indian Institute of Information Technology Design and
              Manufacturing, Chennai - 600981
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSub1;
