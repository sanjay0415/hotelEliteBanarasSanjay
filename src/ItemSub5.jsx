import React from "react";
import "./homeSub5.css";
import "./AboutSub7.css";

function HomeSub5() {
  return (
    <>
      <div className="footerAbout">
        {/* tieups */}
        

        {/* delivery partner */}
        <div className="delivery">
          <p className="deliveryHeadingAbout">Connect with us on...*</p>
          <div className="deliveryImgDivAbout">
            <a href="https://www.instagram.com/accounts/login/">
              <img
                className="deliveryImgAbout"
                src="aboutFiles/insta.jpeg"
                alt=""
              />
            </a>

            <a href="https://www.youtube.com/watch?v=lEv1k9gfxJo">
              <img
                className="deliveryImgAbout"
                src="aboutFiles/youtube.png"
                alt=""
              />
            </a>

            <a href="https://twitter.com/i/flow/login">
              <img
                className="deliveryImgAbout"
                src="aboutFiles/twitter.jpeg"
                alt=""
              />
            </a>

            <a href="https://web.whatsapp.com/">
              <img
                className="deliveryImgAbout"
                src="aboutFiles/watsup.jpeg"
                alt=""
              />
            </a>

            <a href="https://www.facebook.com/login/">
              <img
                className="deliveryImgAbout"
                src="aboutFiles/fb.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="address">
          <p>
            32, ELITE BANARAS, Gandhi Bazaar Main Rd, Gandhi Bazaar,
            Basavanagudi, Bengaluru, Karnataka 560004
          </p>
          <p className="phoneNumber">☎ Phone: 080 2667 7588</p>
        </div>

        <p className="copyright">©All rights reserved by ELITE BANARAS</p>
      </div>
    </>
  );
}

export default HomeSub5;
