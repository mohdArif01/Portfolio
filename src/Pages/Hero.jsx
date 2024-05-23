import React from "react";
import { Link } from 'react-router-dom';

import "../Pages/Hero.css";
import Nav from "../Components/Nav";
import ParticlesContainer from "../Components/ParticlesContainer";

const Hero = () => {
  return (
    <>
      <ParticlesContainer />
      <Nav/>
      <div className="retro-grid-container container">
          <div className="mydet container d-flex flex-column align-items-center justify-content-center">
            <p className="btn-shine brief">Front-End Developer | UI/UX Designer</p>
            <h1 className="retro-grid-text">MOHD ARIF</h1>
            <p className="retro-grid-paragraph ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              impedit cupiditate repellendus beatae harum quo! Necessitatibus
              sequi dolores at doloribus ducimus incidunt et nam!
            </p>
            <Link to={'/contact'}>
              <button type="button" className="btn button"> <span className="letstalk">Let's Talk</span>  <span className="itsfree" >- it's free</span> </button>
            </Link>
            
          </div>
        
      </div>
    </>
  );
};

export default Hero;
