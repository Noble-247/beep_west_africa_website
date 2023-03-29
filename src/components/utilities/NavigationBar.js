import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Navbar, Nav, Image, Stack } from "react-bootstrap";
import Logo from "../../image/logos_and_sponsors/logo2.png";

function NavigationBar(props) {
  const logoTextStyle = {
    fontSize: "9px",
    fontWeight: "bolder",
    marginLeft: "4px",
  };

  /* active class style */
  function navLinkStyle({ isActive }) {
    return {
      fontWeight: isActive ? "800" : "bolder",
    };
  }

  /* Navigation Font Size */
  const navFontSize = {
    fontSize: "14px",
  };

  function mouseEnterEventOnNavBar(event) {
    event.target.style.backgroundColor = "rgba(30, 193, 219, 0.8)";
    event.target.style.transition = "0.5s";
    event.target.style.transition = "transition-timing-function: ease-in-out";
  }
  function mouseLeaveEventOnNavBar(event) {
    event.target.style.backgroundColor = "#17a2b8";
    event.target.style.transition = "0.5s";
    event.target.style.transition = "transition-timing-function: ease-in-out";
  }

  return (
    <Fragment>
      <Navbar className='bg-primary' expand='xl' variant='dark' sticky='top'>
        <Container>
          <Link to={"/"} className='text-decoration-none'>
            <Navbar.Brand className='d-flex'>
              <Image fluid src={Logo}></Image>
              <div style={logoTextStyle} className='d-none d-md-block'>
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
            <Nav className='ms-auto' style={navFontSize}>
              <NavLink
                style={navLinkStyle}
                end
                className='text-white nav-link'
                to={"/"}
                onMouseEnter={(event) => mouseEnterEventOnNavBar(event)}
                onMouseLeave={(event) => mouseLeaveEventOnNavBar(event)}
              >
                HOME
              </NavLink>
              <NavLink
                style={navLinkStyle}
                className='text-white nav-link'
                to={"/journals"}
                onMouseEnter={(event) => mouseEnterEventOnNavBar(event)}
                onMouseLeave={(event) => mouseLeaveEventOnNavBar(event)}
              >
                JOURNALS
              </NavLink>
              <NavLink
                style={navLinkStyle}
                className='text-white nav-link'
                to={"/proceedings"}
                onMouseEnter={(event) => mouseEnterEventOnNavBar(event)}
                onMouseLeave={(event) => mouseLeaveEventOnNavBar(event)}
              >
                PROCEEDINGS
              </NavLink>
              <NavLink
                style={navLinkStyle}
                className='text-white nav-link'
                to={"/submit_manuscript"}
                onMouseEnter={(event) => mouseEnterEventOnNavBar(event)}
                onMouseLeave={(event) => mouseLeaveEventOnNavBar(event)}
              >
                SUBMIT MANUSCRIPT
              </NavLink>
              <NavLink
                style={navLinkStyle}
                className='text-white nav-link'
                to={"/contact_us"}
                onMouseEnter={(event) => mouseEnterEventOnNavBar(event)}
                onMouseLeave={(event) => mouseLeaveEventOnNavBar(event)}
              >
                CONTACT US
              </NavLink>
              <Stack direction='horizontal' gap={3} className='ms-1'>
                <Link
                  to={"/submit_manuscript"}
                  className='btn btn-dark d-block'
                  size='sm'
                >
                  <Stack direction='horizontal' gap={3}>
                    <i className='bi bi-person-circle'></i>
                    <span>Sign In</span>
                  </Stack>
                </Link>
              </Stack>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default NavigationBar;
