import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import Whotext from "./Whotext";
import Vision from "./Vision";
import Comiitemanagment from "../Governance/Comiitemanagment"
import CeoMessages from "./CeoMessages";
import CoreValues from "./CoreValues";
import Muftisajjad from "./Muftisajjad";
import CodeofConduct from "./CodeofConduct";

function Whobanner() {
  return (
    <Fragment>
      <div className="container governancemain motor">
        <div className="row">

          <div className='col-sm-12 heads govbanner'>
            <Fade up delay={500}><h2 className="oswald">About Us</h2></Fade>
          </div>

          <div className='col-sm-12 heads text shareholder' id="ceo">
            <CeoMessages />
          </div>

          <div className='col-sm-12 heads adds firstpart'>
            <h2 data-aos="fade-right" data-aos-duration="4000"> </h2>
            <Whotext />
          </div>

          <div className='col-sm-12 heads text govdirectors'>
            <h2 data-aos="fade-up" data-aos-duration="4000">Management Committee</h2>
            <Comiitemanagment />
          </div>




          <div className='col-sm-12 heads adds '>
            <Vision />
          </div>

          <div className='col-sm-12 heads adds '>
            <CoreValues />
          </div>

          <div className='col-sm-12 heads text shareholder'>
            <Muftisajjad />
          </div>


          <div className='col-sm-12 heads text retaakaful'>
            <CodeofConduct />
          </div>


        </div>
      </div>
    </Fragment>
  );
}

export default Whobanner;
