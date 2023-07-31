import React, { Fragment, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import About from "../../Assets/img/abtimg.png";
import Checks from "../../Assets/img/checks.png"
import abt_whoweare from "../../Assets/img/abt_whoweare.png"
import abt_cd from "../../Assets/img/abt_cd.png"

import { Link } from "react-router-dom";

function Homemenu({change, setChange}) {
  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    console.log(href)
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [change]);

  return (
    <Fragment>
      <div className="container homemenu">
        <div className="row">
          <div className="col-sm-12 explore">
            {/* <h2>
              <Fade delay={500}>About</Fade>{" "}
              <Flip top delay={800}> Us </Flip>
            </h2> */}
          </div>

          <div className="col-sm-4 side">
            <h3>
              <Flip top delay={500}> {" "} Making Your Journey Safe with </Flip>
              <Flip bottom delay={800}> {" "}   the Perks of   </Flip>
              <Flip bottom delay={1000}> {" "}  Savings in Life  </Flip>
            </h3>

            <ul>
            <Flip top delay={1200}><li><img src={Checks} alt="asd"/>High Savings Potential</li></Flip>
            <Flip top delay={1400}> <li><img src={Checks} alt="asd"/>Excellent Protection</li></Flip>
            <Flip top delay={1600}> <li><img src={Checks} alt="asd"/>Exclusive Coverage</li></Flip>
              </ul>

              <Fade left delay={1800} ><Link to="/" className=' buy'>About Us</Link></Fade>
          </div>

          <div className="col-sm-8 menus">
            <Fade right delay={500}>
            <Swiper slidesPerView={3} spaceBetween={30}  pagination={{ clickable: true, }} modules={[Pagination]}
                breakpoints={{  "@0.00": { slidesPerView: 1, spaceBetween: 10, }, "@0.75": {slidesPerView: 2,spaceBetween: 30,}, "@1.00": { slidesPerView: 3,spaceBetween: 30,},"@1.50": { slidesPerView: 3, spaceBetween: 30,},}}
                className="mySwiper">
                <SwiperSlide>
                  <Link to="/whoweare" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} >
                    <div className="menusildes">
                      <img src={abt_whoweare} alt="asd" />
                      <h3>Who We Are</h3>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link to="/governance" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" });}} >
                    <div className="menusildes">
                      <img src={abt_cd} alt="asd" />
                      <h3>Governance</h3>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link to="/whoweare#shariah" onClick={() => setChange(!change) }>
                    <div className="menusildes" >
                      <img src={About} alt="asd" />
                      <h3>Shariah</h3>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link to="/products" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" });}} >
                    <div className="menusildes">
                      <img src={About} alt="asd" />
                      <h3>Products</h3>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </Fade>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Homemenu;
