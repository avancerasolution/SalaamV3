import React, { Fragment, useEffect } from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Individual from "../../Assets/pdf/Individual.pdf"
import Term from "../../Assets/pdf/Term.pdf"
import Waqf from "../../Assets/pdf/Waqf.pdf"
import { Link } from 'react-router-dom';


export default function Desktopnav({ change, setChange }) {
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
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">


            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item> <Link to="/whoweare#ceo" onClick={() => setChange(!change)}>CEO Message</Link> </NavDropdown.Item>
              <NavDropdown.Item> <Link to="/whoweare#ntn" onClick={() => setChange(!change)} >Company Detail </Link>  </NavDropdown.Item>
              <NavDropdown.Item> <Link to="/whoweare#shariah" onClick={() => setChange(!change)} >Shariah Advisor </Link>  </NavDropdown.Item>
              <NavDropdown.Item> <Link to="/whoweare#coc" onClick={() => setChange(!change)} > Code Of Conduct</Link></NavDropdown.Item>

            </NavDropdown>


            <NavDropdown title="Governance" id="basic-nav-dropdown">

              <NavDropdown.Item href=""><Link to="/governance#directors" onClick={() => setChange(!change)}>Board of Directors </Link> </NavDropdown.Item>
              <NavDropdown.Item href=""><Link to="/governance#managment" onClick={() => setChange(!change)}> Management Committee </Link> </NavDropdown.Item>
              <NavDropdown.Item href=""><Link to="/governance#auditor" onClick={() => setChange(!change)}>Name of Auditor </Link>  </NavDropdown.Item>
              <NavDropdown.Item href=""> <Link to="/governance#legal" onClick={() => setChange(!change)}>Legal Advisor</Link></NavDropdown.Item>
              <NavDropdown.Item href=""> <Link to="/governance#pattern" onClick={() => setChange(!change)}>Pattern of Shareholding </Link> </NavDropdown.Item>

            </NavDropdown>
            <Nav.Link><Link to="/products" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>Products </Link></Nav.Link>
            {/* <NavDropdown title="Products" id="basic-nav-dropdown">

              <NavDropdown.Item href=""><Link to="/products" onClick={() => setChange(!change)}>Individual Products </Link> </NavDropdown.Item>        

            </NavDropdown> */}



            <NavDropdown title="Investor Relations" id="basic-nav-dropdown">

              <NavDropdown.Item href="">	Investor Complaints</NavDropdown.Item>
              {/*<NavDropdown.Item href=""> Investment Performance Report</NavDropdown.Item>
              <NavDropdown.Item href=""> Individual Life - Unit Prices </NavDropdown.Item>
              <NavDropdown.Item href=""> Bancatakaful - Unit Prices	</NavDropdown.Item>*/}
              <NavDropdown title="Funds" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Funds Prices</NavDropdown.Item>
                <NavDropdown.Item href="">Past Prices</NavDropdown.Item>

              </NavDropdown>

              <NavDropdown.Item href="https://sdms.secp.gov.pk/~sdmsadmn/"> SECP's </NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Financial Statements" id="basic-nav-dropdown">
              <NavDropdown.Item href=""> Financial Reports (PDF)</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Downloads" id="basic-nav-dropdown">

              <NavDropdown title="Individuals (PDF)" id="basic-nav-dropdown">
                <NavDropdown.Item href=""> Forms </NavDropdown.Item>
                <NavDropdown.Item href="">  PMD  </NavDropdown.Item>
                <NavDropdown.Item href={Individual} target="_blank">Shariah Certificates of Products </NavDropdown.Item>
                <NavDropdown.Item href=""> Product Brochures/Flyers </NavDropdown.Item>
                <NavDropdown.Item href=""> Medical network </NavDropdown.Item>
                <NavDropdown.Item href=""> How to buy online </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Corporate (PDF)" id="basic-nav-dropdown">
                <NavDropdown.Item href=""> Forms </NavDropdown.Item>
                <NavDropdown.Item href="">  PMD  </NavDropdown.Item>
                <NavDropdown.Item href={Term} target="_blank">Shariah Certificates of Products (Corporate) </NavDropdown.Item>
                <NavDropdown.Item href=""> Product Brochures/Flyers</NavDropdown.Item>
                <NavDropdown.Item href="">  Medical network </NavDropdown.Item>
                <NavDropdown.Item href="">  Discounted OPD centers   </NavDropdown.Item>
                <NavDropdown.Item href="">   How to buy online    </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Waqf Deed" id="basic-nav-dropdown">
                <NavDropdown.Item href={Waqf} target="_blank"> Waqf Deed </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="PTF Policies" id="basic-nav-dropdown">
                <NavDropdown.Item href=""> PTF Policies </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Takaful Rules" id="basic-nav-dropdown">
                <NavDropdown.Item href=""> Takaful Rules </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Unclaimed Benefits" id="basic-nav-dropdown">
                <NavDropdown.Item href=""> Unclaimed Benefits </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Takaful Booklet" id="basic-nav-dropdown">
                <NavDropdown.Item href=""> Takaful Booklet </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Policies" id="basic-nav-dropdown">
                <NavDropdown.Item href=""> Policies </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>

            <NavDropdown title="Media Center" id="basic-nav-dropdown">
              <NavDropdown.Item href=""> Takaful Videos	</NavDropdown.Item>
              <NavDropdown.Item href=""> News & Updates	</NavDropdown.Item>
            </NavDropdown>


            
            <NavDropdown title="E Services" id="basic-nav-dropdown">
              <NavDropdown.Item href=""> Certificate Verification	</NavDropdown.Item>
              <NavDropdown.Item href=""> Complaint Box	</NavDropdown.Item>
              <NavDropdown.Item href=""> Whistle Blowing Form	</NavDropdown.Item>
    
            </NavDropdown>

            <NavDropdown title="Online Portals" id="basic-nav-dropdown">
              <NavDropdown.Item href=""> Buy Online	</NavDropdown.Item>
              <NavDropdown.Item href=""> Customer Portal Link	</NavDropdown.Item>
              <NavDropdown.Item href=""> Claim Portal	</NavDropdown.Item>
              <NavDropdown.Item href=""> Agent Portal	</NavDropdown.Item>
            </NavDropdown>


          </Nav>
        </Navbar.Collapse>

      </Navbar>


    </Fragment>
  )
}
