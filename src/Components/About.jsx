import React from "react";
import { FaArrowRight } from "react-icons/fa";
import aboutimg from "../assets/images/about1.png";
const About = () => {
  return (
    <>
      <section className="container-fluid" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-5 sm-my-0">
              <h5>WE ARE PROFESSIONAL</h5>
              <h1>
                We offer professional Proofreading and Editing services for
                students and professionals
              </h1>
              <p>
                Proofers offer a wide variety of tailor-made services to meet
                your individual needs. Proofers offer a number of core services
                which include proofreading and copy-editing (thesis,
                dissertations, essays reports), document formatting and
                plagiarism checking. All our editors are SfEP members and hold
                at least a Master’s degree from a reputable UK University.
              </p>
              <a href="#" className="btn">
                Get Started
                <span className="mx-2">
                  <FaArrowRight />
                </span>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="img_box">
                <img src={aboutimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
