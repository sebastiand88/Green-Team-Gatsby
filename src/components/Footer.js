import { Link } from "gatsby"
import React from "react"
import { Row, Col } from "react-bootstrap"
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <Row>
          <Col sm={6} lg={3}>
            <div className="footerTitle">
              <h1 className="footerMain">Green Team</h1>
              <p className="footerSecondary">Renewable energy provider</p>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div className="footerLinks">
              <h2 className="footerLinkTitle">Contact Us</h2>
              <Link className="footerLink" to="/contact">
                Get in Touch
              </Link>
              <Link className="footerLink" to="/about">
                About Us
              </Link>
              <Link className="footerLink" to="/plans">
                Energy Plans
              </Link>
              <Link className="footerLink" to="/book">
                Get a Quote
              </Link>
            </div>
          </Col>

          <Col sm={6} lg={3}>
            <div className="footerLinks">
              <h2 className="footerLinkTitle">Careers</h2>
              <Link className="footerLink" to="/">
                Green Engineer
              </Link>
              <Link className="footerLink" to="/">
                Resource Manager
              </Link>
              <Link className="footerLink" to="/">
                Customer Advisor
              </Link>
              <Link className="footerLink" to="/">
                Green Mechanic
              </Link>
            </div>
          </Col>

          <Col sm={6} lg={3}>
            <div className="footerLinks">
              <h2 className="footerLinkTitle">Social Media</h2>
              <Link className="footerLink" to="/">
                <FaTwitter /> Twitter
              </Link>
              <Link className="footerLink" to="/">
                <FaInstagram /> Instagram
              </Link>
              <Link className="footerLink" to="/">
                <FaFacebookF /> Facebook
              </Link>
              <Link className="footerLink" to="/">
                <FaLinkedinIn />
                LinkedIn
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  )
}
