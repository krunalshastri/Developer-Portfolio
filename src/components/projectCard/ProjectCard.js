import React from 'react';
import './ProjectCard.css';
import { Fade } from 'react-reveal';

export default function ProjectCard({ name, description, stack }) {
  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item) => <li className='subTitle'>{item}</li>)
      : null;
  };

  return (
    <Fade bottom duration={1000} distance='20px'>
      <div>
        <div className='repo-card-div'>
          <div className='repo-name-div'>
            <svg
              aria-hidden='true'
              className='octicon'
              height='30'
              role='img'
              viewBox='0 0 12 16'
              width='14'
              className='repo-svg'
            ></svg>
            <p className='repo-name'>{name}</p>
          </div>
          <div>
            <p className='repo-description'>
              <ul>
                <GetDescBullets descBullets={description} />
              </ul>
            </p>
          </div>
          <div>
            <span className='bolding'>Tech Stack: </span>
            <span>{stack}</span>
          </div>
        </div>
      </div>
    </Fade>
  );
}
