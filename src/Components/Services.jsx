import React from "react";
import S1 from "../assets/images/s1.png";
import S2 from "../assets/images/s2.png";
import S3 from "../assets/images/s3.png";
import { FaArrowCircleRight } from "react-icons/fa";
const Services = () => {
  return (
    <>
      <section className="container-fluid" id="service">
        <div className="container">
          <div className="row mx-4">
            <div className="col-lg-12 text-center ">
              <h5>SERVICES</h5>
              <h1 className="mb-5">
                We Provide Best Proofreading <br /> & Editin Services
              </h1>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-4 col-md-6 mb-4 lg-mb-0">
              <div className="box">
                <img src={S1} className="card-img" alt="..." />
                <div className="card-body my-3 mx-2">
                  <h5 className="card-title my-2    ">Proofreading</h5>
                  <p className="card-text">
                    Our Proofreaders correct gramm -atical errors that you may
                    have overlooked including punctuation verb tense, spelling,
                    and
                  </p>
                  <div className="footer">
                    <a href="#">Find Out More</a>
                    <span className="arrow">
                      <FaArrowCircleRight />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 lg-mb-0">
              <div className="box">
                <img src={S2} className="card-img" alt="..." />
                <div className="card-body my-3 mx-2">
                  <h5 className="card-title my-2    ">Proofreading</h5>
                  <p className="card-text">
                    Our Proofreaders correct gramm -atical errors that you may
                    have overlooked including punctuation verb tense, spelling,
                    and
                  </p>
                  <div className="footer">
                    <a href="#">Find Out More</a>
                    <span className="arrow">
                      <FaArrowCircleRight />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 lg-mb-0">
              <div className="box">
                <img src={S3} className="card-img" alt="..." />
                <div className="card-body my-3 mx-2">
                  <h5 className="card-title my-2    ">Proofreading</h5>
                  <p className="card-text">
                    Our Proofreaders correct gramm -atical errors that you may
                    have overlooked including punctuation verb tense, spelling,
                    and
                  </p>
                  <div className="footer">
                    <a href="#">Find Out More</a>
                    <span className="arrow">
                      <FaArrowCircleRight />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="btn View">
            View More
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
