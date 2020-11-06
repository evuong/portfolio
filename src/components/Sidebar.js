import React from 'react';
import { motion } from 'framer-motion';
import avatar from '../assets/avatar.jpg';
import Resume from '../assets/resume.pdf';

const Sidebar = () => {
  const handleEmail = () => {
    window.open('mailto:edwxrdv@gmail.com');
  };

  const variant = {
    hidden: { x: '-20vw' },
    visible: { x: 0, transition: { delay: 0.1, duration: 0.5, type: 'spring' } }
  };

  return (
    <motion.div className='sidebar' variants={variant} initial='hidden' animate='visible'>
      <img src={avatar} alt='avatar' className='sidebar__avatar' />
      <div className='sidebar__name'>
        Edward <span>Vuong</span>
      </div>
      <div className='sidebar__item sidebar__title'>Web Developer</div>
      <a href={Resume} download='resume.pdf'>
        <div className='sidebar__item sidebar__resume'>
          <i className='fas fa-file-pdf fa-lg'></i> Download Resume
        </div>
      </a>
      <figure className='my-2'>
        <a href='https://ca.linkedin.com/in/edvuong' target='_blank' rel='noreferrer'>
          <i className='fab fa-linkedin fa-2x mr-3'></i>
        </a>
        <a href='https://github.com/evuong' target='_blank' rel='noreferrer'>
          <i className='fab fa-github fa-2x'></i>
        </a>
      </figure>

      <div className='sidebar__contact'>
        <div className='sidebar__item'>
          <i className='fas fa-location-arrow mr-2'></i> Toronto, Ontario
        </div>
        <div className='sidebar__item'>edwxrdv@gmail.com</div>
        <div className='sidebar__item'>(647) 787-5612</div>
      </div>

      <div className='sidebar__item sidebar__email' onClick={handleEmail}>
        Email Me
      </div>
    </motion.div>
  );
};

export default Sidebar;
