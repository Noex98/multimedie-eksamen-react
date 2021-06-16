import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import { AnimatePresence} from 'framer-motion';

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';

//Views
import Front from './views/Front'
import References from './views/References'
import Portfolio from './views/Portfolio'
import Partners from './views/Partners'
import Contact from './views/Contact'

function App() {
  return (
    <>
        <div className="body__wrapper">
            <Router>
                <ScrollToTop />
                <Header />
                <AnimatePresence exitBeforeEnter>
                    <Switch>
                        <Route 
                            path="/" exact 
                            component={Front}
                        />
                        <Route 
                            path="/referencer" 
                            component={References}
                        />
                        <Route 
                            path="/portfolio" 
                            component={Portfolio}
                        />
                        <Route 
                            path="/partnere" 
                            component={Partners}
                        />
                        <Route 
                            path="/kontakt" 
                            component={Contact}
                        />
                        <Header />
                    </Switch>
                </AnimatePresence>
            </Router>
        </div>
        <Footer />
    </>
  );
}

export default App;
