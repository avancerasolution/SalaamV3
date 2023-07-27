import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Fade from "react-reveal/Fade";

function Fatwa() {
  return (
    <Fragment>
      <div className='row tabscss' >
        <div className='col-sm-12' data-aos="fade-left" data-aos-duration="4000">

        <Fade up delay={400}>
          <div className='fatwa'>
            <h4>Fatwa</h4>
            <p>The Islamic Fiqh Academy emanating from the Organization of Islamic conference, meeting in its Second Session in Jeddah, Saudi Arabia, from 10 to 16 Rabiul Thani, 1406 H (corresponding to 22-28 December, 1985) issued a resolution which in summary stated the following :</p>
            <ul>
              <li>After reviewing the presentations made by participating scholars during the session on the subject of ‘Insurance/Re-insurance;</li>
              <li>And after discussing the same;</li>
              <li>And after closely examining all types and forms of insurance and deeply examining the basic principles upon which the are founded and their goals and objectives;</li>
              <li>And having looked into what has been issued by the Fiqh Academies and other instituitions in ths regard;</li>
            </ul>
          </div>
          </Fade>

          <Fade up delay={400}>
          <div  className='fatwa'>
            <h4>Fatwa by Darul Uloom Karachi on Salaam Takaful Limited being a Shariah Compliant Company</h4>
            <p></p>
            <ul>
              <li><Link to="https://www.salaamtakaful.com/assets/Content/Fatwa%20by%20Darul%20Uloom%20Karachi..pdf" target="_blank"> Fatwa by Darul Uloom Karachi. </Link></li>
            </ul>
          </div>
          </Fade>

          <Fade up delay={400}>
          <div  className='fatwa'>
            <h4>Resolves</h4>
            <ul>
              <li>The commercial insurance contract is prohibited (Haraam) according to the Shariah.</li>
              <li>The alternative contract which conforms to the principle of Islamic dealings is the contract of cooperative insurance (Takaful), which is founded on the basis of charitable donation and Shariah compliant dealings.</li>
            </ul>
          </div>
          </Fade>

          <Fade up delay={400}>
          <div  className='fatwa'>
            <h4>Muslim Jurists Therefore Concluded that:</h4>
            <ul>
              <li>Insurance should be based on the principles of mutuality and cooperation.</li>
              <li>Insurance products should be founded on the basis of Tabarru, an Arabic noun meaning donation, gift or contribution.</li>
              <li>The participants mutually contribute to the same fund for the purpose of mutual indemnity in case of risk and harm.</li>
              <li>The insurance company must conduct all its affairs in line with the Shariah</li>
            </ul>
          </div>
          </Fade>


        </div>
      </div>
    </Fragment>
  )
}

export default Fatwa