import React from "react";
import "../CardEffect/CardEffect.css";

import Logo1 from '../../Assets/logo1logo.png';
import Logo2 from '../../Assets/logo2logo.png';
import Logo3 from '../../Assets/logo3logo.png';
import Logo4 from '../../Assets/logo4logo.png';

const CardEffect = () => {
  return (
    <div className="container">

      <div className="parent">
        <div className="card-work" id="card1">
          <div className="content-box">
            <h1 className="card-work-title">NEXLEARN</h1>
            <p className="card-work-content">
              Nexlearn is a Ed-Tech platform which provides mentorship to college students and high quality notes for all branches.
            </p>
            <span className="see-more">See More</span>
          </div>
          <div className="date-box">
            <img className="Logo container" src={Logo1} alt="" />
          </div>
        </div>
      </div>

      <div className="parent card2">
        <div className="card-work" id="card2">
          <div className="content-box">
            <h1 className="card-work-title">JEEGYASA</h1>
            <p className="card-work-content">
            Jeegyasa is an website UI of an educational Institute which provide courses for class 9th to 12th and will focus on competetive Examinations
            </p>
            <span className="see-more">See More</span>
          </div>
          <div className="date-box">
          <img className="Logo container" src={Logo2} alt="" />
          </div>
        </div>
      </div>

      <div className="parent card3">
        <div className="card-work" id="card3">
          <div className="content-box">
            <h1 className="card-work-title">BYTEVERSE</h1>
            <p className="card-work-content">
              Byteverse an annual Hackathon which was held in NIT Patna which drives hackathon in Web, Blockchain, Artificail Intelligence.
            </p>
            <span className="see-more">See More</span>
          </div>
          <div className="date-box">
          <img className="Logo container" src={Logo3} alt="" />
          </div>
        </div>
      </div>

      <div className="parent card4">
        <div className="card-work" id="card4">
          <div className="content-box">
            <h1 className="card-work-title">KARIGAR</h1>
            <p className="card-work-content">
              Karigar is a platform which helps workers from all the domains to find jobs such as Tailor, Plumber, House Maid etc.
            </p>
            <span className="see-more">See More</span>
          </div>
          <div className="date-box">
          <img className="Logo container" src={Logo4} alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default CardEffect;
