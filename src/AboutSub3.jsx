import React from "react";
import "./AboutSub3.css";

function AboutSub3() {
  return (
    <>
      <div className="mainAboutSub3">
      <p className="branchAddress">Our Branches</p>
      <div className="branches1">
        <a href="https://www.google.com/maps/place/12%C2%B053'01.4%22N+77%C2%B032'55.2%22E/@12.883734,77.548658,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x311279e6c8f02832!8m2!3d12.883734!4d77.548658">
          <div className="branch1">
            <img
              className="branchImg"
              src="aboutFiles/download (3).jpeg"
              alt=""
            />
            <p className="branchP1">Bangalore</p>
            <p className="branchP2">
              12,ELITE BANARAS, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka
              560038
            </p>
          </div>
        </a>

        <a href="https://www.google.com/maps/place/17%C2%B030'22.8%22N+78%C2%B037'39.2%22E/@17.5063365,78.6275448,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xedac42d7ee454c55!8m2!3d17.5063365!4d78.6275448">
          <div className="branch1">
            <img
              className="branchImg"
              src="aboutFiles/download (5).jpeg"
              alt=""
            />
            <p className="branchP1">Hyderabad</p>
            <p className="branchP2">
              Pillar No:143, ELITE BANARAS, Inner Ring Road, Hyderabad,
              Telangana 500064
            </p>
          </div>
        </a>

        <a href="https://www.google.com/maps/place/13%C2%B002'27.2%22N+80%C2%B014'15.7%22E/@13.0408982,80.237683,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xbb63d761fcb07b34!8m2!3d13.0408982!4d80.237683">
          <div className="branch1">
            <img
              className="branchImg"
              src="aboutFiles/images (1).jpeg"
              alt=""
            />
            <p className="branchP1">Chennai</p>
            <p className="branchP2">
              NO.210, ELITE BANARAS, N.S.C BOSE ROAD, GEORGE TOWN, CHENNAI -
              600001
            </p>
          </div>
        </a>

        <a href="https://www.google.com/maps/d/viewer?mid=1rhnsVzHiF06iMsr3uACC8WDeuIs&hl=en_US&ll=18.921754000000007%2C72.83327799999998&z=17">
          <div className="branch1">
            <img
              className="branchImg"
              src="aboutFiles/download (4).jpeg"
              alt=""
            />
            <p className="branchP1">Mumbai</p>
            <p className="branchP2">
              461/A, ELITE BANARAS, Ram Niwas, Maheshwari Udyan, Matunga East,
              Mumbai
            </p>
          </div>
        </a>
      </div>
      </div>
    </>
  );
}

export default AboutSub3;
