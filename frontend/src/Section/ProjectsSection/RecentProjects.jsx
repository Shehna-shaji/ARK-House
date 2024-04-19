import React from "react";
import "./RecentProjects.css";
import Heading from "../../Components/Section-Heading/Heading";
import { useNavigate } from "react-router-dom";
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
import Button from "../../Components/Button/Button";
const RecentProjects = () => {
  const navigate = useNavigate();
  const styles = {
    width: "60.43px",
    height: "48px",
    position: "absolute",
  };
  const Projects = ({ name, place, className, title_style, place_style }) => {
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
  return (
    <section id="projects" className="projects-section">
      <Heading
        title="Recent Projects"
        text="Discover all"
        onclick={() => navigate("/projects")}
      />

      <div className="project-card">
        {projectimages.map(({ name, place, className, title_style, place_style },i) => {
          return (
            <Projects
              key={i}
              name={name}
              place={place}
              className={className}
              title_style={title_style}
              place_style={place_style}
            />
          );
        })}
      </div>
      <div className="project-card">
        {recentprojects.map(({ name, place, className, title_style, place_style },i) => {
          return (
            <Projects
              key={i}
              
              name={name}
              place={place}
              className={className}
              title_style={title_style}
              place_style={place_style}
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
        {recentimages.map(({ name, place, className, title_style, place_style },i) => {
          return (
            <Projects
              key={i}
              
              name={name}
              place={place}
              className={className}
              title_style={title_style}
              place_style={place_style}
            />
          );
        })}
      </div>
      <div className="project-card">
        {projectphotos.map(({ name, place, className, title_style, place_style },i) => {
          return (
            <Projects
              key={i}
              name={name}
              place={place}
              className={className}
              title_style={title_style}
              place_style={place_style}
            />
          );
        })}
      </div>
      <div className="project-card">
        {projectplan.map(({ name, place, className, title_style, place_style },i) => {
          return (
            <Projects
              key={i}
              name={name}
              place={place}
              className={className}
              title_style={title_style}
              place_style={place_style}
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
            <h2 className="img-text">With over 2.500 projects completed</h2>
          </div>
        </div>
        {project.map(({ name, place, className, title_style, place_style },i) => {
          return (
            <Projects
              key={i}
              name={name}
              place={place}
              className={className}
              title_style={title_style}
              place_style={place_style}
            />
          );
        })}
      </div>
      <div className="title-btn">
        <div className="start-project">Start a Project?</div>
        <div className="contact-btn">
          <Button text="Contact Us" onclick={()=>navigate('/contact')}/>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
