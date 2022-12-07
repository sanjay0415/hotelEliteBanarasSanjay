import React from "react";
import { useState } from "react";
import './BookingSub1.css';

function BookingSub1() {

    let currTime = new Date().toLocaleTimeString();

    const [time1, setTime] = useState(currTime);

    function updateTime(){
        currTime = new Date().toLocaleTimeString();
        setTime(currTime);
    }

    setInterval(updateTime, 1000);

    let currDate = new Date();
    currDate = currDate.getHours();

    let greeting1 = "";
    let cssTime = {};

    if(currDate >= 9 && currDate < 12)
    {
        greeting1 = "Good Morning DEAR, ⚠ order only from BREAKFAST Section 😊";
        cssTime.color = "black";
    }
    else if(currDate >= 12 && currDate < 16)
    {
        greeting1 = "Good Afternoon DEAR, ⚠ order only from LUNCH section 😊";
        cssTime.color = "black";
    }
    else if(currDate >= 16 && currDate < 19)
    {
        greeting1 = "Good Evening DEAR, ⚠ order only from SNACKS section 😊";
        cssTime.color = "black";
    }
    else if(currDate >= 19 && currDate < 23)
    {
        greeting1 = "Great Night DEAR, ⚠ order only from DINNER section 😊";
        cssTime.color = "black";
    }
    else
    {
      greeting1 = "Hotel service is CLOSED...🗙";
      cssTime.color = "black";
    }



  return (
    <> 
      <div className="timeBooking">
      <p className="currtimeCss1">🕑 {time1}</p>
      <p className="greeting1Css2">{greeting1}</p>
      </div>
    </>
  );
}

export default BookingSub1;
