import React from 'react'
import { Fragment } from 'react'

function Mission() {
  return (
    <Fragment>
        <div className='sub row'>
          <div className='col-sm-5' data-aos="fade-right" data-aos-duration="4000">
              <img src='https://thumbs.dreamstime.com/z/mission-vision-strategy-company-goals-business-internet-technology-concept-100712264.jpg' alt='asd'/>
          </div>
          <div className='col-sm-7'>
          <h2 data-aos="fade-left" data-aos-duration="4000" className='uniq'>Mission</h2>
            <ul data-aos="fade-left" data-aos-duration="4000">
                <li>To deliver Takaful as a viable alternative to conventional insurance</li>
                <li>To become the ‘top-of-the-mind’ Takaful brand for our participants in terms of competitiveness, service standards and business ethics</li>
                <li>To give value for money to our shareholders and make Salaam Takaful Limited their prized asset</li>
                <li>To become an ideal organization for our employees that encourages them to achieve self-actualization and growth</li>
                <li>To contribute positively and proactively for the welfare of our society at large as well as for the preservation of our environment</li>
            </ul>

          </div>
           
        </div>
    </Fragment>
  )
}

export default Mission