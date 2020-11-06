import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

const Resume = () => {
  const variant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
    exit: { opacity: 0, transition: { ease: 'easeInOut' } }
  };

  return (
    <motion.div
      className='container resume'
      variant={variant}
      initial='hidden'
      animate='visible'
      exit='exit'>
      <div className='row'>
        <div className='col-lg-6 '>
          <h4 className='resume-card__header'>Education</h4>
          <div>
            <h5 className='resume-card__title'>Computer Programming & Analysis</h5>
            <p className='resume-card__name'>Seneca College (2018 - 2020)</p>
            <p className='resume-card__details'>
              Learned computer programming through many technical projects and group work. Completed
              courses in Java, C++, SQL and web development stack (JavaScript, HTML, CSS).
            </p>
          </div>
        </div>
        <div className='col-lg-6'>
          <h4 className='resume-card__header'>Experience</h4>
          <div>
            <h5 className='resume-card__title'>Database and Software Applications Developer</h5>
            <p className='resume-card__name'>Toronto Transit Commission (2019-2020)</p>
            <p className='resume-card__details'>
              Worked at the TTC to create database applications and improve efficiency of existing
              systems. Applied programming and analytical problem solving skills to assist managers
              and forepersons.
            </p>
          </div>
        </div>
      </div>
      <Skill />
    </motion.div>
  );
};

export default Resume;
