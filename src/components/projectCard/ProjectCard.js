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
          <p className='repo-name'>{name}</p>
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
