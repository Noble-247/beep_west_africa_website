import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Button, Container, Navbar, Nav, Image, Stack } from "react-bootstrap";
import Logo from "./image/logos_and_sponsors/logo2.png";

/* Import Utilities */
import Footer from "./components/utilities/Footer";

/* Import Pages */
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import CallForPaper from "./components/pages/CallForPaper";
import SubmitManuscript from "./components/pages/SubmitManuscript";
import ContactUs from "./components/pages/ContactUs";
import PageNotFound from "./components/pages/PageNotFound";
import JournalCategoryDetails from "./components/pages/JournalCategoryDetails";

function App() {
  const logoTextStyle = {
    fontSize: "9px",
    fontWeight: "bold",
    marginLeft: "4px",
  };

  const navFontSize = {
    fontSize: "14px",
  };

  function mouseEnterEventOnNavBar(event) {
    event.target.style.backgroundColor = "rgba(30, 193, 219, 0.6)";
    event.target.style.fontWeight = "bold";
    event.target.style.transition = "0.5s";
    event.target.style.transition = "transition-timing-function: ease-in-out";
  }
  function mouseLeaveEventOnNavBar(event) {
    event.target.style.backgroundColor = "#17a2b8";
    event.target.style.fontWeight = "normal";
    event.target.style.transition = "0.5s";
    event.target.style.transition = "transition-timing-function: ease-in-out";
  }
  function mouseEnterEffectOnFooter(event) {
    event.target.style.backgroundColor = "black";
    event.target.style.transition = "0.5s";
    event.target.style.transition = "transition-timing-function: ease-in-out";
  }

  function mouseLeaveEventOnFooter(event) {
    event.target.style.backgroundColor = "#1E2B37";
    event.target.style.transition = "0.5s";
    event.target.style.transition = "transition-timing-function: ease-in-out";
  }

  return (
    <div>
      {/* Navigation & Router */}
      <BrowserRouter>
        <Navbar className='bg-primary' expand='xl' variant='dark' sticky='top'>
          <Container>
            <Navbar.Brand href='#home' className='d-flex'>
              <Image fluid src={Logo}></Image>
              <div style={logoTextStyle}>
                BEEP WEST AFRICA <br />
                <span>INTERNATIONAL JOURNAL OF GLOBAL RESEARCH</span> <br />
                <span>
                  (West Africa Unit Of BENEACADEMIC POOL & Publishings <br />
                  International Journal, JMI, New Dehli, India)
                </span>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto' style={navFontSize}>
                <Link
                  className='text-white nav-link border-end'
                  to={"/"}
                  onMouseEnter={(event) => mouseEnterEventOnNavBar(event)}
                  onMouseLeave={(event) => mouseLeaveEventOnNavBar(event)}
                >
                  HOME
                </Link>
                <Link
                  className='text-white nav-link border-end'
                  to={"/about_us"}
                  onMouseEnter={(event) => mouseEnterEventOnNavBar(event)}
                  onMouseLeave={(event) => mouseLeaveEventOnNavBar(event)}
                >
                  ABOUT US
                </Link>
                <Link
                  className='text-white nav-link border-end'
                  to={"/call_for_paper"}
                  onMouseEnter={(event) => mouseEnterEventOnNavBar(event)}
                  onMouseLeave={(event) => mouseLeaveEventOnNavBar(event)}
                >
                  CALL FOR PAPER
                </Link>
                <Link
                  className='text-white nav-link border-end'
                  to={"/submit_manuscript"}
                  onMouseEnter={(event) => mouseEnterEventOnNavBar(event)}
                  onMouseLeave={(event) => mouseLeaveEventOnNavBar(event)}
                >
                  SUBMIT MANUSCRIPT
                </Link>
                <Link
                  className='text-white nav-link border-end'
                  to={"contact_us"}
                  onMouseEnter={(event) => mouseLeaveEventOnNavBar(event)}
                  onMouseLeave={(event) => mouseLeaveEventOnNavBar(event)}
                >
                  CONTACT US
                </Link>
                <Stack direction='horizontal' gap={3} className='ms-1'>
                  <Button className='btn btn-secondary d-block' size='sm'>
                    <i className='bi bi-search'></i>
                  </Button>
                  <Button className='btn btn-secondary d-block' size='sm'>
                    <Stack direction='horizontal' gap={3}>
                      <i className='bi bi-person-circle'></i>
                      <span>Sign In</span>
                    </Stack>
                  </Button>
                </Stack>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routes */}
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about_us' element={<AboutUs />} />
            <Route path='/call_for_paper' element={<CallForPaper />} />
            <Route path='/submit_manuscript' element={<SubmitManuscript />} />
            <Route path='/contact_us' element={<ContactUs />} />
            <Route
              path='/journal_category/:id'
              element={<JournalCategoryDetails />}
            />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Container>

        {/* Footer */}
        <footer className='bg-dark text-white mt-5 mx-0'>
          <Footer
            mouseEnterEffectOnFooter={mouseEnterEffectOnFooter}
            mouseLeaveEventOnFooter={mouseLeaveEventOnFooter}
          />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
