import React from 'react'
import { Fragment, useEffect } from 'react'
import Accordion from "react-bootstrap/Accordion";
// import { RxCross2 } from "react-icons/rx";
import Fade from "react-reveal/Fade";
import Downloads from "./Downloads";
import { useNavigate } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import { Link } from 'react-router-dom';

function Sidemenu({ show, setshow, change, setChange }) {
    const navigate = useNavigate()

    useEffect(() => {
      const href = window.location.href.substring(
        window.location.href.lastIndexOf('#') + 1
      );
      console.log(href)
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, [change]);
  
  return (
   <Fragment>
    
      <div className="mobileMenu" >
        <div>
          <div className="container menuBar">
            <span onClick={() => setshow(false)}>
              {/* <RxCross2 /> */}
            </span>
           
            <Accordion  flush>
            <Fade right delay={500}>
              <Accordion.Item eventKey="0">
                <Accordion.Header> About Us </Accordion.Header>
                <Accordion.Body>
                <ul>
                    <li> <Link to="/whoweare#ceo" onClick={() => setChange(!change)}>CEO Message</Link> </li>
                    <li><Link to="/whoweare#ntn" onClick={() => setChange(!change)} >Company Detail </Link></li>
                    <li> <Link to="/whoweare#shariah" onClick={() => setChange(!change)} >Shariah Advisor </Link> </li>
                    <li> <Link to="/whoweare#coc" onClick={() => setChange(!change)} > Code Of Conduct</Link></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              </Fade>

              <Fade right delay={1000}>
              <Accordion.Item eventKey="1">
                <Accordion.Header> Governance </Accordion.Header>
                <Accordion.Body>
                <ul>
                    <li><Link to="/governance#directors" onClick={() => setChange(!change)}>Board of Directors </Link>  </li>
                    <li> <Link to="/governance#managment" onClick={() => setChange(!change)}> Management Committee </Link></li>
                    <li> <Link to="/governance#auditor" onClick={() => setChange(!change)}>Name of Auditor </Link> </li>
                    <li>  <Link to="/governance#legal" onClick={() => setChange(!change)}>Legal Advisor</Link></li>
                    <li> <Link to="/governance#pattern" onClick={() => setChange(!change)}>Pattern of Shareholding </Link>  </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              </Fade>

              <Fade right delay={1300}>
              <Accordion.Item eventKey="3">
                <Accordion.Header> Products </Accordion.Header>
                <Accordion.Body>
                <ul>
                    <li><Link to="/products" onClick={() => setChange(!change)}>Individual Products </Link> </li>
                    <li> <Link to="/" onClick={() => setChange(!change)}> Corporate Products </Link> </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              </Fade>

              <Fade right delay={1600}>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Investor Relations</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><Link to="">Investor Complaints - person handling grievances </Link></li>
                    <li><Link to=""> Investment Performance Report</Link> </li>
                    <li> <Link to=""> Individual Life - Unit Prices </Link></li>
                    <li> <Link to="">Bancatakaful - Unit Prices</Link></li>
                    <li> <Link to=""> SECP's Service Desk Management System </Link></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              </Fade>

              <Fade right delay={1900}>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Financial Statements</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><Link to="">Financial Reports (PDF)</Link></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              </Fade>

            <Fade right delay={2200}>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Downloads</Accordion.Header>
                <Accordion.Body>
                  <Downloads/>
                </Accordion.Body>
              </Accordion.Item>
              </Fade>

              <Fade right delay={2500}>
              <Accordion.Item eventKey="7">
                <Accordion.Header>Media Center</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><Link to="">Takaful Videos</Link></li>
                    <li><Link to="">News & Updates</Link></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              </Fade>

              <Fade right delay={2800}>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Online Portals</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><Link to="">Buy Online</Link></li>
                    <li><Link to="">Customer Portal Link</Link></li>
                    <li><Link to="">Claim Portal	</Link></li>
                    <li><Link to="">Agent Portal</Link></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              </Fade>

     
            </Accordion>
          </div>
        </div>
        <Flip top delay={3000}>
        <div className='backbtn'>
            <button className='back buttons' onClick={() => navigate(-1)} >Back</button>
        </div>
        </Flip >
      </div>
    
   </Fragment>
  )
} 

export default Sidemenu