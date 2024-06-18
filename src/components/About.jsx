import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              {/* <p>We Are The Authenicate Taste Of Uttrakhand</p> */}
            </div>
            <p className="mid">
            Uttarakhand, a land of pristine beauty and rich culture, boasts a culinary heritage that's as diverse as its landscapes. We bring you the authentic taste of this Himalayan state, capturing the essence of its traditional recipes. Our dishes are crafted with locally sourced ingredients, ensuring every bite reflects the true flavors of Uttarakhand. From the earthy warmth of Kafuli to the spicy zest of Bhatt ki Churkani, our menu offers a journey through the region’s culinary treasures. Join us and experience the genuine taste of Uttarakhand, where every meal tells a story of heritage and tradition.
            </p>
              <br/>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          {/* <div className="banner">
            <img src="about.png" alt="about" />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default About;
