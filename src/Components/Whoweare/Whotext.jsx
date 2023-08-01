import React from 'react'
import { Fragment } from 'react'
import Firstimage from "../../Assets/img/whofirst2.png"

export default function Whotext() {
  return (
    <Fragment>
      <div className='row whoweare'>
        <div className='col-sm-6'>
          <h2 data-aos="fade-right" data-aos-duration="4000"> Company Profile</h2>
          <p data-aos="fade-right" data-aos-duration="4000"> <b>Revolutionizing Takaful with State-of-the-Art Technology: Experience Seamless Protection with Salaam Family Takaful Limited</b></p>
          <p data-aos="fade-right" data-aos-duration="4000"> At Salaam Family Takaful Limited, we are committed to revolutionizing the world of takaful with our state-of-the-art technology and digital solutions. As Pakistan's premier digital takaful company, we are leading the way in providing a seamless and easy-to-use online experience to our customers. We understand that our customers' needs are different, and that's why we offer a range of customized takaful products, ensuring that our customers receive the protection they need for themselves and their loved ones. Our dedication to providing unparalleled customer service is what sets us apart from other takaful companies. We strive to deliver exceptional value to our customers by offering them high-quality products that are designed to meet their unique needs. </p>
          <p data-aos="fade-right" data-aos-duration="4000">We believe in providing a user-friendly and accessible digital experience to our customers, making takaful accessible to everyone. We understand that takaful can be a complex and unfamiliar concept to many, and that's why we strive to simplify the process, so our customers can protect their future with ease. At Salaam Family Takaful Limited, we are committed to enabling our customers to safeguard their future and that of their loved ones, and we believe that our digital takaful solutions are the best way to achieve this. </p>
         </div>

        <div className='col-sm-6'>
          <img src={Firstimage} alt='image' data-aos="fade-left" data-aos-duration="4000" />
        </div>


      </div>
    </Fragment>
  )
}
