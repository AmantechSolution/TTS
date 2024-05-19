import React from "react";
import W1 from "../assets/images/w1.png";
import W2 from "../assets/images/w2.png";
import W3 from "../assets/images/w3.png";
import W4 from "../assets/images/w4.png";
import W5 from "../assets/images/w5.png";
import W6 from "../assets/images/w6.png";
import W7 from "../assets/images/w7.png";
import W8 from "../assets/images/w8.png";
import W9 from "../assets/images/w9.png";
import W10 from "../assets/images/w10.png";
import W11 from "../assets/images/w11.png";
import W12 from "../assets/images/w12.png";
const Work = () => {
  return (
    <>
      <section className="container-fluid" id="work">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5>FORMAT</h5>
              <h1>We Work With Every Major Format</h1>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div id="box">
                <img src={W1} alt="" />
                <p>Ms Word</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div id="box">
                <img src={W2} alt="" />
                <p>PDF</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div id="box">
                <img src={W3} alt="" />
                <p>LaTex</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div id="box">
                <img src={W4} alt="" />
                <p>MS Excel</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div id="box">
                <img src={W5} alt="" />
                <p>Plain Text</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div id="box">
                <img src={W6} alt="" />
                <p>MS Powepoint</p>
              </div>
            </div>
            <div className="col-lg-2 py-3 col-md-4 col-sm-6">
              <div id="box">
                <img src={W7} alt="" />
                <p>Rich Text</p>
              </div>
            </div>
            <div className="col-lg-2 py-3 col-md-4 col-sm-6">
              <div id="box">
                <img src={W8} alt="" />
                <p>Pages</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 py-3">
              <div id="box">
                <img src={W9} alt="" />
                <p>Keynote</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 py-3">
              <div id="box">
                <img src={W10} alt="" />
                <p>Google Slides</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6  py-3">
              <div id="box">
                <img src={W11} alt="" />
                <p>ODT</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 py-3">
              <div id="box">
                <img src={W12} alt="" />
                <p>JPG</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
