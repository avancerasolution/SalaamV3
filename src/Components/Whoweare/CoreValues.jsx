import React from 'react'
import { Fragment } from 'react'
import Visions from "../../Assets/img/coer.png"

function CoreValues() {
  return (
    <Fragment>

      <div className='row whoweare mission core'>
        
      <div className='col-sm-6'>
          <img src={Visions} alt='image' data-aos="fade-left" data-aos-duration="4000" />
        </div>


        <div className='col-sm-6 allvisions'>
          <div className='vision'>
            <h2 data-aos="fade-right" data-aos-duration="4000" className='uniq'>Core Values</h2>
              <p data-aos="fade-right" data-aos-duration="4000">To become Pakistan’s 1st Family Takaful Company in the area of Life InsurTech by providing shariah compliant life and savings products to the unserved and underserved segments of society.</p>
              <p data-aos="fade-right" data-aos-duration="4000">We believe in creating Impact on society through provision of customer-centric shariah-compliant products to the underserved and to existing disgruntled customers of life insurance market through extensive use of technology to create a sustainable business model which has the potential to transform the life insurance industry of Pakistan. Our philosophy is to enhance financial resilience of customers whose protection and saving needs have not been adequately served.</p>
          </div>
        </div>


      </div>

    </Fragment>
  )
}

export default CoreValues


