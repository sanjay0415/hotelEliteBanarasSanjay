//react frontend

import React from "react";
import { useState } from "react";
import axios from "axios";
import "./AboutSub6.css";

function AboutSub6() {
  const [name, setName] = useState(""); //as it is string we use ""
  const [branch, setBranch] = useState("");
  const [feedback, setFeedback] = useState("");

  const addFeedback = () => {
    axios
      .post("http://localhost:3002/create", {
        name: name, //this 3 names should be same as other 3 names in backend part
        branch: branch,
        feedback: feedback,
      })
      .then(() => {
        console.log("success buddy");

        alert(`Dear ${name} thanks for your feedback...!`);
      });
  };

  const cancelCourse = () => {
    document.getElementById("create-course-form").reset();
  };

  return (
    <>
      <div className="controlClassFeedback">
        <form id="feedbackForm">
          <div className="inputBox" id="inp1Feed">
            <input
              type="text"
              required="required"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <span>Name</span>
          </div>
          <div className="inputBox" id="inp2Feed">
            <input
              type="text"
              required="required"
              onChange={(event) => {
                setBranch(event.target.value);
              }}
            />
            <span>Branch</span>
          </div>
          <div className="inputBox" id="inp3Feed">
            <textarea
              required="required"
              cols="30"
              rows="10"
              onChange={(event) => {
                setFeedback(event.target.value);
              }}
            ></textarea>
            <span>Feedback</span>
          </div>
          <div>
            <button className="submitFeed" onClick={addFeedback}>
              SUBMIT
            </button>
            {/* <button onClick={resetFeedback()}> RESET</button> */}
          </div>
        </form>
        cancelCourse();
      </div>
    </>
  );
}

export default AboutSub6;
