import React from "react";
import styles from "../../styles/ContactForm.module.css";
import appStyles from "../../App.module.css";

import { Col, Row, Container } from "react-bootstrap";

const Confirmation = () => {
  return (
    <Row className={styles.Row}>
      <Col>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Thank you</h1>
          <p className={styles.Content}>
            We have received your message and will be in touch soon!
          </p>
        </Container>
      </Col>
    </Row>
  );
};

export default Confirmation;
