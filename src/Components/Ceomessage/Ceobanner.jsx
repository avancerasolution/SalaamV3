import React, { Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

function Ceobanner() {
  return (
    <Fragment>
        <div className='container about ceo' >
        <div className='row'>

                <div className='col-sm-12 heads'>
                    <Fade left delay={500}><h2 className="oswald">CEO Message</h2></Fade>
                    <Flip top delay={1000}><h3>Ceo Message Heading</h3></Flip>
                </div>
    


                <div className='col-sm-12 heads text'>
                <p data-aos="fade-right" data-aos-duration="4000">Welcome to Salaam Life & Savings, the pioneering Islamic Insurtech in Pakistan. With a strong heritage and a remarkable journey, we are committed to providing unparalleled value, customer service, and offerings. At Salaam Life & Savings, we are dedicated to revolutionizing the world of takaful.</p>
                <p data-aos="fade-right" data-aos-duration="4000"> We understand that every customer has unique needs. That's why we offer a diverse range of customized takaful products, ensuring that you and your loved ones receive the protection you require. What sets us apart from other takaful companies is our unwavering focus on your needs and requirements, supported by a foundation of trust. We take pride in delivering the most user-friendly and accessible digital experience to our valued customers, making takaful accessible to all.</p>
                <p data-aos="fade-right" data-aos-duration="4000">At Salaam Life & Savings, we firmly believe in the realm of possibilities and our ability to deliver on our promises. With a proven track record, we are dedicated to meeting your needs efficiently and effectively. Join us on this journey and experience seamless protection like never before.</p>
                </div>

   

            
        </div>
        </div>
    </Fragment>
  )
}

export default Ceobanner