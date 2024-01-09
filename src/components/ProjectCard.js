import { Col } from "react-bootstrap";
import React, { useState } from 'react';

export const ProjectCard = ({ title, url, description, content, imgUrl }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClick = () => {
    // Navigate to the URL
    //window.location.href = url;
    setIsTextVisible(!isTextVisible);
  };
  return (
    <Col size={12} sm={6} md={4} onClick={handleClick}>
      <a href={url} target="_blank" rel="noopener noreferrer"></a>
      <div className="proj-imgbx" style={{ cursor: "pointer" }}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>

        <div className={isTextVisible ? "proj-txtx fade-in" : "proj-txtx"}>
          
          <span>{content}</span>
        </div>
      </div>
    </Col>
  )
}