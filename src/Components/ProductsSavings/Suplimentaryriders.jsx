import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Share from "../../Assets/img/shareholder.png"
import Fade from 'react-reveal/Fade';

function Suplimentaryriders() {
    return (
        <Fragment>

            <div className='container-fluid shares riders'>
                <div className='row'>
                    <Fade left delay={500}>
                        <div className='col-sm-5 imageshare'>
                            <img src={Share} alt='shareholding' />
                        </div>
                    </Fade>

                    <Fade right delay={500}>
                        <div className='col-sm-7 '>
                            <h2>SUPPLEMENTARY RIDERS</h2>

                            <div className='supliment'>
                                <h3>Permanent and Total Disablement Takaful Benefit (PTD)</h3>
                                <p>Receive financial assistance in case of permanent and total disability.</p>
                            </div>

                            <div className='supliment'>
                                <h3>Family Income Takaful Benefit (FITB)</h3>
                                <p>Get a steady income for your family in case of your death</p>
                            </div>

                            <div className='supliment'>
                                <h3>Waiver of Deposit Takaful Benefit (WODTB)</h3>
                                <p>Continue to earn profits without making further contributions in case of total and permanent disability</p>
                            </div>

                            <div className='supliment'>
                                <h3>Accidental Death and Dismemberment Takaful Benefit (ADDTB)</h3>
                                <p>Receive financial assistance in case of accidental death or loss of limbs or eyesight.</p>
                            </div>

                            <div className='supliment'>
                                <h3>Critical Illness Takaful Benefit (CITB)</h3>
                                <p>Receive financial assistance in case of critical illnesses such as cancer, heart attack, or stroke.</p>
                            </div>

                            <div className='supliment'>
                                <h3>Accidental Death Takaful Benefit (ADTB)</h3>
                                <p>Receive financial assistance in case of accidental death.</p>
                            </div>


                        </div>
                    </Fade>
                </div>
            </div>

        </Fragment>
    )
}

export default Suplimentaryriders

