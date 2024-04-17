import React from 'react';
import saintimg from '../../assets/Giles.png';
import './SaintGiles.css';


const Giles = () => {
  return (
    <div>
         <div className="SaintGiles-section">
      <div className="info-section">
        <h2 className='title'>Central Saint Giles</h2>
        <div className="image-info-section">
          <figure >
            <img src={saintimg} className="SaintGiles-img" />
          </figure>
          <div className="info-text">
            <div className="location-area">
              <div className="location">
                <h6 className="container-heading">location</h6>
                <p className="place">London</p>
              </div>
              <div className="area-container">
                <h6 className="container-heading">Area</h6>
                <p className="area">70.000 m²</p>
              </div>
              <div className="construction-cost">
                <h6 className="cost-heading">CONSTRUCTION COST</h6>
                <p className="cost">130 mill NOK</p>
              </div>
            </div>
            <div className="year-client">
              <div className="year-container">
                <h6 className="container-heading">Year</h6>
                <p className="year">2019</p>
              </div>
              <div className="client-container">
                <h6 className="client-heading">CLIENT</h6>
                <p className="client-name">Vanke</p>
              </div>
            </div>
          </div>
        </div>
        <p className="image-info">
          Nanchang Wave is a landscape based community centre with a varied
          program forming the heart of a large residential development. The
          double helix structure towards the wetland area gives 360 degrees
          overview of the neighbourhood as one walks up to the panoramic gallery
          at top.
        </p>
      </div>
    </div>
    
    </div>
  )
}

export default Giles
