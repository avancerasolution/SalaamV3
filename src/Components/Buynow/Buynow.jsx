import React, { Fragment, useState } from "react";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message, DatePicker, Select, Spin } from "antd";
import Flip from "react-reveal/Flip";
import Buynowimage from "../../Assets/img/buynow.png";

const { Option } = Select;

const Buynow = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [formStep1] = Form.useForm();
  const [formStep2] = Form.useForm();
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNextClick = () => {
    formStep1.validateFields().then((values) => {
      setFormData({ ...formData, ...values });
      setShow(true);
    });
  };

  const handleBackClick = () => {
    setShow(false);
  };

  const handleFormSubmit = (values) => {
    setIsLoading(true);
    // Simulate an API call or asynchronous operation for form submission
    setTimeout(() => {
      // Handle form submission here
      console.log("Form values:", values);

      // Combine the form data from both steps into a single object
      const combinedFormData = { ...formData, ...values };

      if (!show) {
        // If it's the first step, set the form data for step 1
        formStep1.validateFields().then((values) => {
          setFormData({ ...formData, ...values });
          setShow(true);
          setIsLoading(false);
        });
      } else {
        // If it's the second step, set the form data for step 2 and show a success message
        formStep2.validateFields().then((values) => {
          setFormData({ ...formData, ...values });
          setIsLoading(false);
          setIsSubmitted(true);
          console.log("Combined Form Data:", combinedFormData); // Log the combined form data here
          setShow(false);

          // Show the success message in a toast notification
          message.success("Form submitted successfully!");

          // Reset the success message after a few seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000); // 5000ms = 5 seconds
        });
      }

      // Clear the form after submitting
      formStep1.resetFields();
      formStep2.resetFields();
    }, 1000); // Simulate a 1-second delay for form submission
  };

  const handleDateChange = (date, dateString) => {
    // Handle Date of Birth change here if needed
  };

  return (
    <>
      <div className="">
        {/* <Header /> */}
      </div>
      <Fragment>
        <Fade left>
          <div className="container tabss motor buynow">
            <div className="row">
              <Fade left>
                <div className="col-sm-6">
                  <img src={Buynowimage} alt="buynowimage" />
                </div>
              </Fade>
              <div className="col-sm-6 homepagesec buynowpage">
                <div className=" Buynowform">
                  {!show ? (
                    <>
                      {" "}
                      <Fade right>
                        <div className="">
                          <h4 className="oswald"> Customer information</h4>
                        </div>
                        <div className="innerbuyNow next">
                          <Form
                            layout="vertical"
                            onFinish={handleNextClick}
                            form={formStep1}
                          >
                            <div className="form">
                              <Flip top delay={500}>
                                <Form.Item name="firstName">
                                  <Input placeholder="First Name" />
                                </Form.Item>
                              </Flip>

                              <Flip top delay={1000}>
                                <Form.Item  name="lastName">
                                  <Input placeholder="Last Name" />
                                </Form.Item>
                              </Flip>

                              <Flip top delay={1500}>
                                <Form.Item name="gender" initialValue="Male">
                                  <Select placeholder="Select Gender">
                                    <Option value="Male">Male</Option>
                                    <Option value="Female">Female</Option>
                                  </Select>
                                </Form.Item>
                              </Flip>

                              <Flip top delay={2000}>
                                <Form.Item
                                  name="dob"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please select your date of birth!",
                                    },
                                  ]}
                                >
                                  <DatePicker
                                    placeholder="Select Date of Birth"
                                    onChange={handleDateChange}
                                  />
                                </Form.Item>
                              </Flip>
                            </div>
                            <div className="footerbottom">
                              <Flip top delay={2500}>
                                <div className="formSubmit">
                                  <Button
                                    htmlType="submit"
                                    className="buttons"
                                    loading={isLoading}
                                  >
                                    Next
                                  </Button>
                                </div>
                              </Flip>
                            </div>
                          </Form>
                        </div>
                      </Fade>
                    </>
                  ) : (
                    <Fade right>
                      <div className="buyNowHeader">
                        <h4 className="oswald"> Plan Information </h4>
                      </div>

                      <div className="innerbuyNow">
                        <Form
                          layout="vertical"
                          onFinish={handleFormSubmit}
                          form={formStep2}
                        >
                          <div className="form">
                            <Flip top delay={1000}>
                              <Form.Item
                                name="contribution"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter the contribution!",
                                  },
                                ]}
                              >
                                <Input placeholder="Contribution" />
                              </Form.Item>
                            </Flip>
                            <Flip top delay={1500}>
                              <Form.Item
                                name="contributionFrequency"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter the contribution frequency!",
                                  },
                                ]}
                              >
                                <Input placeholder="Contribution Frequency" />
                              </Form.Item>
                            </Flip>
                            <Flip top delay={2000}>
                              <Form.Item
                                name="coverMultiple"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter the cover multiple!",
                                  },
                                ]}
                              >
                                <Input placeholder="Cover Multiple" />
                              </Form.Item>
                            </Flip>
                            <Flip top delay={2500}>
                              <Form.Item
                                name="contributionTerm"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter the contribution term!",
                                  },
                                ]}
                              >
                                <Input placeholder="Contribution Term" />
                              </Form.Item>
                            </Flip>
                            <Flip top delay={3000}>
                              <Form.Item
                                name="benefitTerm"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter the benefit term!",
                                  },
                                ]}
                              >
                                <Input placeholder="Benefit Term" />
                              </Form.Item>
                            </Flip>
                            <Flip top delay={3500}>
                              <Form.Item
                                name="faceValue"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter the face value!",
                                  },
                                ]}
                              >
                                <Input placeholder="Face Value" />
                              </Form.Item>
                            </Flip>
                          </div>
                          <div className="footerbottom submitform">
                            <div className="formSubmit">
                              <Flip top delay={4000}>
                                <Button
                                  onClick={handleBackClick}
                                  className="buttons"
                                >
                                  Back
                                </Button>
                              </Flip>

                              <Flip top delay={4500}>
                                <Button
                                  htmlType="submit"
                                  className="buttons"
                                  loading={isLoading}
                                >
                                  Submit
                                </Button>
                              </Flip>
                            </div>
                          </div>
                        </Form>
                      </div>
                    </Fade>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Fade>
        {isSubmitted && (
          <div className="submit-message" style={{ position: "fixed", bottom: 20, left: 20 }}>
            <p>Form submitted successfully!</p>
          </div>
        )}
      </Fragment>
    </>
  );
};

export default Buynow;