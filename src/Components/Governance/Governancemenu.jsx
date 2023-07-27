import React, { Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';


function Governancemenu() {
  return (
    <Fragment>
        <div className='row aboutmenu'>
            <div className='col-sm-12 button'>
               <Fade  top delay={500}>
                 <Link to="/board-of-directors" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>
                    <h3 data-aos="fade-up" data-aos-duration="4000" data-aos-easing="ease-out-cubic">Board of Directors </h3>
                  </Link>
                 </Fade >

               <Fade  right delay={1000}>
               <Link to="/" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>
                   <h3 data-aos="fade-left" data-aos-duration="4000" data-aos-easing="ease-out-cubic">Management Committee</h3>
               </Link>
              </Fade >

               <Fade  left delay={1500}>
               <Link to="/" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>
                  <h3 data-aos="fade-right" data-aos-duration="4000" data-aos-easing="ease-out-cubic"> Name OF Auditor </h3>
               </Link>
              </Fade >

               <Fade bottom delay={2000} > 
               <Link to="/" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>
               <h3 data-aos="fade-down" data-aos-duration="4000" data-aos-easing="ease-out-cubic"> Legal Advisor</h3>
               </Link>
              </Fade >

              <Fade left delay={2500} > 
               <Link to="/" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>
               <h3 data-aos="fade-up" data-aos-duration="4000" data-aos-easing="ease-out-cubic"> Pattern of shareholding</h3>
               </Link>
              </Fade >

              <Fade right delay={3000} > 
               <Link to="/" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>
               <h3 data-aos="fade-right" data-aos-duration="4000" data-aos-easing="ease-out-cubic">  Back To Home</h3>
               </Link>
              </Fade >
            </div>
        </div>
    </Fragment>
  )
}

export default Governancemenu