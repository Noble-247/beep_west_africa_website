import React, { Fragment } from "react";
import { Col, Container, Nav, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer(props) {
  // console.log(props);
  const copywriteNoteStyle = {
    fontSize: "13px",
    backgroundColor: "black",
  };
  return (
    <Fragment>
      <Container className='py-5'>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <small>
              <h5 className='text-primary'>Editor in Chief</h5>
              <h6>Associate Prof. Mansaf Alam</h6>
              <p>
                BEEP International Publishing (Department of Computer Science)
                Jamila Millia Islamia, New Delhi, India
              </p>
            </small>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <small>
              <h5 className='text-primary'>International Coordinator</h5>
              <h6>Tamunoene Goddyson</h6>
              <p>
                31 Ikwerre Road, Port Harcourt .Department of Computer Science
                Captain Elechi Amadi Polytechnic Port Harcourt, Rivers State,
                Nigeria
              </p>
            </small>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <h5 className='text-primary'>Navigation</h5>
            <Nav className='flex-column p-0'>
              <Link
                to={"/"}
                className='py-1 ps-1 pe-0 nav-link text-white'
                onMouseEnter={(event) => props.mouseEnterEffectOnFooter(event)}
                onMouseLeave={(event) => props.mouseLeaveEventOnFooter(event)}
              >
                Home
              </Link>
              <Link
                to={"/about_us"}
                className='py-1 ps-1 pe-0 nav-link text-white'
                onMouseEnter={(event) => props.mouseEnterEffectOnFooter(event)}
                onMouseLeave={(event) => props.mouseLeaveEventOnFooter(event)}
              >
                About Us
              </Link>
              <Link
                to={"/call_for_paper"}
                className='py-1 ps-1 pe-0 nav-link text-white'
                onMouseEnter={(event) => props.mouseEnterEffectOnFooter(event)}
                onMouseLeave={(event) => props.mouseLeaveEventOnFooter(event)}
              >
                Call For Paper
              </Link>
              <Link
                to={"/submit_manuscript"}
                className='py-1 ps-1 pe-0 nav-link text-white'
                onMouseEnter={(event) => props.mouseEnterEffectOnFooter(event)}
                onMouseLeave={(event) => props.mouseLeaveEventOnFooter(event)}
              >
                Submit Manuscript
              </Link>
              <Link
                to={"/contact_us"}
                className='py-1 ps-1 pe-0 nav-link text-white'
                onMouseEnter={(event) => props.mouseEnterEffectOnFooter(event)}
                onMouseLeave={(event) => props.mouseLeaveEventOnFooter(event)}
              >
                Contact
              </Link>
            </Nav>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Stack direction='horizontal' gap={3}>
              <div>
                <a href='/' target='_blank' rel='noopener noreferrer'>
                  <i className='bi bi-facebook fs-4'></i>
                </a>
              </div>
              <div>
                <a href='/' target='_blank' rel='noopener noreferrer'>
                  {" "}
                  <i className='bi bi-linkedin fs-4'></i>
                </a>
              </div>
              <div>
                <a href='/' target='_blank' rel='noopener noreferrer'>
                  <i className='bi bi-twitter fs-4'></i>
                </a>
              </div>
              <div>
                <a href='/' target='_blank' rel='noopener noreferrer'>
                  <i className='bi bi-whatsapp fs-4'></i>
                </a>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
      <Container fluid className='p-0'>
        <div style={copywriteNoteStyle} className='py-2 px-3 text-center'>
          <small>
            &copy; BEEP WEST AFRICA INTERNATIONAL JOURNAL OF GLOBAL RESEARCH.
            2018 - 2022
          </small>
        </div>
      </Container>
    </Fragment>
  );
}

export default Footer;
