import React from 'react';

const AboutCard = ({ skill: { icon, title, about } }) => {
  return (
    <div className='col-lg-6'>
      <div className='div about-card'>
        <img src={icon} alt='icon' className='about-card__icon' />
        <div className='about-card__body'>
          <h6 className='about-card__title'>{title}</h6>
          <p className='about-card__info'>{about}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
