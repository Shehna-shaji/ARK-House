import React from 'react';
import './WeAreSection.css'
import sectionimg from '../../assets/ourhistory.png';
import Button from '../../Components/Button/Button';

const WeAreSection = () => {
  return (
    <section className="our-history">
        <div className="title-image-container">
          <h2 className="history-title">Who we are</h2>
          <div className="image-content-container">
            <figure>
              <img src={sectionimg} className="section-img" />
            </figure>
            <div className="section-content">
              <article className="content-text">
                We are dedicated individuals from a range of different
                countries. Based in Oslo, with offices in Copenhagen, London and
                Reykjavik, we are actively involved in projects in various
                countries across Europe, Africa, the Middle East and Asia.<br/>
                <p>&nbsp;&nbsp;</p>
                Together, we are a community with a culture for beautiful and
                outstanding architecture, a culture that is Powered by
                Commitment.
              </article>
              <div className="content-subtitle-button">
                <h5 className="content-subtitle">Do you want to work <br/> with us?</h5>
                <Button text='Our Vacancies'/>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WeAreSection
