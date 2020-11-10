import React from 'react';
import PropTypes from 'prop-types';

const ResumeItem = ({ data: { title, location, description } }) => {
  return (
    <div>
      <h5 className='resume-card__title'>{title}</h5>
      <p className='resume-card__name'>{location}</p>
      <p className='resume-card__details'>{description}</p>
    </div>
  );
};

ResumeItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default ResumeItem;
