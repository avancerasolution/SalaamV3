import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

import Individual from "../../Assets/pdf/Individual.pdf"
import Term from "../../Assets/pdf/Term.pdf"
import Waqf from "../../Assets/pdf/Waqf.pdf"

function Downloads({ show, setshow }) {
  return (
    <div className="subs">
    <div>
      <div className="container submenus">
        <Accordion  flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Individuals (PDF)</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li> Forms </li>
                
                <li> PMD </li>
                <li> <Link to={Individual} target="_blank">Shariah Certificates of Products </Link></li>
                <li> Product Brochures/Flyers</li>
                <li> Medical network </li>
                <li> How to buy online </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Corporate (PDF)</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li> Forms </li>
                <li> PMD </li>
                <li> <Link to={Term} target="_blank">Shariah Certificates of Products (Corporate)</Link></li>
                <li> Product Brochures/Flyers</li>
                <li> Medical network </li>
                <li> Discounted OPD centers	 </li>							
                <li> How to buy online </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Waqf Deed</Accordion.Header>
            <Accordion.Body>
              <ul>
              <Link to={Waqf} target="_blank"><li> Waqf Deed </li></Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>PTF Policies</Accordion.Header>
            <Accordion.Body>
              <ul>
                
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Takaful Rules</Accordion.Header>
            <Accordion.Body>
              <ul>
                
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Unclaimed Benefits</Accordion.Header>
            <Accordion.Body>
              <ul>
                
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>Takaful Booklet</Accordion.Header>
            <Accordion.Body>
              <ul>
                
              </ul>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
    </div>
  </div>
  )
}

export default Downloads