import React from "react";
import Heading from "../../Components/Section-Heading/Heading";
import imagelogo from "../../assets/imagelogo.png";
import { gallery, gallerycollection, photos } from "../../assets/gallery";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const styles = {
    width: "60.43px",
    height: "48px",
    position: "absolute",
  };
  const Gallery = ({ name, place, className, title_style, place_style }) => {
    
    return (
      <div className="image-card">
        <div className="project-img">
          <img className={className} />

          <img src={imagelogo} style={styles} />
        </div>
        <div className="image-title-place">
          <p className={title_style}>{name}</p>
          <p className={place_style}>{place}</p>
        </div>
      </div>
    );
  };
  const navigate=useNavigate()
  return (
    <div className="gallery-section">
      <Heading title="Gallery" text="Contact Us" onclick={()=>navigate('/contact')}/>
      <div className="gallery-cards-container">
        <div className="gallery-cards">
          {gallerycollection.map(
            ({ name, place, title_style, place_style, className }, i) => {
              return (
                <Gallery
                  key={i}
                  name={name}
                  place={place}
                  title_style={title_style}
                  place_style={place_style}
                  className={className}
                />
              );
            }
          )}
        </div>
        <div className="gallery-cards">
          {gallery.map(
            ({ name, place, className, title_style, place_style }, i) => {
              return (
                <Gallery
                  key={i}
                  name={name}
                  place={place}
                  className={className}
                  title_style={title_style}
                  place_style={place_style}
                />
              );
            }
          )}
        </div>
        <div className="gallery-cards">
          {photos.map(
            ({ name, place, className, title_style, place_style }, i) => {
              return (
                <Gallery
                  key={i}
                  name={name}
                  place={place}
                  className={className}
                  title_style={title_style}
                  place_style={place_style}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
