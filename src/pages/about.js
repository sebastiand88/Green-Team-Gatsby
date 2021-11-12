import React from "react"
import Layout from "../components/Layout"

import * as styles from "../styles/about.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Carousel,
  Tabs,
  Tab,
  Image,
  Col,
  Row,
  Container,
  Accordion,
  Form,
  Button,
} from "react-bootstrap"
import { MdOutlineRecycling, MdPets } from "react-icons/md"
import { BsFillTreeFill } from "react-icons/bs"
import { FaBicycle } from "react-icons/fa"
import { GiArchiveResearch, GiGuards } from "react-icons/gi"

export default function About() {
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <Carousel fade>
          <Carousel.Item style={{ height: "100vh" }}>
            <Image
              className={styles.carouselImg}
              src="https://images.unsplash.com/photo-1604009506606-fd4989d50e6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              fluid
              alt="Second slide"
            />

            <Carousel.Caption>
              <p className={styles.carouselDesc}>Reforestation.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ height: "100vh" }}>
            <Image
              className={styles.carouselImg}
              src="https://images.unsplash.com/photo-1624053335327-a57874e6d1fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80"
              fluid
              alt="First slide"
            />
            <Carousel.Caption>
              <p className={styles.carouselDesc}>Cleaning the oceans.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ height: "100vh" }}>
            <Image
              className={styles.carouselImg}
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              fluid
              alt="Third slide"
            />

            <Carousel.Caption>
              <p className={styles.carouselDesc}>Focusing on the future.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h1 className={styles.heroTitle}>What We Do</h1>
        <p className={styles.heroDesc}>What We Do</p>
        <Tabs defaultActiveKey="renewables" id="" className="mb-3">
          <Tab
            eventKey="renewables"
            title="Renewable Energy"
            style={{ padding: "5rem 0" }}
          >
            <Row style={{ justifyContent: "center", margin: "0.1rem" }}>
              <Col sm={6} lg={6} xl={3} style={{ marginTop: "3rem" }}>
                <Image
                  src="https://images.unsplash.com/photo-1619697101606-7c092a8e6281?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
                  fluid
                  style={{ maxHeight: "600px", borderRadius: "15px" }}
                />
              </Col>
              <Col sm={6} lg={6} xl={3} style={{ marginTop: "3rem" }}>
                <p className={styles.aboutTab}>
                  <h1 className={styles.aboutTabTitle}>Wind Power</h1>
                  Proin laoreet nisi ut risus suscipit, sed blandit lacus
                  feugiat. Nam et nibh vitae nisi rhoncus imperdiet et tincidunt
                  magna. Donec convallis mauris ullamcorper, cursus leo ac,
                  ultrices lectus. Curabitur egestas massa gravida, euismod est
                  non, condimentum tortor. Etiam eget maximus odio, lacinia
                  rhoncus magna. Donec eu nibh ac est posuere semper porttitor
                  ut diam. Donec blandit ipsum ut vulputate elementum. Nulla
                  facilisi. Quisque vel pellentesque libero. Nullam quis enim
                  fringilla, malesuada lorem vitae, suscipit tortor.
                </p>
              </Col>

              <Col sm={6} lg={6} xl={3} style={{ marginTop: "3rem" }}>
                <p className={styles.aboutTab}>
                  <h1 className={styles.aboutTabTitle}>Hydropower</h1>
                  Proin laoreet nisi ut risus suscipit, sed blandit lacus
                  feugiat. Nam et nibh vitae nisi rhoncus imperdiet et tincidunt
                  magna. Donec convallis mauris ullamcorper, cursus leo ac,
                  ultrices lectus. Curabitur egestas massa gravida, euismod est
                  non, condimentum tortor. Etiam eget maximus odio, lacinia
                  rhoncus magna. Donec eu nibh ac est posuere semper porttitor
                  ut diam. Donec blandit ipsum ut vulputate elementum. Nulla
                  facilisi. Quisque vel pellentesque libero. Nullam quis enim
                  fringilla, malesuada lorem vitae, suscipit tortor.
                </p>
              </Col>
              <Col sm={6} lg={6} xl={3} style={{ marginTop: "3rem" }}>
                <Image
                  src="https://images.unsplash.com/photo-1518738617820-fb8e4d86fd54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1970&q=80"
                  fluid
                  style={{ maxHeight: "600px", borderRadius: "15px" }}
                />
              </Col>

              <Col sm={6} lg={6} xl={3} style={{ marginTop: "3rem" }}>
                <p className={styles.aboutTab}>
                  <h1 className={styles.aboutTabTitle}>Tidal energy</h1>
                  Proin laoreet nisi ut risus suscipit, sed blandit lacus
                  feugiat. Nam et nibh vitae nisi rhoncus imperdiet et tincidunt
                  magna. Donec convallis mauris ullamcorper, cursus leo ac,
                  ultrices lectus. Curabitur egestas massa gravida, euismod est
                  non, condimentum tortor. Etiam eget maximus odio, lacinia
                  rhoncus magna. Donec eu nibh ac est posuere semper porttitor
                  ut diam. Donec blandit ipsum ut vulputate elementum. Nulla
                  facilisi. Quisque vel pellentesque libero. Nullam quis enim
                  fringilla, malesuada lorem vitae, suscipit tortor.
                </p>
              </Col>
              <Col sm={6} lg={6} xl={3} style={{ marginTop: "3rem" }}>
                <Image
                  src="https://images.unsplash.com/photo-1532426532228-533e74dc21c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
                  fluid
                  style={{ maxHeight: "600px", borderRadius: "15px" }}
                />
              </Col>

              <Col sm={6} lg={6} xl={3} style={{ marginTop: "3rem" }}>
                <Image
                  src="https://images.unsplash.com/photo-1592833159057-6faf163494a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
                  fluid
                  style={{ maxHeight: "600px", borderRadius: "15px" }}
                />
              </Col>
              <Col sm={6} lg={6} xl={3} style={{ marginTop: "3rem" }}>
                <p className={styles.aboutTab}>
                  <h1 className={styles.aboutTabTitle}>Solar Power</h1>
                  Proin laoreet nisi ut risus suscipit, sed blandit lacus
                  feugiat. Nam et nibh vitae nisi rhoncus imperdiet et tincidunt
                  magna. Donec convallis mauris ullamcorper, cursus leo ac,
                  ultrices lectus. Curabitur egestas massa gravida, euismod est
                  non, condimentum tortor. Etiam eget maximus odio, lacinia
                  rhoncus magna. Donec eu nibh ac est posuere semper porttitor
                  ut diam. Donec blandit ipsum ut vulputate elementum. Nulla
                  facilisi. Quisque vel pellentesque libero. Nullam quis enim
                  fringilla, malesuada lorem vitae, suscipit tortor.
                </p>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="restore" title="Restoring our Planet">
            <Row className={styles.restoreRow}>
              <Col sm={6} lg={6} xl={4} className={styles.restoreCol}>
                <div className={styles.restoreIcon}>
                  <MdOutlineRecycling />
                </div>
                <img
                  className={styles.restoreImg}
                  src="https://images.unsplash.com/photo-1621023140422-2c791279becf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
                  alt=""
                />
                <h3 className={styles.restoreTitle}>Recycling</h3>
                <p className={styles.restoreDesc}>
                  Maecenas laoreet semper justo sed tristique. Phasellus lorem
                  sem, tincidunt tempor ipsum ut, tempus pulvinar tortor.
                  Vivamus mattis risus eget lobortis ullamcorper. Aliquam erat
                  volutpat. Aenean nunc risus, posuere in consectetur et,
                  laoreet a turpis.
                </p>
              </Col>

              <Col sm={6} lg={6} xl={4} className={styles.restoreCol}>
                <div className={styles.restoreIcon}>
                  <BsFillTreeFill />
                </div>
                <img
                  className={styles.restoreImg}
                  src="https://images.unsplash.com/photo-1598335624134-5bceb5de202d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
                  alt=""
                />
                <h3 className={styles.restoreTitle}>Planting Trees</h3>
                <p className={styles.restoreDesc}>
                  Maecenas laoreet semper justo sed tristique. Phasellus lorem
                  sem, tincidunt tempor ipsum ut, tempus pulvinar tortor.
                  Vivamus mattis risus eget lobortis ullamcorper. Aliquam erat
                  volutpat. Aenean nunc risus, posuere in consectetur et,
                  laoreet a turpis.
                </p>
              </Col>

              <Col sm={6} lg={6} xl={4} className={styles.restoreCol}>
                <div className={styles.restoreIcon}>
                  <FaBicycle />
                </div>
                <img
                  className={styles.restoreImg}
                  src="https://images.unsplash.com/photo-1541690983762-7da88c3f2a80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1976&q=80"
                  alt=""
                />
                <h3 className={styles.restoreTitle}>Bicycle scheme</h3>
                <p className={styles.restoreDesc}>
                  Maecenas laoreet semper justo sed tristique. Phasellus lorem
                  sem, tincidunt tempor ipsum ut, tempus pulvinar tortor.
                  Vivamus mattis risus eget lobortis ullamcorper. Aliquam erat
                  volutpat. Aenean nunc risus, posuere in consectetur et,
                  laoreet a turpis.
                </p>
              </Col>

              <Col sm={6} lg={6} xl={4} className={styles.restoreCol}>
                <div className={styles.restoreIcon}>
                  <GiArchiveResearch />
                </div>
                <img
                  className={styles.restoreImg}
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                  alt=""
                />
                <h3 className={styles.restoreTitle}>Investing in Research</h3>
                <p className={styles.restoreDesc}>
                  Maecenas laoreet semper justo sed tristique. Phasellus lorem
                  sem, tincidunt tempor ipsum ut, tempus pulvinar tortor.
                  Vivamus mattis risus eget lobortis ullamcorper. Aliquam erat
                  volutpat. Aenean nunc risus, posuere in consectetur et,
                  laoreet a turpis.
                </p>
              </Col>

              <Col sm={6} lg={6} xl={4} className={styles.restoreCol}>
                <div className={styles.restoreIcon}>
                  <MdPets />
                </div>
                <img
                  className={styles.restoreImg}
                  src="https://images.unsplash.com/photo-1615705257733-6ac12f77d8ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
                  alt=""
                />
                <h3 className={styles.restoreTitle}>Restoring Species</h3>
                <p className={styles.restoreDesc}>
                  Maecenas laoreet semper justo sed tristique. Phasellus lorem
                  sem, tincidunt tempor ipsum ut, tempus pulvinar tortor.
                  Vivamus mattis risus eget lobortis ullamcorper. Aliquam erat
                  volutpat. Aenean nunc risus, posuere in consectetur et,
                  laoreet a turpis.
                </p>
              </Col>

              <Col sm={6} lg={6} xl={4} className={styles.restoreCol}>
                <div className={styles.restoreIcon}>
                  <GiGuards />
                </div>
                <img
                  className={styles.restoreImg}
                  src="https://images.unsplash.com/photo-1545122988-927ccd8c48fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
                  alt=""
                />
                <h3 className={styles.restoreTitle}>Protecting Ecosystems</h3>
                <p className={styles.restoreDesc}>
                  Maecenas laoreet semper justo sed tristique. Phasellus lorem
                  sem, tincidunt tempor ipsum ut, tempus pulvinar tortor.
                  Vivamus mattis risus eget lobortis ullamcorper. Aliquam erat
                  volutpat. Aenean nunc risus, posuere in consectetur et,
                  laoreet a turpis.
                </p>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="future" title="Building the Future">
            <iframe
              width="95%"
              height="576"
              src="https://www.youtube.com/embed/e6rglsLy1Ys"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h5>Source: National Geographic YouTube Channel</h5>
            <h1 className={styles.heroTitle}>Our Future Responsability</h1>
            <p className={styles.heroDesc}>Our Future Responsability</p>
            <Container>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h5 className={styles.futureTitle}>Electric Transport</h5>
                  </Accordion.Header>
                  <Accordion.Body style={{ color: "#0892d0" }}>
                    <Row>
                      <Col xs={12} md={12} lg={4}>
                        <Image
                          src="https://images.unsplash.com/photo-1525962898597-a4ae6402826e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80"
                          rounded
                          style={{
                            maxWidth: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </Col>
                      <Col xs={12} md={12} lg={4}>
                        <h5 className={styles.futureTitle}>
                          Electric Transport
                        </h5>
                        <p className={styles.futureDesc}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </Col>
                      <Col xs={12} md={12} lg={4}>
                        <Image
                          src="https://images.unsplash.com/photo-1607197109166-3ab4ee4b468f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                          rounded
                          style={{
                            maxWidth: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className={styles.futureTitle}>
                      Environmentally Friendly Homes
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body style={{ color: "#228b22" }}>
                    <Row>
                      <Col xs={12} lg={6}>
                        <Image
                          src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
                          rounded
                          style={{
                            maxWidth: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </Col>

                      <Col xs={12} lg={6}>
                        <br />
                        <br />
                        <h5 className={styles.futureTitle}>Future Homes</h5>
                        <br />
                        <br />
                        <p className={styles.futureDesc}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum. Duis aute irure
                          dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur. Excepteur sint
                          occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.
                        </p>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h5 className={styles.futureTitle}>
                      Sustainable Agriculture
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body style={{ color: "#ff6600" }}>
                    <Row>
                      <Col xs={12} lg={6}>
                        <br />
                        <h5 className={styles.futureTitle}>Crop Rotation</h5>
                        <br />
                        <hr />
                        <p className={styles.futureDesc}>
                          Crop rotation is the practice of growing a series of
                          different types of crops in the same area across a
                          sequence of growing seasons. It reduces reliance on
                          one set of nutrients, pest and weed pressure, and the
                          probability of developing resistant pest and weeds.
                          Growing the same crop in the same place for many years
                          in a row, known as monocropping, gradually depletes
                          the soil of certain nutrients and selects for a highly
                          competitive pest and weed community. Without balancing
                          nutrient use and diversifying pest and weed
                          communities, the productivity of monocultures is
                          highly dependent on external inputs. Conversely, a
                          well-designed crop rotation can reduce the need for
                          synthetic fertilizers and herbicides by better using
                          ecosystem services from a diverse set of crops.
                          Additionally, crop rotations can improve soil
                          structure and organic matter, which reduces erosion
                          and increases farm system resilience.
                        </p>
                        <hr />
                      </Col>

                      <Col xs={12} lg={6}>
                        <br />
                        <h5 className={styles.futureTitle}>
                          Multiple Cropping
                        </h5>
                        <br />
                        <hr />
                        <p className={styles.futureDesc}>
                          In agriculture, multiple cropping or multicropping is
                          the practice of growing two or more crops in the same
                          piece of land during one growing season instead of
                          just one crop. When multiple crops are grown
                          simultaneously, this is also known as intercropping.
                          This cropping system helps farmers to double their
                          crop productivity and income.But, the selection of two
                          or more crops for practicing multicropping mainly
                          depends on the mutual benefit of the selected crops.
                          Threshing can be difficult in multiple cropping
                          systems where crops are harvested together. It can
                          take the form of double-cropping, in which a second
                          crop is planted after the first has been harvested. In
                          the Garhwal Himalaya of India, a practice called
                          baranaja involves sowing 12 or more crops on the same
                          plot, including various types of beans, grains, and
                          millets, and harvesting them at different times.
                        </p>
                        <br /> <br />
                        <hr />
                      </Col>

                      <Col xs={12} lg={6}>
                        <br />
                        <h5 className={styles.futureTitle}>Mixed Farming</h5>
                        <br />
                        <hr />
                        <p className={styles.futureDesc}>
                          Mixed farming is a type of farming which involves both
                          the growing of crops and the raising of livestock.
                          Such agriculture occurs across Asia and in countries
                          such as India, Malaysia, Indonesia, Afghanistan, South
                          Africa, China, Central Europe, Canada, and Russia.
                          Though at first it mainly served domestic consumption,
                          countries such as the United States and Japan now use
                          it for commercial purposes. The cultivation of crops
                          alongside the rearing of animals for meat or eggs or
                          milk defines mixed farming. For example, a mixed farm
                          may grow cereal crops such as wheat or rye and also
                          keep cattle, sheep, pigs or poultry. Often the dung
                          from the cattle serves to fertilize the cereal crops.
                          Before horses were commonly used for haulage, many
                          young male cattle on such farms were often not
                          butchered as surplus for meat but castrated and used
                          as bullocks to haul the cart and the plough.
                        </p>
                        <br /> <br />
                        <hr />
                      </Col>

                      <Col xs={12} lg={6}>
                        <br />
                        <h5 className={styles.futureTitle}>Agroforestry</h5>
                        <br />
                        <hr />
                        <p className={styles.futureDesc}>
                          Agroforestry is a land use management system in which
                          trees or shrubs are grown around or among crops or
                          pastureland. This diversification of the farming
                          system initiates an agroecological succession, like
                          that in natural ecosystems, and so starts a chain of
                          events that enhance the functionality and
                          sustainability of the farming system. Trees also
                          produce a wide range of useful and marketable products
                          from fruits/nuts, medicines, wood products, etc. This
                          intentional combination of agriculture and forestry
                          has multiple benefits, such as greatly enhanced yields
                          from staple food crops, enhanced farmer livelihoods
                          from income generation, increased biodiversity,
                          improved soil structure and health, reduced erosion,
                          and carbon sequestration. Agroforestry practices are
                          highly beneficial in the tropics, especially in
                          subsistence smallholdings in sub-Saharan Africa and
                          have been found to be beneficial in Europe and the
                          United States.
                        </p>
                        <hr />
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Container>
          </Tab>
        </Tabs>

        <div className={styles.aboutQuote}>
          <div className={styles.aboutQuoteContent}>
            <h3 className={styles.aboutQuoteDesc}>
              "It's surely our responsibility to do everything within our power
              to create a planet that provides a home not just for us, but for
              all life on Earth."
              <br /> <br />
              <h5>― Sir David Attenborough</h5>
            </h3>
          </div>
        </div>

        <div>
          <Form style={{ padding: "50px" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Email Address</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Feedback</Form.Label>
              <Form.Control as="textarea" required rows={3} />
            </Form.Group>
            <Button type="submit" variant="outline-success" size="lg">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Layout>
  )
}
