import React from "react"
import Layout from "../components/Layout"

import * as styles from "../styles/contact.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Row, Col, Container, Button } from "react-bootstrap"

export default function Contact() {
  return (
    <Layout>
      <div className={styles.contactTopImg}>
        <h3 className={styles.contactTopImgDesc}>Green Team</h3>
      </div>
      <Container>
        <p className={styles.bottomLine}>Main Office</p>

        <Row style={{ margin: "0" }}>
          <Col md={6}>
            <div className={styles.contactAdress}>
              <h5 className={styles.contactAdressTitle}>Address:</h5>
              <h5 className={styles.contactAdressDesc}>
                123 Buckingham Palace Rd,
              </h5>
              <h5 className={styles.contactAdressDesc}>London SW1</h5>
              <hr style={{ width: "300px", margin: "auto" }} />
              <h5 className={styles.contactAdressTitle}>Opening Hours:</h5>
              <h5 className={styles.contactAdressDesc}>
                Monday - Friday: 8AM - 10PM
              </h5>
              <h5 className={styles.contactAdressDesc}>Saturday: 8AM - 8PM</h5>
              <h5 className={styles.contactAdressDesc}>Sunday: 9AM - 5PM</h5>
            </div>
          </Col>

          <Col className={styles.contactAdressMap} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.0596080969244!2d-0.1485742840145509!3d51.493773619520134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876051f4daefad3%3A0x1266d241074a3e5f!2s123%20Buckingham%20Palace%20Rd%2C%20London%20SW1W%209SR!5e0!3m2!1sen!2suk!4v1636471070913!5m2!1sen!2suk"
              class="contact-map"
              width="90%"
              height="400"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>

        <p className={styles.bottomLine}>Contact Us</p>
        <Form>
          <Row style={{ padding: "20px" }}>
            <Col md={6} style={{ paddingBottom: "30px" }}>
              <Form.Label>First Name *</Form.Label>
              <Form.Control type="text" placeholder="John" required />
            </Col>

            <Col md={6} style={{ paddingBottom: "30px" }}>
              <Form.Label>Last Name *</Form.Label>
              <Form.Control type="text" placeholder="Smith" required />
            </Col>

            <Col md={8} style={{ paddingBottom: "30px" }}>
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                placeholder="johnsmith@email.com"
                required
              />
            </Col>

            <Col md={4} style={{ paddingBottom: "30px" }}>
              <Form.Label>Phone Nr (Optional)</Form.Label>
              <Form.Control type="text" placeholder="07911 123456" />
            </Col>

            <Col md={12} style={{ paddingBottom: "30px" }}>
              <Form.Label>Your Message *</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Eneter your message here..."
                required
              />
            </Col>

            <Col className={styles.contactFormBtn} md={12}>
              <Button type="submit" variant="outline-success" size="lg">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <div className={styles.contactBottomImg}>
        <h3 className={styles.contactBottomImgDesc}>
          We Still Have A Long Road Ahead Of Us
        </h3>
      </div>
    </Layout>
  )
}
