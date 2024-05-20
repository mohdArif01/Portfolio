import React, { useState } from "react";
import styles from '../Components/Meteor.css'
function MeteorEffect() {
  return (
    <section className="d-flex justify-content-center align-items-center h-100 rounded-xl bg-dark">
      <div className="position-relative shadow-xl rounded-2xl overflow-hidden h-75 w-75 md:h-50 md:w-50 bg-gray-900 border border-gray-700 px-4 py-8 flex flex-col justify-end items-start">
        <div className="d-flex justify-content-center align-items-center mb-4 rounded-full border border-gray-500 h-5 w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-gray-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>

        <h1 className="text-white font-weight-bold mb-4">Meteors because they're cool</h1>

        <p className="text-gray-400 mb-4">
          I don't know what to write so I'll just paste something cool here. One
          more sentence because lorem ipsum is just unacceptable. Won't ChatGPT
          the shit out of this.
        </p>

        <button className="btn btn-secondary px-4 py-1 rounded-lg">Explore</button>

        {/* Meaty part - Meteor effect */}
        <Meteors number={10} />
      </div>
    </section>
  );
}

const Meteors = ({ number }) => {
  return (
    <>
      {[...new Array(number || 20).fill(true)].map((el, idx) => (
        <span
          key={idx}
          className={`d-block position-absolute animate__animated animate__meteorEffect rounded-circle bg-dark shadow top-50 left-50 transform translate-X-50 translate-Y-50 h-0.5 w-0.5`}
          style={{
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
            animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
            transform: `rotate(${Math.floor(Math.random() * (360 - 0)) + 0}deg)`,
          }}
        />
      ))}
    </>
  );
};

export default MeteorEffect;
