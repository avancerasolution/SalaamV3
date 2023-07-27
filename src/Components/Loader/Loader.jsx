import React, { Fragment } from "react";
import Flip from "react-reveal/Flip";

import Logo from "../../Assets/Logo.png";

export default function Loader() {
  return (
    <Fragment>
      <div className="container-fluid">
        <div
          className="row preloader "
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <div className="imagepre col-sm-12 ">
            <img
              src={Logo}
              data-aos="fade-down"
              data-aos-duration="2000"
              className="zoom-in-zoom-outa"
              alt=""
            />
            <div data-aos="fade-down" data-aos-duration="2000">
              <h2>
                <Flip top delay={500}>
                  Welcome to{" "}
                </Flip>
                <Flip top delay={800}>
                  Salam Life And Savings
                </Flip>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
