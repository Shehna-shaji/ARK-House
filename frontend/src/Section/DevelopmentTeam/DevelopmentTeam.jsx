import React from "react";
import Heading from "../../Components/Section-Heading/Heading";
import "./DevelopmentTeam.css";
import { employees, engineers } from "../../assets/Employeecard";
import { useNavigate } from "react-router-dom";

const DevelopmentTeam = () => {
  const Employee = ({ image, name, position }) => {
    return (
      <div className="employee-card">
        <div className="employee">
          <img src={image} className="employee-img" />
        </div>
        <div className="name-position">
          <p className="emp-name">{name}</p>
          <p className="emp-position">{position}</p>
        </div>
      </div>
    );
  };
  const navigate = useNavigate();
  return (
    <div className="development-team">
      <Heading
        title="Development Team"
        text="Contact Us"
        onclick={() => navigate("/contact")}
      />
      <div className="team">
        <div className="team-menu-container">
          <ul className="team-menu">
            <li className="team-menu-text">Managers</li>
            <li className="team-menu-text">Engineers</li>
          </ul>
        </div>
        <div className="employee-cards">
          <h6 className="team-title">Managers</h6>
          <div className="employee-card-container">
            {employees.map(({ image, name, position }, i) => {
              return (
                <Employee
                  key={i}
                  image={image}
                  name={name}
                  position={position}
                />
              );
            })}
          </div>
          <h6 className="team-title">Engineers</h6>
          <div className="employee-card-container">
            {engineers.map(({ image, name, position }, i) => {
              return (
                <Employee
                  key={i}
                  image={image}
                  name={name}
                  position={position}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentTeam;
