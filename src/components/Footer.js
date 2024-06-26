import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import HarisLogo from "../assets/img/HarisLogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const nameStyle = {
    color: 'green',
  };
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={HarisLogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/harisalimughal/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100008819046672"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/haris.ali.mughal"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Developed by <span style={nameStyle}>Haris Ali</span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
