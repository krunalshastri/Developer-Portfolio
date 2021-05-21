import React, { useState, useEffect, lazy, Suspense, Fragment } from 'react';
import './Project.css';
import ProjectCard from '../../components/projectCard/ProjectCard';
import { projects } from '../../portfolio';

export default function Projects() {
  let proj = projects.projects;
  return (
    <Fragment>
      <div className='main' id='opensource'>
        <h1 className='project-title'>Projects</h1>
        <div className='repo-cards-div-main'>
          {proj.map((project) => {
            return (
              <ProjectCard
                name={project.name}
                description={project.description}
                stack={project.stack}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
