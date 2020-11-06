import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projects_data from '../../data/projects_data';

const Projects = () => {
  const [projects, setProjects] = useState(projects_data);
  const [active, setActive] = useState('All');

  const filterProjects = (name) => {
    setProjects(projects_data.filter((project) => project.category.includes(name)));
    setActive(name);
  };

  const variant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
    exit: { opacity: 0, transition: { ease: 'easeInOut' } }
  };

  return (
    <motion.div
      className='container projects'
      variant={variant}
      initial='hidden'
      animate='visible'
      exit='exit'>
      <div className='projects__navbar'>
        <div
          className={active === 'All' && 'projects__navbar-active'}
          onClick={() => {
            setProjects(projects_data);
            setActive('All');
          }}>
          All
        </div>
        <div
          className={active === 'react.js' && 'projects__navbar-active'}
          onClick={() => filterProjects('react.js')}>
          React
        </div>
        <div
          className={active === 'mongoDB' && 'projects__navbar-active'}
          onClick={() => filterProjects('mongoDB')}>
          MongoDB
        </div>
        <div
          className={active === 'node.js' && 'projects__navbar-active'}
          onClick={() => filterProjects('node.js')}>
          Node
        </div>
        <div
          className={active === 'vanilla' && 'projects__navbar-active'}
          onClick={() => filterProjects('vanilla')}>
          Vanilla
        </div>
      </div>

      <div className='row'>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
