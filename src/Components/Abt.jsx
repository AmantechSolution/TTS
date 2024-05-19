import React from "react";
import AboutUs from "../assets/images/aboutUs.png";
import { FaArrowRight } from "react-icons/fa";
const Abt = () => {
  return (
    <>
      <section className="container-fluid" id="abt">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={AboutUs} alt="" className="img-fluid A" />
            </div>
            <div className="col-lg-6 content">
              <h5>WE ARE PROFESSIONAL</h5>
              <h1>Who We Are</h1>
              <p>
                We offer fast, affordable and quality proofreading services for
                students and professionals. We proofread all documents ranging
                from essays, assignments, dissertations, speeches, proposals,
                presentations, theses to even short stories.
              </p>
              <a href="#" className="btn">
                FindOut More{" "}
                <span className="mx-2">
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Abt;
