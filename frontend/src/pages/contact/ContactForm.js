import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../styles/ContactForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useRedirect } from "../../hooks/useRedirect";

import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";

const ContactForm = () => {
  useRedirect("loggedOut");

  const [contactData, setContactData] = useState({
    name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, last_name, email, subject, message } = contactData;
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(contactData);
    try {
      await axiosReq.post("/contact/", contactData);
      history.push("/confirmation");
    } catch (err) {
      console.log("ERROR in submit: ", err);
      setErrors(err.response?.data);
    }
  };

  return (
    <Row classame={styles.Row}>
      <Col className="my-auto p-0 p-md-2" md={10}>
        <Container className={`${appStyles.Message} p-3`}>
          <h1 className={styles.Header}>Contact Us</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={last_name}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.last_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={subject}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={message}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.message?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Button
              className={`${btnStyles.Button} ${btnStyles.Bright} btn`}
              type="submit"
            >
              Submit
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default ContactForm;
