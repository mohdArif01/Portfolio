import React from "react";
import "../Pages/About.css";
import Nav from "../Components/Nav";
import ParticleContainer2 from "../Components/ParticleContainer2";

const About = () => {
  return (
    <>
      <ParticleContainer2 />
      <Nav />
      <div className="main-container position-relative">
        <div className="container about d-flex flex-column ">
          <div className="container about-aboutme">
            <span>ABOUT ME</span>
          </div>
          <div className="about-myname">
            <h1>Hi. I'm Mohd Arif</h1>
          </div>
          <div className="about-detail">
            <div className="para1">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
                iste unde eius qui nemo alias quisquam placeat atque eveniet!
                Facere assumenda saepe repudiandae fuga!
              </p>
            </div>
            <div className="para2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                voluptatibus magnam rem commodi iusto sapiente voluptates quisquam
                accusamus vero? Assumenda neque iusto, corporis quo dolorum quos
                tempora amet perspiciatis praesentium veniam itaque. Quod,
                perspiciatis accusantium. Adipisci nesciunt temporibus, illum
                expedita, corporis dicta consequatur accusamus amet odio
                voluptates ea rem nemo.
              </p>
            </div>
          </div>
          <div className="about-apps"></div>
        </div>
      </div>
    </>
  );
};

export default About;
