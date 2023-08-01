import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Input, InputNumber } from 'antd';
import Logo from "../../Assets/Logo.png"
import Arrow from "../../Assets/img/formarrow.png"
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Accordion from 'react-bootstrap/Accordion';

function Footer() {

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Fragment>

      <div className='container myfooter hidetab'>
        <div className='row'>

          <Fade left delay={500}>
            <div className='col-sm-3'>
              <img src={Logo} alt='logo' className='footerlogo' />
              <p>Salaam Takaful Limited, is an Unlisted Public Limited Company incorporated in Pakistan </p>
              <p>6th floor, Business Centre,Plot No 19-1-A, Block -6. P.E.C.H.S., Shahrah-e-Faisal, Karachi Pakistan</p>

              <Link to="tel:021111875111">UAN: 021-111-875-111</Link>
              <Link to="mailto:support@salaamtakful.com">support@salaamtakful.com</Link>
            </div>
          </Fade>


          <Fade left delay={500}>
            <div className='col-sm-3'>
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="#">Claims Forms</Link></li>
                <li><Link to="#">Proposal Form</Link></li>
                <li><Link to="#">Certificate Verification</Link></li>
                <li><Link to="#">Careers</Link></li>
              </ul>
            </div>
          </Fade>


          <Fade right delay={500}>
            <div className='col-sm-3'>
              <h3>Support</h3>
              <ul>
                <li><Link to="#">Help & FAQs</Link></li>
                <li><Link to="#">Contact Us</Link></li>
                <li><Link to="#">Clain Resolution</Link></li>
                <li><Link to="#">Complaint Box</Link></li>
              </ul>
            </div>
          </Fade>


          <Fade right delay={500}>
            <div className='col-sm-3 last'>
              <h3 >Subscribe</h3>
              <p>Get the latest report about the insurance and company profile</p>

              <Form name="nest-messages" onFinish={onFinish} style={{ maxWidth: 600, }} validateMessages={validateMessages} >
                <Form.Item name={['user', 'email']} rules={[{ type: 'email', required: true, },]} >
                  <Input placeholder="E-mail Address" />
                </Form.Item>
                <Form.Item  >
                  <Button type="primary" htmlType="submit"> <img src={Arrow} alt='' />  </Button>
                </Form.Item>
              </Form>
              <div className="secp-img">
              <a href="https://sdms.secp.gov.pk/~sdmsadmn/">
              <img src="https://www.salaamtakaful.com/assets/images/SECPSDMF.png" alt="secp" />
              </a>
              </div>

            </div>
          </Fade>

        </div>
      </div>

{/* mobile footer */}

      <div className='container myfooter showtab'>
        <div className='row'>

          <Fade up delay={500}>
            <div className='col-sm-12 textcentr'>
              <img src={Logo} alt='logo' className='footerlogo' />
              <p>Salaam Takaful Limited, is an Unlisted Public Limited Company incorporated in Pakistan </p>
              <p>6th floor, Business Centre,Plot No 19-1-A, Block -6. P.E.C.H.S., Shahrah-e-Faisal, Karachi Pakistan</p>

              <Link to="tel:021111875111">UAN: 021-111-875-111</Link>
              <Link to="mailto:support@salaamtakful.com">support@salaamtakful.com</Link>
            </div>
          </Fade>

          <div className='col-sm-12'>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Quick Links</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><Link to="#">Claims Forms</Link></li>
                    <li><Link to="#">Proposal Form</Link></li>
                    <li><Link to="#">Certificate Verification</Link></li>
                    <li><Link to="#">Careers</Link></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Support</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><Link to="#">Help & FAQs</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                    <li><Link to="#">Clain Resolution</Link></li>
                    <li><Link to="#">Complaint Box</Link></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Subscribe</Accordion.Header>
                <Accordion.Body>
                  <p>Get the latest report about the insurance and company profile</p>

                  <Form name="nest-messages" onFinish={onFinish} style={{ maxWidth: 600, }} validateMessages={validateMessages} >
                    <Form.Item name={['user', 'email']} rules={[{ type: 'email', required: true, },]} >
                      <Input placeholder="E-mail Address" />
                    </Form.Item>
                    <Form.Item  >
                      <Button type="primary" htmlType="submit"> <img src={Arrow} alt='' /></Button>
                    </Form.Item>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>



            </Accordion>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer