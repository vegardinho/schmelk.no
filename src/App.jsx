import {
  Routes, Route, useLocation, BrowserRouter,
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import FrontPage from './pages/FrontPage';
import Header from './components/Header';
import Snarveier from './pages/Snarveier';
import LaDetBliSchmelk from './pages/LaDetBliSchmelk';
import EventScrape from './pages/EventScrape';

function App() {
  const [siteLoaded, setSiteLoaded] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (menuOpened) {
      setMenuOpened(false);
    }
  }, [location]);

  return (
    <Header menuOpened={menuOpened} setMenuOpened={setMenuOpened}>
      <AnimatePresence
        exitBeforeEnter
      >
        <Routes location={location} key={location.key}>
          <Route path="snarveier" element={<Snarveier />} />
          <Route path="/guds_ord" element={<LaDetBliSchmelk />} />
          <Route path="/get_events" element={<EventScrape />} />
          <Route
            path="/"
            element={(
              <FrontPage
                siteLoaded={siteLoaded}
                setSiteLoaded={setSiteLoaded}
              />
          )}
          />
        </Routes>
      </AnimatePresence>
    </Header>
  );
}

export default App;
