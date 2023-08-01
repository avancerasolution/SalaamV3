import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import "swiper/css";
import Savings from "../../Assets/img/savigsimg.png";

import { Link } from "react-router-dom";
import 'swiper/css/navigation';

function Productmenus() {
  return (
    <Fragment>
      <div className="container productmenu homemenu">

        <div className="container savingssec">
        <div className="row">
          <div className="col-sm-6 explore">
              <Fade down delay={800}>
                <img src={Savings} alt="" />
              </Fade>
          </div>

          <div className="col-sm-6 explore">
            <h3> <Flip top delay={800}>Salaam Life & Savings </Flip></h3>
            <Flip top delay={900}><p>Our cutting-edge Individual Family Takaful Plan is a comprehensive, customizable solution that offers exceptional coverage and peace of mind. It's an investment in your financial future and your values, ensuring that you and your loved ones are protected no matter where life takes you.</p></Flip>
            <Flip top delay={900}><p>Invest in your own growth and success, ensuring a brighter future for you and your loved ones. Our plan is designed to offer comprehensive coverage, including death benefits, accidental death and disability, and critical illness coverage, among others.</p></Flip>
            <div className="newbtn">
            <Flip top delay={800}> <Link to="/product" className="blue " onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>Request Call Back</Link></Flip>
            <Flip top delay={800}> <Link to="/product" className="gray" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>Read More</Link></Flip>
          </div>
          </div>

        </div>
        </div>
 

      </div>
    </Fragment>
  );
}

export default Productmenus;



