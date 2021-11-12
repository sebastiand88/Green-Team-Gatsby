// import { Link } from "gatsby"
import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default function Header() {
  return (
    <nav>
      <Navbar className="nav-bar" fixed="top" variant="dark" expand="md">
        <Container>
          <Navbar.Brand className="nav-brand" href="/">
            Green Team
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ms-auto">
              <Nav.Item as="li">
                <Link to="/" className="nav-link" activeClassName="active">
                  Home
                </Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Link to="/about" className="nav-link" activeClassName="active">
                  About
                </Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Link
                  to="/#plans"
                  className="nav-link"
                  activeClassName="active"
                >
                  Energy Plans
                </Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Link
                  to="/contact"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contact
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  )
}
