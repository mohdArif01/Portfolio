import React from 'react'
import Nav from '../Components/Nav'
import CardEffect from '../Components/CardEffect/CardEffect'

import '../Pages/Work.css'

import { fadeIn } from "../variants";
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <div className="h-full flex items-center">
      <Nav/>
        <div className="container mx-auto">
          <div className="main-container d-flex flex-column flex-xl-column gap-x-8 mt-70">
            {/* Text */}
            <div className=" d-flex flex-column align-items-center justify-content-center mydiv w-xl-30vw text-lg-left mb-4 mb-lg-0">
              <h2>
                My Works<span className="text-accent">.</span>
              </h2>
              <motion.p
                variants={fadeIn("down", 0.4)}
                initial = "hidden"
                animate = "show"
                exit= "hidden" 
               className='mt-4 work-det'>
                Currently these are my <span className="highlights">Designing</span> works which includes the Web and <span className="highlights">Mobile App</span> designing of a <span className="highlights">Real</span> projects.
              </motion.p>
            </div>
            <motion.div 
            variants={fadeIn("up", 0.4)}
            initial = "hidden"
            animate = "show"
            exit= "hidden"
            className='cardEff'
            >
              <CardEffect/>
            </motion.div>
          </div>
        </div>
    </div>
  )
}

export default Work
