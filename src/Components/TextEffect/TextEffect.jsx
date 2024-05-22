import React from "react";
import '../TextEffect/TextEffect.css'

const TextEffect = () => {
  return (
    <div>
      <div className="animated-title">
        <div className="text-top">
          <div>
            <span>Hi.</span>
            <span> Developers, Reqruiters </span>
          </div>
        </div>
        <div className="text-bottom">
          <div>This is <span className="fancy" style={{"display":"inline"}}>MOHD ARIF</span></div>
        </div>
      </div>
    </div>
  );
};

export default TextEffect;
