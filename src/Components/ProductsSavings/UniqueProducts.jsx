import React from 'react'
import { Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import { savingsprod } from "../../Data/Data"
import Check from "../../Assets/img/checks.png"

function UniqueProducts() {
    return (
        <Fragment>
            <div className='sub productetxt uniqueprods'>
                <div className='row'>
                    <Fade left delay={500}>
                        <div className='col-sm-12 writeus'>
                            <h2>Unique Product Features</h2>
                        </div>
                    </Fade>
                </div>


                <div className='row prodbox'>
                    {savingsprod.map((item) => {
                        return (
                            <div className='col-sm-4' key={item.key} data-aos={item.anim} data-aos-duration="4000">
                                <h3>{item.mainheading}</h3>
                                <p>{item.content}</p>
                            </div>

                        )
                    })}
                </div>

            </div>


        <Fade up delay={500}>
        <div className='row claimprocedure'>
          <div className='col-sm-12'>
            <Fade left delay={700}><h2> Additional Features</h2></Fade>
            <ul>
                    <Fade up delay={800}><li><img src={Check} alt='Check'/> End to end digital and seamless customer onboarding journey</li></Fade>
                    <Fade up delay={900}> <li><img src={Check} alt='Check'/>  Digital servicing for easy deposit, withdrawal, alterations and claims intimation facility through customer portal/app</li></Fade>
                    <Fade up delay={1000}> <li><img src={Check} alt='Check'/> Add-ons offering digital discounts</li></Fade>
                    <Fade up delay={1100}><li><img src={Check} alt='Check'/>  Online virtual clinic offering, free OPD consultations and advice</li></Fade>
            </ul>
          </div>
        </div>
        </Fade>
        </Fragment>
    )
}

export default UniqueProducts