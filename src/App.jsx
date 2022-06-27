import { Switch, Route, useLocation } from 'react-router-dom';
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
        <Switch location={location} key={location.key}>
          <Route path="/snarveier">
            <Snarveier />
          </Route>
          <Route path="/guds_ord">
            <LaDetBliSchmelk />
          </Route>
          <Route path="/get_events">
            <EventScrape />
          </Route>
          <Route exact path="/">
            <FrontPage
              siteLoaded={siteLoaded}
              setSiteLoaded={setSiteLoaded}
            />
          </Route>
        </Switch>
      </AnimatePresence>
    </Header>
  );
}

export default App;
