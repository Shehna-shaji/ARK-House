import React from "react";
import "./Team.css";
import Heading from "../../Components/Section-Heading/Heading";
import { employeeimages, employees } from "../../assets/Employeecard";

const Team = () => {
  const Employee = ({ image, name, position }) => {
    return (
      <span className="employee-card">
        <div className="employee">
          <img src={image} className="employee-img" />
        </div>
        <div className="name-position">
          <p className="emp-name">{name}</p>
          <p className="emp-position">{position}</p>
        </div>
      </span>
    );
  };
  return (
    <section id="team" className="team-section">
      <Heading title="Our Team" text="Show All" />
      <div className="description-jobtitle">
        <div className="job-title-description">
          <p className="team-description">
            Our team of expert architects and builders, with over 45 years of{" "}
            <br />
            combined experience, will bring your vision to life. Trust us to{" "}
            <br />
            deliver functional and beautiful structures that exceed <br />
            expectations.
          </p>
        </div>

        <div className="jobtitle-menu-employee-cards">
          <div className="job-title-menu-container">
            <ul className="job-title-menu">
              <li className="job-title" style={{textDecoration:'underline', textUnderlineOffset:'8px'}}>
                Management
                {/* <hr className="team-menu-hr"/> */}
                
              </li>
              <li className="job-title">Architects</li>
              <li className="job-title">Engineers</li>
              <li className="job-title">Builders</li>
            </ul>
          </div>
          <div className="employee-cards">
            <div className="employee-card-container">
              {employees.map((emp) => {
                return (
                  <Employee
                    key={emp.id}
                    image={emp.image}
                    name={emp.name}
                    position={emp.position}
                  />
                );
              })}
            </div>
            <div className="employee-card-container">
              {employeeimages.map((emp) => {
                return (
                  <Employee
                    key={emp.id}
                    image={emp.image}
                    name={emp.name}
                    position={emp.position}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
