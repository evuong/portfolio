import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ project: { name, image, deployed_url, github_url } }) => {
  return (
    <div className='col-md-6 col-lg-4 my-2'>
      <figure className='project-card__wrapper'>
        <a href={deployed_url} target='_blank' rel='noreferrer'>
          <img src={image} alt={name} className='project-card__img' />
        </a>
        <div className='project-card__title'>
          <a href={github_url} target='_blank' rel='noreferrer'>
            <i className='fab fa-github fa-2x mr-2'></i>
            {name}
          </a>
        </div>
      </figure>
    </div>
  );
};

// prop types
ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectCard;
