import React from "react";
import "./AboutSub2.css";

function AboutSub2() {
  return (
    <>
      <div className="mainAboutSub2">
        <p className="achievementHeading">Our Achievements and Recognization</p>
        <div className="cardBoxes">
          {/* award 1 */}
          <div className="cardAbout">
            <div className="face face1">
              <p className="awardHeading">Best Hotel Service Award</p>
              <p>
                This is probably the Oscars for the Hotel industry. Dedicated to
                the travel and tourism industry, these awards are dedicated to
                class and uniqueness.
              </p>
              <a href="https://www.cntraveler.com/inspiration/gold-list">
                Read More
              </a>
            </div>
            <div className="face face2">
              <img className="awardImg" src="awards/img3.jpg" alt="error" />
            </div>
          </div>

          {/* award 2 */}
          <div className="cardAbout">
            <div className="face face1">
              <p className="awardHeading">Hospitality Industry Award</p>
              <p>
                These awards are offered to the international hotel industries
                that demonstrate and showcase original initiatives and thriving.
              </p>
              <a href="https://www.hospitalityawards.com/">Read More</a>
            </div>
            <div className="face face2">
              <img className="awardImg" src="awards/img1.jpg" alt="error" />
            </div>
          </div>

          {/* award 3 */}
          <div className="cardAbout">
            <div className="face face1">
              <p className="awardHeading">Restaurant and Bar Design Awards</p>
              <p>
                This award recognises the creativity displayed by Restaurants
                and Bars in terms of design.
              </p>
              <a href="https://restaurantandbardesignawards.com/">Read More</a>
            </div>
            <div className="face face2">
              <img className="awardImg" src="awards/img2.jpg" alt="error" />
            </div>
          </div>

          {/* award 4 */}
          <div className="cardAbout">
            <div className="face face1">
              <p className="awardHeading">BOUTIQUE HOTEL AWARDS</p>
              <p>
                The Boutique Hotel Awards aim to showcase the world's most
                prestigious boutique establishments.
              </p>
              <a href="https://boutiquehotelawards.com/">Read More</a>
            </div>
            <div className="face face2">
              <img className="awardImg" src="awards/img4.jpg" alt="error" />
            </div>
          </div>

          {/* award 5 */}
          <div className="cardAbout">
            <div className="face face1">
              <p className="awardHeading">WORLD LUXURY HOTEL AWARDS</p>
              <p>
                The World Luxury Hotel and Spa Awards are accepted as the
                pinnacle of achievement for Luxury Hotels & Spas worldwide.
              </p>
              <a href="https://www.luxuryhotelawards.com/">Read More</a>
            </div>
            <div className="face face2">
              <img className="awardImg" src="awards/img5.jpg" alt="error" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSub2;
