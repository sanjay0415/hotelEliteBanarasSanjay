import React, { useState } from 'react';
import './home.css';
import HomeSub1 from './HomeSub1';
import HomeSub2 from './HomeSub2';
import HomeSub3 from './HomeSub3';
import HomeSub4 from './HomeSub4';
import HomeSub5 from './HomeSub5';

function Home() {

    let currTime = new Date().toLocaleTimeString();

    // this is for dynamic time
    const [time, setTime] = useState(currTime);

    const updateTime = () => {
        currTime = new Date().toLocaleTimeString();
        setTime(currTime);
    }

    setInterval(updateTime, 1000);
    

    let currDate = new Date();
    currDate = currDate.getHours();

    let greeting = "";
    let cssTime = {};

    if(currDate >= 9 && currDate < 12)
    {
        greeting = "Good Morning, have a Great Breakfast";
        cssTime.color = "black";
    }
    else if(currDate >= 12 && currDate < 16)
    {
        greeting = "Good Afternoon, have a Great Lunch";
        cssTime.color = "black";
    }
    else if(currDate >= 16 && currDate < 19)
    {
        greeting = "Good Evening, have a Delicious Snacks";
        cssTime.color = "black";
    }
    else if(currDate >= 19 && currDate < 23)
    {
        greeting = "Great Night, have a Good Dinner";
        cssTime.color = "black";
    }
    else
    {
      greeting = "Hotel service is CLOSED...🗙";
      cssTime.color = "black";
    }

    

    return(
        <>
        <div className='time'>
        <p className='greetingCss1'>Hello Buddy, now Time is</p>
        <p className='currtimeCss'>🕑 {time}</p>
        <p className='greetingCss2'>{greeting}</p>
        </div>    
        
        <div className='homeSub1'>
            <HomeSub1></HomeSub1>
            <HomeSub2></HomeSub2>
            <HomeSub3></HomeSub3>
            <HomeSub4></HomeSub4>
            <HomeSub5></HomeSub5>
        </div>  
        </>
    )
}

export default Home;