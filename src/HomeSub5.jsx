import React from "react";
import "./homeSub5.css";
import "./index.css";

function HomeSub5() {
  return (
    <>
      <div className="footer">
        {/* tieups */}
        <div className="tieUps">
          <p className="tieupHeading">Our TIE-UPS ☣</p>
          <div className="tieupImgDiv">
            <a href="https://www.akshayapatra.org/">
              <img
                className="tieUpsImg"
                src="tieUps/akshayapatra.jpg"
                alt="error"
              />
            </a>

            <a href="https://bangalorefoodbank.com/">
              <img
                className="tieUpsImg"
                src="tieUps/bglrfood.png"
                alt="error"
              />
            </a>

            <a href="https://www.riseagainsthungerindia.org/">
              <img
                className="tieUpsImg"
                src="tieUps/riseindia.png"
                alt="error"
              />
            </a>
          </div>
        </div>

        {/* delivery partner */}
        <div className="delivery">
          <p className="deliveryHeading">Our DELIVERY Partner's...! 🛵</p>
          <div className="deliveryImgDiv">
            <a href="https://www.zomato.com/bangalore/a2b-adyar-ananda-bhavan-whitefield">
              <img
                className="deliveryImg"
                src="deliveryPartners/Zomato_logo.png"
                alt=""
              />
            </a>

            <a href="https://www.ubereats.com/store/adyar-ananda-bhavan-a2b-indian-veg-restaurant/qT905i32RtSi3zbifd-JXg">
              <img
                className="deliveryImg"
                src="deliveryPartners/uber.png"
                alt=""
              />
            </a>

            <a href="https://www.swiggy.com/restaurants/a2b-veg-pattandur-agrahara-village-whitefield-bangalore-1530">
              <img
                className="deliveryImg"
                src="deliveryPartners/swiggy.png"
                alt=""
              />
            </a>

            <a href="https://www.dunzo.com/bangalore/a2b-k-yelahanka">
              <img
                className="deliveryImg"
                src="deliveryPartners/dunzo.jpg"
                alt=""
              />
            </a>

            <a href="https://magicpin.in/Bangalore/Hope-Farm-Junction,-Whitefield/Restaurant/A2B---Adyar-Ananda-Bhavan/store/5ab891/">
              <img
                className="deliveryImg"
                src="deliveryPartners/doordash.webp"
                alt=""
              />
            </a>

            <a href="https://www.eatsure.com/bangalore/whitefield-2">
              <img
                className="deliveryImg"
                src="deliveryPartners/eatsure.jpg"
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
