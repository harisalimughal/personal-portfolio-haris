import React from 'react';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <div className="project-card">
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>Visit Project</button>
      </a>
    </div>
  );
};


// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl, link }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} alt="img"/>
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }