import React from 'react';
import { motion } from 'framer-motion';

import AboutCard from './AboutCard';
import about_data from '../../data/about_data';

const About = () => {
  const variant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
    exit: { opacity: 0, transition: { ease: 'easeInOut' } }
  };

  return (
    <motion.div className='about' variant={variant} initial='hidden' animate='visible' exit='exit'>
      <h6 className='about__intro'>Hi, I'm Edward Vuong. I am a computer programmer.</h6>
      <div className='container about__container'>
        <h6 className='about__header'>What I Offer</h6>
        <div className='row'>
          {about_data.map((data) => (
            <AboutCard skill={data} key={data.id} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
