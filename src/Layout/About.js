import React, { Fragment } from 'react'
import Aboutbanner from '../Components/About/Aboutbanner'
import Aboutmenu from '../Components/About/Aboutmenu'



function About() {

  return (
  
    <Fragment>

    
        <div className='container faderight about'>
          <div className='row'>
              <Aboutbanner/> 
              
          </div>
          <Aboutmenu/>
          </div>
      
    </Fragment>

  )
}

export default About