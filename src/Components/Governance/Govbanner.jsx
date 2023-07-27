import React, { Fragment } from 'react'
import Fade from 'react-reveal/Fade';

import Capitals from './Capitals';
import Directorbox from './Directorbox';
import Comiitemanagment from './Comiitemanagment';

function Govbanner() {
  return (
    <Fragment>
        <div className='container governancemain motor' >
        <div className='row'>

                <div className='col-sm-12 heads govbanner'>
                    <Fade up delay={500}><h2 className="oswald">Governance</h2></Fade>
                </div>
    


                <div className='col-sm-12 heads text govdirectors' id='directors'>
                <Fade up delay={500}><h2 >Board of Directors </h2></Fade>
                  <Directorbox/>
                </div>


                <div className='col-sm-12 heads text govdirectors' id='managment'>
                <h2 >Management Committee</h2>
                 <Comiitemanagment/>
                </div>

                <div className='col-sm-12 heads text shareholder'>
                  <Capitals/>
                </div>

   

            
        </div>
        </div>
    </Fragment>
  )
}

export default Govbanner