import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Image,
} from "react-bootstrap"
import heroVideo from "../assets/videos/heroVideo.mp4"
import { GiSolarPower, GiWindTurbine } from "react-icons/gi"
import { BiWater } from "react-icons/bi"
import { AiFillCar } from "react-icons/ai"
import { ImOffice } from "react-icons/im"
import { BsHouseFill } from "react-icons/bs"

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className={styles.heroContainer}>
        <div className={styles.heroBg}>
          <video
            className={styles.heroVideo}
            src={heroVideo}
            type="video/mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Green Team</h1>
          <p className={styles.heroDesc}>Renewable energy provider</p>
          <Button
            className={styles.heroBtn}
            to="/about"
            variant="outline-success"
            size="lg"
          >
            About Us
          </Button>
        </div>
      </div>

      {/* Energy */}
      <h1 className={styles.topLine}>Our Future</h1>
      <h1 className={styles.bottomLine}>Renewable Energy Sources</h1>
      <Container>
        <Row className={styles.energyRow}>
          <Col lg={4}>
            <div className={styles.energyIcon}>
              <GiWindTurbine size={72} />
            </div>
            <p className={styles.energyTitle}>Wind Power</p>
            <p className={styles.energyDesc}>
              Over 2200 Wind Turbines across the UK
            </p>
          </Col>

          <Col lg={4}>
            <div className={styles.energyIcon}>
              <GiSolarPower size={72} />
            </div>
            <p className={styles.energyTitle}>Solar Power</p>
            <p className={styles.energyDesc}>Over 6,473 MW solar capacity</p>
          </Col>

          <Col lg={4}>
            <div className={styles.energyIcon}>
              <BiWater size={72} />
            </div>
            <p className={styles.energyTitle}>Hydropower</p>
            <p className={styles.energyDesc}>
              More than 55% of our energy is powered by water
            </p>
          </Col>
        </Row>
      </Container>

      {/* Products */}
      <div className={styles.productsContainer}>
        <Row id="plans" className={styles.productsRow}>
          <h1 className={styles.topLine}>What we Offer</h1>
          <h1 className={styles.bottomLine}>Popular Energy Plans</h1>
          <Col sm={6} lg={6} xl={3}>
            <Card className={styles.productsCard} style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              />
              <Card.Body>
                <Card.Title className={styles.productsCardTitle}>
                  Home Plan
                </Card.Title>
                <Card.Text className={styles.productsCardText}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <div className="d-grid gap-2">
                  <Button variant="success" size="lg">
                    See Plan
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} lg={6} xl={3}>
            <Card className={styles.productsCard} style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80"
              />
              <Card.Body>
                <Card.Title className={styles.productsCardTitle}>
                  Car Charger Plan
                </Card.Title>
                <Card.Text className={styles.productsCardText}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <div className="d-grid gap-2">
                  <Button variant="success" size="lg">
                    See Plan
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} lg={6} xl={3}>
            <Card className={styles.productsCard} style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1600490819528-42405785433a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80"
              />
              <Card.Body>
                <Card.Title className={styles.productsCardTitle}>
                  Home and Car Plan
                </Card.Title>
                <Card.Text className={styles.productsCardText}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <div className="d-grid gap-2">
                  <Button variant="success" size="lg">
                    See Plan
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} lg={6} xl={3}>
            <Card className={styles.productsCard} style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2073&q=80"
              />
              <Card.Body>
                <Card.Title className={styles.productsCardTitle}>
                  Business Plan
                </Card.Title>
                <Card.Text className={styles.productsCardText}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <div className="d-grid gap-2">
                  <Button variant="success" size="lg">
                    See Plan
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Testimonials */}
      <h1 className={styles.topLine}>Testimonials</h1>
      <h1 className={styles.bottomLine}>Our Customer Feedback</h1>
      <Container>
        <Row>
          <Col md={12} lg={4} className={styles.testimonialCol}>
            <div className={styles.testimonial}>
              <Image
                className={styles.testimonialImg}
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                fluid
                alt=""
              />
              <div className={styles.testimonialIcon}>
                <AiFillCar size={72} />
              </div>
              <h3 className={styles.testimonialName}>Sarah Anderson</h3>
              <p className={styles.testimonialDesc}>
                Maecenas laoreet semper justo sed tristique. Phasellus lorem
                sem, tincidunt tempor ipsum ut, tempus pulvinar tortor. Vivamus
                mattis risus eget lobortis ullamcorper. Aliquam erat volutpat.
                Aenean nunc risus, posuere in consectetur et, laoreet a turpis.
                Sed egestas, quam et sodales suscipit, sem neque tempus neque,
                eget posuere odio orci id nulla.
              </p>
            </div>
          </Col>

          <Col md={12} lg={4} className={styles.testimonialCol}>
            <div className={styles.testimonial}>
              <Image
                className={styles.testimonialImg}
                src="https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                fluid
                alt=""
              />
              <div className={styles.testimonialIcon}>
                <ImOffice size={72} />
              </div>
              <h3 className={styles.testimonialName}>John Wilson</h3>
              <p className={styles.testimonialDesc}>
                Maecenas laoreet semper justo sed tristique. Phasellus lorem
                sem, tincidunt tempor ipsum ut, tempus pulvinar tortor. Vivamus
                mattis risus eget lobortis ullamcorper. Aliquam erat volutpat.
                Aenean nunc risus, posuere in consectetur et, laoreet a turpis.
                Sed egestas, quam et sodales suscipit, sem neque tempus neque,
                eget posuere odio orci id nulla.
              </p>
            </div>
          </Col>

          <Col md={12} lg={4} className={styles.testimonialCol}>
            <div className={styles.testimonial}>
              <Image
                className={styles.testimonialImg}
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80"
                fluid
                alt=""
              />
              <div className={styles.testimonialIcon}>
                <BsHouseFill size={72} />
              </div>
              <h3 className={styles.testimonialName}>Andy Smith</h3>
              <p className={styles.testimonialDesc}>
                Maecenas laoreet semper justo sed tristique. Phasellus lorem
                sem, tincidunt tempor ipsum ut, tempus pulvinar tortor. Vivamus
                mattis risus eget lobortis ullamcorper. Aliquam erat volutpat.
                Aenean nunc risus, posuere in consectetur et, laoreet a turpis.
                Sed egestas, quam et sodales suscipit, sem neque tempus neque,
                eget posuere odio orci id nulla.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
