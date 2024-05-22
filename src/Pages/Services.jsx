import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import WorkSlider from "./WorkSlider";
import '../Pages/Services.css'

import Nav from "../Components/Nav";

const Services = () => {
  return (
    <div className="h-full flex items-center">
      <Nav/>
        <div>
          <div className="container main-container">
            <div><h2 className="d-inline">My Services</h2> <span className="text-accent">.</span> </div>
            <div>
              <p className="my-text"> I'll be glad to help you in the domain of <span className="highlights">UI UX Designing</span> in which I provide best User Inteface and best User Experience also I have a good command in the <span className="highlights">Front-End Development</span> and will be able to help you also with <span className="highlights">Logo designing</span> and <span className="highlights">Banner Designing</span> . </p>
            </div>
            <div>
            <WorkSlider/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Services;

