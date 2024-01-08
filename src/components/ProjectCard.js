import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, url, description, imgUrl }) => {

  const handleClick = () => {
    // Navigate to the URL
    window.location.href = url;
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
      </div>
    </Col>
  )
}