import React from 'react'
import { Fragment } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SharaihBoard from './SharaihBoard';
import Advisor from './Advisor';
import Fatwa from './Fatwa';
import Certificates from './Certificates';

function Tabss() {
  return (
    <Fragment>
      <div className='sub shariahtabs'>


        <Tabs defaultActiveKey="Shariah" id="fill-tab-example" className="mb-3" fill  >
          <Tab eventKey="Shariah" title="Shariah Board">
            <SharaihBoard/>
          </Tab>
          <Tab eventKey="Advisor" title="Shariah Advisor">
            <Advisor/>
          </Tab>
          <Tab eventKey="Fatwa" title="Fatwa on Takaful">
            <Fatwa/>
          </Tab>
          <Tab eventKey="Certificates" title="Certificates" >
            <Certificates/>
          </Tab>
        </Tabs>

      </div>
    </Fragment>
  )
}

export default Tabss