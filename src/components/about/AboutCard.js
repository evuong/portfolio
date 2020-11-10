import React from 'react';
import PropTypes from 'prop-types';

const AboutCard = ({ skill: { icon, title, about } }) => {
  return (
    <div className='col-lg-6'>
      <div className='div about-card'>
        <i className={icon}></i>
        <div className='about-card__body'>
          <h6 className='about-card__title'>{title}</h6>
          <p className='about-card__info'>{about}</p>
        </div>
      </div>
    </div>
  );
};

AboutCard.propTypes = {
  skill: PropTypes.object.isRequired
};

export default AboutCard;
