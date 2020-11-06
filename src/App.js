import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Projects from './components/project/Projects';

const App = () => {
  const location = useLocation();
  return (
    <div className='container app__container'>
      <div className='row app__row'>
        <div className='col-lg-3'>
          <Sidebar />
        </div>
        <div className='col-lg-9 app__main-content'>
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route exact path='/' component={About} />
              <Route exact path='/resume' component={Resume} />
              <Route exact path='/projects' component={Projects} />
              <Route>
                <Redirect to='/' />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default App;
