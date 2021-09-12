import React from 'react';
// import Fade from 'react-reveal/Fade';
// import Tilt from 'react-tilt';
// import { Container, Row, Col } from 'react-bootstrap';
// import PortfolioContext from '../../context/context';
// import Title from '../Title/Title';
// import ProjectImg from '../Image/ProjectImg';

const TechLabel = ({ ...techs }) => {
  // console.log(techs);
  return (
    <div className="mt-4">
      {techs.techs.map((tech, i) => {
        return (
          <span key={i} className="label">
            {tech}
          </span>
        );
      })}
    </div>
  );
};

export default TechLabel;
