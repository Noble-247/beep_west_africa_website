import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

/* Import Utilities */
import Footer from "./components/utilities/Footer";
import NavigationBar from "./components/utilities/NavigationBar";
import SiteUnderConstruction from "./components/pages/SiteUnderConstruction";

/* Import Context */
import SecondaryHoverEffectContextProvider from "./components/contexts/SecondaryHoverEffectContext";

/* Import Pages */
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import GeneralNews from "./components/pages/GeneralNews";
import SubmitManuscript from "./components/pages/SubmitManuscript";
import ContactUs from "./components/pages/ContactUs";
import PageNotFound from "./components/pages/PageNotFound";
import JournalCategoryDetails from "./components/pages/JournalCategoryDetails";
import Proceedings from "./components/pages/Proceedings";
import Journals from "./components/pages/Journals";
import JournalDetails from "./components/pages/JournalDetails";
import ProceedingDetails from "./components/pages/ProceedingDetails";
import PrimaryHoverEffectContextProvider from "./components/contexts/PrimaryHoverEffectContext";

function App() {
  const [mainContent, setMainContent] = useState(false);
  const [isUnderConstruction, setIsUnderConstruction] = useState(true);

  useEffect(() => {
    setIsUnderConstruction(true);
    setMainContent(false);
  }, []);

  function showMainContent() {
    setMainContent(true);
    setIsUnderConstruction(false);
  }

  return (
    <div className='bg-light'>
      {/* Navigation & Router */}
      <BrowserRouter>
        {isUnderConstruction && (
          <section>
            <SiteUnderConstruction showMainContent={showMainContent} />
          </section>
        )}
        {mainContent && (
          <section>
            <PrimaryHoverEffectContextProvider>
              <NavigationBar />
            </PrimaryHoverEffectContextProvider>
            <main>
              <Container fluid className='px-0 pt-0 pb-2'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about_us' element={<AboutUs />} />
                  <Route path='/general_news' element={<GeneralNews />} />
                  <Route
                    path='/submit_manuscript'
                    element={<SubmitManuscript />}
                  />
                  <Route path='/contact_us' element={<ContactUs />} />
                  <Route
                    path='journal_category/:journal_category_ID'
                    element={<JournalCategoryDetails />}
                  />
                  <Route
                    path='/journal/:journal_ID'
                    element={<JournalDetails />}
                  />
                  <Route path='/journals' element={<Journals />} />
                  <Route path='/proceedings' element={<Proceedings />} />
                  <Route
                    path='/proceeding/:proceeding_ID'
                    element={<ProceedingDetails />}
                  />
                  <Route path='*' element={<PageNotFound />} />
                </Routes>
              </Container>
            </main>
            <footer className='bg-dark text-white mx-0 mt-5'>
              <SecondaryHoverEffectContextProvider>
                <Footer />
              </SecondaryHoverEffectContextProvider>
            </footer>
          </section>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
