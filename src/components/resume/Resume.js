import React from 'react';
import { motion } from 'framer-motion';
import ResumeItem from './ResumeItem';
import Skill from './Skill';

import { education, experience } from '../../data/resume_data';

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
          {education.map((edu) => (
            <ResumeItem data={edu} />
          ))}
        </div>
        <div className='col-lg-6'>
          <h4 className='resume-card__header'>Experience</h4>
          {experience.map((exp) => (
            <ResumeItem data={exp} />
          ))}
        </div>
      </div>
      <Skill />
    </motion.div>
  );
};

export default Resume;
