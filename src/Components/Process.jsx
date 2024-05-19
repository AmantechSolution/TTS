import React from "react";
import P1 from "../assets/images/p1.png";
import P2 from "../assets/images/p2.png";
import P3 from "../assets/images/p3.png";
import Arrow from "../assets/images/arrow.png";
import Arrow1 from "../assets/images/Arrow1.png";
import Abt from "./Abt";

const Process = () => {
  return (
    <>
      <section className="container-fluid" id="process">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5>PROCESS</h5>
              <h1>How it Woks</h1>
            </div>
          </div>
          <div className="row mt-4 pt-5">
            <div className="col-lg-4">
              <div className="box">
                <img src={Arrow} alt="" className="arrow d-none d-lg-block" />
                <div className="img-box">
                  <img src={P1} alt="" />
                </div>
                <div className="content">
                  <h5>Submit your document</h5>
                  <p>
                    Complete the form displayed on our 'Submit Document' page.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <img src={Arrow1} alt="" className="arrow1 d-none d-lg-block" />
                <div className="img-box">
                  <img src={P2} alt="" />
                </div>
                <div className="content">
                  <h5>We proofread & edit your text</h5>
                  <p>
                    An appropriate editor will set to work on your document as
                    soon as your payment has been approved.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src={P3} alt="" />
                </div>
                <div className="content">
                  <h5>We return your document</h5>
                  <p>
                    You will be sent two different electronic versions of your
                    document via email along with separate 'comments' document.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Abt />
    </>
  );
};

export default Process;
