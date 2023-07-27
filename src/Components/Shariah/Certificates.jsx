import React from 'react'
import { Fragment } from 'react'
import Fade from "react-reveal/Fade";

function Certificates() {
  return (
   <Fragment>
    <div className='row tabscss' >
    <Fade up delay={400}>
        <div className='col-sm-12' data-aos="fade-left" data-aos-duration="4000">
        <div className='fatwa'>
            <h4>Shariah compliance certificate</h4>
            <p>Shariah compliance function is a key element of company’s structure, carrying the responsibility of ensuring that all products and services offered by Salaam Takaful Limited are fully compliant with the principles of shariah law. The shariah compliance function plays a vital role in helping to develop new procedures and products to adapt the company to industry trends and customer expectations.</p>
            <ul>
              <li>Compliance certificate</li>
              <li>Waqf Rules</li>
              <li>Waqf Deed</li>
            </ul>
          </div>
          </div>
          </Fade>
          </div>

   </Fragment>
  )
}

export default Certificates