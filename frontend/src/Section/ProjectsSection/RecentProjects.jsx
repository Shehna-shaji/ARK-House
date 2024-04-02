import React from "react";
import "./RecentProjects.css";
import Heading from "../../Components/Section-Heading/Heading";
import projectimages, {
  recentimages,
  recentprojects,
} from "../../assets/project-images";
import Numbers from "../../assets/Numbers.png";

const RecentProjects = () => {
  const Projects = ({ image, name, place, className, style, place_style }) => {
    return (
      <span className="image-card">
        <div className="project-img">
          <img src={image} className={className} />
        </div>
        <div className="image-title-place">
          <p className={style}>{name}</p>
          <p className={place_style}>{place}</p>
        </div>
      </span>
    );
  };
  return (
    <section className="projects-section">
      <Heading title="Recent Projects" text="Discover all" />

      <div className="project-card">
        {projectimages.map((item) => {
          return (
            <Projects
              key={item.id}
              image={item.image}
              name={item.name}
              place={item.place}
              className={item.className}
              style={item.style}
              place_style={item.place_style}
            />
          );
        })}
      </div>
      <div className="project-card">
        {recentprojects.map((item) => {
          return (
            <Projects
              key={item.id}
              image={item.image}
              name={item.name}
              place={item.place}
              className={item.className}
              style={item.style}
              place_style={item.place_style}
            />
          );
        })}
        <div className="text-container">
          <div>
            <img src={Numbers} className="number-img" />
          </div>
          <div>
            <h2 className="img-text">Yeas of architecture, planning, design</h2>
          </div>
        </div>
      </div>
      <div className="project-card">
        {recentimages.map((img) => {
          return (
            <Projects
              key={img.id}
              image={img.image}
              name={img.name}
              place={img.place}
              className={img.className}
              style={img.style}
              place_style={img.place_style}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RecentProjects;
