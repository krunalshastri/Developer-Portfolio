import React, { Component } from 'react';
import './CertificationCard.css';
import { Fade } from 'react-reveal';

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    return (
      <Fade bottom duration={1000} distance='20px'>
        <div className='cert-card'>
          <div className='content'>
            <div className='cert-body'>
              <h2 className='cert-body-title'>{certificate.title}</h2>
              <h3 className='cert-body-subtitle'>{certificate.subtitle}</h3>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
