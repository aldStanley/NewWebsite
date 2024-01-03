import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import LinkedInIcon from "../assets/img/LinkedInIcon.svg";
import githubIcon from "../assets/img/github-mark-white.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/stanleyychung/" target="_blank"><img src={LinkedInIcon} alt="" /></a>
            <a href="https://github.com/aldStanley" target="_blank"><img src={githubIcon} alt="" /></a>
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}