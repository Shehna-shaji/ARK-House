import React from "react";
import "./ProjectDetail.css";
import imagelogo from "../../assets/imagelogo.png";
import { projectdetail, projectdetailimages, projectplanimages } from "../../assets/project-images";

const ProjectDetail = () => {
  const styles = {
    width: "60.43px",
    height: "48px",
    position: "absolute",
  };
  const Projects = ({
    date,
    name,
    place,
    className,
    title_style,
    place_style,
  }) => {
    return (
      <span className="image-card">
        <figure className="project-img">
          <img className={className} />

          <img src={imagelogo} style={styles} />
        </figure>
        <div className="image-title-place">
          <p className="img-year">{date}</p>
          <figcaption className={title_style}>{name}</figcaption>
          <figcaption className={place_style}>{place}</figcaption>
        </div>
      </span>
    );
  };
  return (
    <div className="project-detail-section">
      <div className="project-menu">
        <ul className="project-list">
          <li className="project-menu-text">All project</li>
          <li className="project-menu-text" style={{textDecoration:'underline',textUnderlineOffset:'8px'}}>
            Architecture 
            {/* hr className="project-menu-hr" /> */}
          </li>
          <li className="project-menu-text">Landscape</li>
          <li className="project-menu-text">Interior</li>
          <li className="project-menu-text">Design</li>
        </ul>
      </div>
      <div className="project-cards">
        <div className="project-card-container">
          {projectdetail.map(({year, name, place, className, title_style, place_style,},i)=>{
            return <Projects key={i} date={year} name={name} place={place} className={className} title_style={title_style} place_style={place_style}/>
          })}
        </div>
        <div className="project-card-container">
          {projectdetailimages.map(({year, name, place, className, title_style, place_style,},i)=>{
            return <Projects key={i} date={year} name={name} place={place} className={className} title_style={title_style} place_style={place_style}/>
          })}
        </div>
        <div className="project-card-container">
          {projectplanimages.map(({year, name, place, className, title_style, place_style,},i)=>{
            return <Projects key={i} date={year} name={name} place={place} className={className} title_style={title_style} place_style={place_style}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
