import React from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ value: { name, level } }) => {
  const bar_width = `${level}%`;
  return (
    <div className='bar'>
      <div className='bar__wrapper' style={{ width: bar_width }}>
        <span className='bar__name'>{name}</span>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  value: PropTypes.object.isRequired
};

export default SkillBar;
