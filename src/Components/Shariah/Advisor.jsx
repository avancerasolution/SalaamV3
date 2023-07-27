import React from 'react'
import { Fragment } from 'react'
import image1 from "../../Assets/img/s1.png"
import Fade from "react-reveal/Fade";

function Advisor() {
  return (
    <Fragment>
         <div className='row tabscss' >
         <Fade left delay={400}>
        <div className='col-sm-4'>
          <img src={image1} alt='asd' />
        </div>
        </Fade>

        <Fade right delay={400}>
        <div className='col-sm-8'>
          <h2>Mufti Sajjad Ashraf Usmani</h2>
          <h3>Shariah Advisor</h3>
          <p>Mufti Sajjad Usmani is a qualified CSAA (Certified Shariah Advisor & Auditor) from AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions, Bahrain), Takhassus Fil Ifta (Specialization in Islamic Jurisprudence and Fatwa) and Dars-e-Nizami/Shahadat-ul-Aalamia from Jamia Dar-ul-Uloom, Karachi and a certified anatomist of Sukuk, Islamic Banking & Finance.</p>
          <p>He is a seasoned professional with over 12 & 8 years of working experience from writing Fatawa to serving as a Shariah Advisor of the leading financial institutions of Pakistan respectively.He has blend experience of providing Shariah consultancy to four (4) Takaful Companies as Shariah Advisor since 2015 and also served as Shariah Advisor of the Tier 2 Mudharabah Sukuk issued by Meezan Bank Limited. Currently he is also the Shariah Board Member at National Bank of Pakistan (Aitamad Islamic).</p>
          <p>He also has 7 years’ working experience with leading Auditing firms like A.F.F (PWC) & Deloitte Pakistan, as a Shariah Consultant & Head of Shariah Audit and has supervised various Shariah Audits of renowned Islamic Banks, Takaful Companies and Sukuks under the audit firm’s umbrella. He knows the practical problems being faced by the Islamic Financial InstitutionMufti Sb has qualified Takhassus (specialization) in Islamic Jurisprudence and Dar se Nizami from Jamia Darul Uloom, Karachi and a certified anatomist of Sukuks, Islamic Banking & Finance. He is also pursuing MBA besides having a bachelor’s degree in Economics from the University of Karachi that makes him the perfectly blended professional in the field of Islamic Finance & Takaful.He is a teacher of Hadith and Fiqh (Islamic Jurisprudence) at Jamia Dar-ul-Uloom, Karachi besides teaching in various leading Islamic educational institutions like IBA CEIF & Center for Islamic Economic since 2011.</p>
        </div>
        </Fade>
      </div>
    </Fragment>
  )
}

export default Advisor