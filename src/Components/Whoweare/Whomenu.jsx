import React, { Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';


function Whomenu() {
  return (
    <Fragment>
        <div className='row aboutmenu'>
            <div className='col-sm-12 button'>
               <Fade  top delay={500}>
                 <Link to="/company-profle" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>
                    <h3 data-aos="fade-up" data-aos-duration="4000" data-aos-easing="ease-out-cubic">Company Profile </h3>
                  </Link>
                 </Fade >

               <Fade  right delay={1000}>
               <Link to="/retakaful" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>
                   <h3 data-aos="fade-left" data-aos-duration="4000" data-aos-easing="ease-out-cubic">Retakaful Arrangements & Partners</h3>
               </Link>
              </Fade >

               <Fade  left delay={1500}>
               <Link to="/ceo-message" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>
                  <h3 data-aos="fade-right" data-aos-duration="4000" data-aos-easing="ease-out-cubic">CEO MESSAGE</h3>
               </Link>
              </Fade >

               <Fade bottom delay={2000} > 
               <Link to="/" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>
               <h3 data-aos="fade-down" data-aos-duration="4000" data-aos-easing="ease-out-cubic"> Back To Home</h3>
               </Link>
              </Fade >
            </div>
        </div>
    </Fragment>
  )
}

export default Whomenu