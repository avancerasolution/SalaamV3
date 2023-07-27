import React, { Fragment } from 'react'
import Mobileapps from "../../Assets/img/mobilsapps.png"
import Check from "../../Assets/img/checks.png"
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Appsdownload() {
  return (
    <Fragment>
        <div className='container donwloadapps'>
            <div className='row'>
                <div className='col-sm-6'>
                <Fade top delay={400}><h2>Takaful Online APP</h2></Fade>
                <Fade top delay={600}> <p>Salaam Takaful Limited, is an Unlisted Public Limited Company incorporated in Pakistan on 2nd June 2006, under the Companies Ordinance, 1984 with a regulatory compliant capital of Rs. 800 million, all fully paid-up.  </p></Fade>
                    <ul>
                    <Flip top delay={800}> <li><img src={Check} alt=''/> Compliance certificate</li></Flip>
                    <Flip top delay={1000}> <li><img src={Check} alt=''/> Waqf Rules</li></Flip>
                    <Flip top delay={1200}> <li><img src={Check} alt=''/> Waqf Deed</li></Flip>
                    </ul>
                    <Flip top delay={1400}> <Link to="/product" className="buy ">Download Android</Link></Flip><br/><br/>



                </div>
                <div className='col-sm-6 mobiles'>
                <Fade down delay={1400}>  <img src={Mobileapps} alt='apps'/></Fade>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Appsdownload