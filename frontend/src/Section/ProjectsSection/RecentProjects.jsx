import React from "react";
import "./RecentProjects.css";
import Heading from "../../Components/Section-Heading/Heading";
import projectimages, {
  project,
  projectphotos,
  projectplan,
  recentimages,
  recentprojects,
} from "../../assets/project-images";
import Numbers from "../../assets/Numbers.png";
import imagelogo from "../../assets/imagelogo.png";
import Projectnumber from "../../assets/Projectnumber.png";
const RecentProjects = () => {
  const styles = {
    width: "60.43px",
    height: "48px",
    position: "absolute",
  };
  const Projects = ({
    
    name,
    place,
    className,
    title_style,
    place_style,
  }) => {
    return (
      <span className="image-card">
        <div className="project-img">
          <img className={className} />

          <img src={imagelogo} style={styles} />
        </div>
        <div className="image-title-place">
          <p className={title_style}>{name}</p>
          <p className={place_style}>{place}</p>
        </div>
      </span>
    );
  };
  return (
    <section id="projects" className="projects-section">
      <Heading title="Recent Projects" text="Discover all" />

      <div className="project-card">
        {projectimages.map((item) => {
          return (
            <Projects
              key={item.id}
              // image={item.image}
              // style={{backgroundImage:`url(../../assests/${item.image}))`}}

              name={item.name}
              place={item.place}
              className={item.className}
              title_style={item.title_style}
              place_style={item.place_style}
              // css={{backgroundImage:`url(require(assests/${item.image}))`}}
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
              title_style={item.title_style}
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
              title_style={img.title_style}
              place_style={img.place_style}
            />
          );
        })}
      </div>
      <div className="project-card">
        {projectphotos.map((img) => {
          return (
            <Projects
              key={img.id}
              name={img.name}
              place={img.place}
              className={img.className}
              title_style={img.title_style}
              place_style={img.place_style}
            />
          );
        })}
      </div>
      <div className="project-card">
        {projectplan.map((img) => {
          return (
            <Projects
              key={img.id}
              name={img.name}
              place={img.place}
              className={img.className}
              title_style={img.title_style}
              place_style={img.place_style}
            />
          );
        })}
      </div>
      <div className="project-card">
        <div className="text-container">
          <div>
            <img src={Projectnumber} className="number-img" />
          </div>
          <div>
            <h2 className="img-text">With over 2.600 projects completed</h2>
          </div>
        </div>
        {project.map((img) => {
          return (
            <Projects
              key={img.id}
              name={img.name}
              place={img.place}
              className={img.className}
              title_style={img.title_style}
              place_style={img.place_style}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RecentProjects;
