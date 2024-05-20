import React from "react";
import "../Pages/Contact.css";
import Nav from "../Components/Nav";

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="mydiv container mx-auto">
        <div className="container">
          <div className="touch">
            <h4 className="write">WRITE US ON</h4>
            <h2>Get in Touch with Us.</h2>
          </div>
        </div>

        <div className="container d-flex flex-column">
          <div className="talk">
            <p>
              Let's talk <span>!</span>{" "}
            </p>
          </div>
          <div className="detail">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at
              placeat delectus totam quas sapiente?
            </p>
          </div>
          <div>
            <div className="container myform">
              <div>
              <div className="modal__body">
                  <div className="input">
                    <label className="input__label">Email</label>
                    <input className="input__field" type="text" />
                    <p className="input__description">
                      Provide only valid Email Address
                    </p>
                  </div>
                  <div className="input">
                    <label className="input__label">Query</label>
                    <textarea className="input__field input__field--textarea"></textarea>
                    <p className="input__description">
                      Give a good description so I know
                      what's it for
                    </p>
                  </div>
                </div>
                <div className="modal__footer">
                  <button className="button button-primary">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
