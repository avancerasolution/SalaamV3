import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { News } from "../../Data/Data";
import { Link } from "react-router-dom";


function convertToSlug(text) {
  return text.trim().toLowerCase().replace(/\s+/g, '-');
}

function Productbanner() {
  return (
    <Fragment>
      <div className='container governancemain motor' >
        <div className='row'>

          <div className='col-sm-12 heads govbanner'>
            <Fade up delay={500}><h2 className="oswald">News & Events</h2></Fade>
          </div>



          <div className='col-sm-12 heads text news'>
            <div className="row">

              {News.map((data) => {
                return (
                  <div className="col-sm-4">
                    <Fade right delay={500}>

                      <Link to={`/news/${convertToSlug(data.heading)}`}  onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} >
                        <div className="menusildes" key={data.key}>
                          <Flip top delay={500}> <img src={data.feature} alt="asd" /></Flip>
                          <Fade up delay={500}>
                            <h4>{data.archead}</h4>
                            <p>{data.excerpt}</p>
                          </Fade>
                        </div>
                      </Link>
                    </Fade>
                  </div>

                )
              })}
            </div>

          </div>





        </div>
      </div>
    </Fragment>
  );
}

export default Productbanner;
