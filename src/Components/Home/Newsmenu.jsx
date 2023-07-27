import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import { Link } from "react-router-dom";
import { News } from "../../Data/Data";

function convertToSlug(text) {
  return text.trim().toLowerCase().replace(/\s+/g, '-');
}
 
function Newsmenu() {
  return (
    <Fragment>
      <div className="container homemenu newsevents">
        <div className="row">
          <div className="col-sm-12 explore news">
            <h2>
              <Fade delay={500}>News </Fade>{" "}
              <Flip top delay={800}> & Events </Flip>
            </h2>
          </div>


          <div className="col-sm-9  ">
            <Fade right delay={500}>
            <Swiper slidesPerView={3} spaceBetween={30}  pagination={{ clickable: true, }} modules={[Pagination]}
                breakpoints={{  "@0.00": { slidesPerView: 1, spaceBetween: 10, }, "@0.75": {slidesPerView: 2,spaceBetween: 30,}, "@1.00": { slidesPerView: 3,spaceBetween: 30,},"@1.50": { slidesPerView: 3, spaceBetween: 30,},}}
                className="mySwiper">

                {News.map((data) => {

                return (
                <SwiperSlide>
                  <Link to={`/news/${convertToSlug(data.heading)}`}  onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} >
                    <div className="menusildes" key={data.key}>
                    <Flip top delay={500}> <img src={data.feature} alt="asd" /></Flip>
                    <Fade up delay={500}>
                      <p>{data.excerpt}</p>
                      </Fade>
                    </div>
                  </Link>
                </SwiperSlide>

                    )
                })}


              </Swiper>
            </Fade>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Newsmenu;


