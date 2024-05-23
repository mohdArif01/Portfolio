import React from "react";
import { fadeIn } from "../variants";
import { motion } from 'framer-motion'

import "../Pages/About.css";
import Nav from "../Components/Nav";
import ParticleContainer2 from "../Components/ParticleContainer2";
import TextEffect from "../Components/TextEffect/TextEffect";

const About = () => {
  return (
    <>
      <ParticleContainer2 />
      <Nav />
      <div className="main-container container position-relative">
        <div className="container about-aboutme">
          <span>ABOUT ME</span>
        </div>
        <div className="container about">
          <div className="about-myname">
            <TextEffect />
          </div>
          <div className="about-detail">
            <motion.div 
              variants={fadeIn("right", 0.4)}
              initial = "hidden"
              animate = "show"
              exit= "hidden"
              className="para1">
              <p>
                With expertise in <span className="highlights">UI/UX design</span> , <span className="highlights">Graphic design</span>, and <span className="highlights">Web
                development</span> , I bring a holistic approach to creating digital
                solutions. I excel at understanding user needs, translating them
                into intuitive interfaces, and bringing them to life with
                visually <span className="highlights">impactful</span>  designs.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial = "hidden"
              animate = "show"
              exit= "hidden"
             className="para2">
              <p>
                I'm a <span className="highlights">strong collaborator</span>  who works
                seamlessly with clients and teams to deliver projects that
                exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
