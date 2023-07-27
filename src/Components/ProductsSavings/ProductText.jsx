import React from 'react'
import { Fragment } from 'react'
import pdf from "../../Assets/img/corporateprofilepdf.png"
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

function ProductText() {
  return (
    <Fragment>
        <div className='sub productetxt'>
                <div className='row'>
                <Fade left delay={500}>
                    <div className='col-sm-8 writeus'>
                        <h2>An Overview of Our Takaful Plan</h2>
                        <p>Our cutting-edge Individual Family Takaful Plan offers an exceptional opportunity for you to unlock financial security and peace of mind. Our Shari'ah-compliant solution is tailored to fit the unique needs of individuals from all walks of life, providing comprehensive coverage that stands by you, no matter what life throws your way.</p>
                        <p>With our Individual Family Takaful Plan, you can invest in your own growth and success, ensuring a brighter future for you and your loved ones. Our plan is designed to offer comprehensive coverage, including death benefits, accidental death and disability, and critical illness coverage, among others.</p>
                        <p>At our company, we understand that every individual is unique and has different financial needs. That's why our Individual Family Takaful Plan is designed to be flexible and customizable, so you can choose the coverage that's right for you. We take the time to listen to our customers and work closely with them to create a personalized plan that meets their unique needs.</p>
                        <p>Our Individual Family Takaful Plan is not just an investment in your financial future, but in your peace of mind as well. With our Shari'ah-compliant solution, you can be confident that your investments are ethically sound and in line with your values. We understand the importance of building trust with our customers, and we work hard to maintain it by delivering on our promises and providing exceptional customer service.</p>
                        <p>Our cutting-edge Individual Family Takaful Plan is a comprehensive, customizable solution that offers exceptional coverage and peace of mind. It's an investment in your financial future and your values, ensuring that you and your loved ones are protected no matter where life takes you.</p>
                    </div>
                </Fade>

                <Fade right delay={500}>
                    <div className='col-sm-4 writeus'>
                        <Link to="" target='_blank'>
                        <img src={pdf} alt='pdf'/>
                        </Link>
                    </div>
                </Fade>


                </div>
            </div>
    </Fragment>
  )
}

export default ProductText