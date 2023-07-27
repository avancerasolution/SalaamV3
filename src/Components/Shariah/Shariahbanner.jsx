import React, { Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Shariahtext from './Shariahtext';
import SharaihBoard from './SharaihBoard';
import Advisor from './Advisor';
import Fatwa from './Fatwa';
import Certificates from './Certificates';
import Tabss from './Tabs';

function Shariahbanner() {
    return (
        <Fragment>
            <div className='col-sm-12 heads govbanner'>
                <Fade up delay={500}><h2 className="oswald">Shariah Compliance</h2></Fade>
            </div>


            <div className='container tabss motor' >
                <div className='row'>

                    <div className='col-sm-12 heads text mymaxheight'>
                        <Shariahtext />
                    </div>

                    <div className='col-sm-12 heads text mymaxheight'>
                        <Tabss />
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Shariahbanner