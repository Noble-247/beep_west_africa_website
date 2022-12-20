import React, { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Button,
  Container,
  Navbar,
  Nav,
  Modal,
  Image,
  Stack,
} from "react-bootstrap";
import Logo from "../../image/logos_and_sponsors/logo2.png";
import Search from "./Search";

function NavigationBar(props) {
  /* Modal State */
  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false);
  }
  function handleShow() {
    setShow(true);
  }

  function signIn(event) {
    console.log("successfully signed in!!");
  }

  return (
    <Fragment>
      <Navbar className='bg-primary' expand='xl' variant='dark' sticky='top'>
        <Container>
          <Link to={"/"} className='text-decoration-none'>
            <Navbar.Brand className='d-flex'>
              <Image fluid src={Logo}></Image>
              <div style={props.logoTextStyle} className='d-none d-md-block'>
                BEEP WEST AFRICA <br />
                <span>INTERNATIONAL JOURNAL OF GLOBAL RESEARCH</span> <br />
                <span>
                  (West Africa Unit Of BENEACADEMIC POOL & Publishings <br />
                  International Journal, JMI, New Dehli, India)
                </span>
              </div>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto' style={props.navFontSize}>
              <NavLink
                style={props.navLinkStyle}
                end
                className='text-white nav-link'
                to={"/"}
                onMouseEnter={(event) => props.mouseEnterEventOnNavBar(event)}
                onMouseLeave={(event) => props.mouseLeaveEventOnNavBar(event)}
              >
                HOME
              </NavLink>
              <NavLink
                style={props.navLinkStyle}
                className='text-white nav-link'
                to={"/journals"}
                onMouseEnter={(event) => props.mouseEnterEventOnNavBar(event)}
                onMouseLeave={(event) => props.mouseLeaveEventOnNavBar(event)}
              >
                JOURNALS
              </NavLink>
              <NavLink
                style={props.navLinkStyle}
                className='text-white nav-link'
                to={"/proceedings"}
                onMouseEnter={(event) => props.mouseEnterEventOnNavBar(event)}
                onMouseLeave={(event) => props.mouseLeaveEventOnNavBar(event)}
              >
                PROCEEDINGS
              </NavLink>
              <NavLink
                style={props.navLinkStyle}
                className='text-white nav-link'
                to={"/submit_manuscript"}
                onMouseEnter={(event) => props.mouseEnterEventOnNavBar(event)}
                onMouseLeave={(event) => props.mouseLeaveEventOnNavBar(event)}
              >
                SUBMIT MANUSCRIPT
              </NavLink>
              <NavLink
                style={props.navLinkStyle}
                className='text-white nav-link'
                to={"/contact_us"}
                onMouseEnter={(event) => props.mouseEnterEventOnNavBar(event)}
                onMouseLeave={(event) => props.mouseLeaveEventOnNavBar(event)}
              >
                CONTACT US
              </NavLink>
              <Stack direction='horizontal' gap={3} className='ms-1'>
                <Button
                  onClick={handleShow}
                  className='btn btn-dark d-block'
                  size='sm'
                >
                  <i className='bi bi-search'></i>
                </Button>
                <Button
                  onClick={(event) => signIn(event)}
                  className='btn btn-dark d-block'
                  size='sm'
                >
                  <Stack direction='horizontal' gap={3}>
                    <i className='bi bi-person-circle'></i>
                    <span>Sign In</span>
                  </Stack>
                </Button>
              </Stack>
            </Nav>
          </Navbar.Collapse>

          {/* Modal */}
          <Modal show={show} size='lg' onHide={handleClose}>
            <Modal.Header closeButton className='bg-light'></Modal.Header>
            <Modal.Body className='bg-light'>
              <Search />
            </Modal.Body>
          </Modal>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default NavigationBar;
