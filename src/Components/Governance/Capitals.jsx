import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Share from "../../Assets/img/finan.png"
function Capitals() {
  return (
    <Fragment>

      <div className='container-fluid shares marbot'>
          <div className='row'>

            <div className='col-sm-5 imageshare'>
              <img src={Share} alt='shareholding'  data-aos="fade-up" data-aos-duration="4000"/>
            </div>

            <div className='col-sm-7 audp' id='auditor'>
              <h2 data-aos="fade-right" data-aos-duration="4000">Name of Auditor</h2>
              <p data-aos="fade-right" data-aos-duration="4000">KPMG Taseer Hadi & Co.</p>

              <h2 data-aos="fade-right" data-aos-duration="4000" id='legal'>Legal Advisor</h2>
              <ul data-aos="fade-right" data-aos-duration="4000">
                <li><b>Mr. Salim Habib Godil</b></li>
                <li><b>Syed Rizwan Hussain</b></li>
                <li><b>Mr. Shahzad Salim Godil</b></li>
              </ul>

              <div className='patern'>
              <h2 data-aos="fade-right" data-aos-duration="4000" id='pattern'>Pattern of Shareholding</h2>
              <ul data-aos="fade-right" data-aos-duration="4000">
                <li><b>Salaam Takaful Limited</b> <span>50%</span></li>
                <li><b>Mr. Syed Salman Hussain</b> <span>30%</span></li>
                <li><b>Mr. Shazad Salim Godil</b> <span>10%</span></li>
                <li><b>Mr. Syed Rizwan Hussain</b> <span>10%</span></li>
              </ul>
              </div>
            </div>
          </div>
        </div>


    </Fragment>
  )
}

export default Capitals