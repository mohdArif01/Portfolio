import React from "react";
import '../CardEffect_service/WorkSlider.css'

const WorkSlider = () => {
  return (
    <div className="container d-flex flex-row flex-wrap justify-content-evenly the-container">
      <div className="card">
        <div className="top-section"  id="carda">          
        </div>
        <div className="bottom-section">
          <span className="title">UI UX Designing</span>
          <div className="row row1">
            <div className="item">
              <span className="big-text">5</span>
              <span className="regular-text">Real Projects</span>
            </div>
            <div className="item">
              <span className="big-text">100%</span>
              <span className="regular-text">Responsive</span>
            </div>
            <div className="item">
              <span className="big-text">4/5</span>
              <span className="regular-text">Rating</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="top-section" id="cardb">          
        </div>
        <div className="bottom-section">
          <span className="title">Front-End Dev</span>
          <div className="row row1">
            <div className="item">
              <span className="big-text">2</span>
              <span className="regular-text">Projects</span>
            </div>
            <div className="item">
              <span className="big-text">100%</span>
              <span className="regular-text">Responsive</span>
            </div>
            <div className="item">
              <span className="big-text">3/5</span>
              <span className="regular-text">Rating</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="top-section" id="cardc">          
        </div>
        <div className="bottom-section">
          <span className="title">LOGO DESIGN</span>
          <div className="row row1">
            <div className="item">
              <span className="big-text">4</span>
              <span className="regular-text">Real Projects</span>
            </div>
            <div className="item">
              <span className="big-text">100%</span>
              <span className="regular-text">Meaningful</span>
            </div>
            <div className="item">
              <span className="big-text">3/5</span>
              <span className="regular-text">Rating</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="top-section" id="cardd">          
        </div>
        <div className="bottom-section">
          <span className="title">BANNER DESIGN</span>
          <div className="row row1">
            <div className="item">
              <span className="big-text">3</span>
              <span className="regular-text">Real Projects</span>
            </div>
            <div className="item">
              <span className="big-text">100%</span>
              <span className="regular-text">Strong Visuals</span>
            </div>
            <div className="item">
              <span className="big-text">4/5</span>
              <span className="regular-text">Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSlider;
