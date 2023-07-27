import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Mufti from "../../Assets/img/mufti.png"

function Muftisajjad() {
    return (
        <Fragment>

            <div className='container-fluid shares marbot mufti' id="shariah">
                <div className='row'>

                    <div className='col-sm-5 imageshare'  >
                        <img src={Mufti} alt='shareholding' data-aos="fade-up" data-aos-duration="4000" />
                    </div>

                    <div className='col-sm-7 audp'>
                        <h2 data-aos="fade-right" data-aos-duration="4000">CEO Mufti Sajjad Usmani</h2>
                        <h3 data-aos="fade-right" data-aos-duration="4000">Shariah Advisor and Member, Shariah Board</h3>
                        <p data-aos="fade-right" data-aos-duration="4000">Mufti Sajjad Usmani is a qualified CSAA (Certified Shariah Advisor & Auditor) from AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions, Bahrain), Takhassus Fil Ifta (Specialization in Islamic Jurisprudence and Fatwa) and Dars-e-Nizami/Shahadat-ul-Aalamia from Jamia Dar-ul-Uloom, Karachi and a certified anatomist of Sukuk, Islamic Banking & Finance. He is a seasoned professional with over 12 & 8 years of working experience from writing Fatawa to serving as a Shariah Advisor of the leading financial institutions of Pakistan respectively.</p>
                        <p data-aos="fade-right" data-aos-duration="4000">He has blend experience of providing Shariah consultancy to four (4) Takaful Companies as Shariah Advisor since 2015 and also served as Shariah Advisor of the Tier 2 Mudharabah Sukuk issued by Meezan Bank Limited. He is the Shariah Board Member at National Bank of Pakistan (Aitamad Islamic).</p>
                        <p data-aos="fade-right" data-aos-duration="4000">He also has 7 years’ working experience with leading Auditing firms like A.F.F (PWC) & Deloitte Pakistan, as a Shariah Consultant & Head of Shariah Audit and has supervised various Shariah Audits of renowned Islamic Banks, Takaful Companies and Sukuks under the audit firm’s umbrella. He knows the practical problems being faced by the Islamic Financial Institution.</p>
                        <p data-aos="fade-right" data-aos-duration="4000">He is a teacher of Hadith and Fiqh (Islamic Jurisprudence) at Jamia Dar-ul-Uloom, Karachi besides teaching in various leading Islamic educational institutions like IBA CEIF & Center for Islamic Economic since 2011.</p>
                    </div>
                </div>
            </div>


        </Fragment>
    )
}

export default Muftisajjad

