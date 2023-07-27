import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Ceo from "../../Assets/img/ceo.png"

function CeoMessages() {
    return (
        <Fragment>

            <div className='container-fluid shares marbot'>
                <div className='row'>

                    <div className='col-sm-5 imageshare'>
                        <img src={Ceo} alt='shareholding' data-aos="fade-up" data-aos-duration="4000" />
                    </div>

                    <div className='col-sm-7 audp'>
                        <h2 data-aos="fade-right" data-aos-duration="4000">CEO Message</h2>
                        <p data-aos="fade-right" data-aos-duration="4000">I believe that the foundation of our success lies in our unwavering commitment to ethical and responsible business practices and play an integral role in the fabric of our society, from comprehensive coverage plans to digitally enabling feasible customer journeys. We are enthusiastic about the chance we have every day to enhance our influence in society and take pride in sharing our advancements as we progress forward. Our mission is to further amplify our impact in the domains of sustainability, societal transformation, and community aid, as we pursue our expansion strategy and deliver value to our stakeholders.
                            As we continue to grow and expand, we remain committed to upholding our values and principles. We believe that by staying true to our Shariah-compliant business model, we can provide our customers with the peace of mind and security they need to be safe and sound.
                            I would like to express my appreciation to all those who have collaborated with us thus far and anticipate welcoming new partners in the future. Our commitment to you remains steadfast, and you will always remain our top priority.</p>
                    </div>
                </div>
            </div>




        </Fragment>
    )
}

export default CeoMessages