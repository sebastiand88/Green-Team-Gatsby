import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Button, Container, Row, Col } from "react-bootstrap"
import heroVideo from "../assets/videos/heroVideo.mp4"
import { GiSolarPower, GiWindTurbine } from "react-icons/gi"
import { BiWater } from "react-icons/bi"

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
    </Layout>
  )
}
