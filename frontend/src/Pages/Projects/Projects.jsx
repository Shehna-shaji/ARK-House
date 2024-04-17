import React from "react";
import "./Projects.css";
import "../Home/Home.css";
import ProjectDetail from "../../Section/ProjectDetails/ProjectDetail";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

const Projects = () => {
  return (
    <section className="project-detail">
      <Breadcrumbs />
      <div className="project-info">
        <h5 className="project-heading">Projects</h5>
        <h5 className="project-subtitle">
          Our projects are examples of attitudes rather than design
        </h5>
        <p className="project-detail-description">
          They are samples in a series of contextual examination rather than
          isolated masterpieces. They are associative rather than symbolic. They
          are comments rather than statements. Every story told is a shared
          experience of contemporary conditions set within a given frame.
        </p>
      </div>
      <hr />
      <ProjectDetail />
    </section>
  );
};

export default Projects;
