import React from 'react';
import SkillBar from './SkillBar';
import { tools, languages } from '../../data/resume_data';

const Skill = () => {
  return (
    <div className='row'>
      <div className='col-lg-6'>
        <h5 className='skill-language__header'>Languages and Frameworks</h5>
        <div className='mt-3'>
          {languages.map((language) => (
            <SkillBar value={language} />
          ))}
        </div>
      </div>
      <div className='col-lg-6'>
        <h5 className='skill-language__header'>Tools and Software</h5>
        <div className='mt-3'>
          {tools.map((tool) => (
            <SkillBar value={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
