import React from 'react'
import Nav from '../Components/Nav'
import WorkSlider from './WorkSlider'

import '../Pages/WorkSlider.css'

import { fadeIn } from "../variants";
import { motion } from 'framer-motion'

const Work = () => {
  return (
    <div className="h-full flex items-center">
      <Nav/>
        <div className="container mx-auto">
          <div className="d-flex flex-column flex-xl-column gap-x-8">
            {/* Text */}
            <div className="d-flex flex-column align-items-center justify-content-center mydiv w-xl-30vw text-lg-left mb-4 mb-lg-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 mt-8"
              >
                My Works<span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-400 mx-auto mx-lg-0"
              >
                This is my Works. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                tempora eligendi, quisquam tempore sint reiciendis.
              </motion.p>
            </div>

            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full max-w-65"
            >
              <WorkSlider/>
            </motion.div>
          </div>
        </div>
    </div>
  )
}

export default Work
