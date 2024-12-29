import { useState, useEffect } from "react";
import { Col, Row, } from "react-bootstrap";
import MongoDB from "../assets/img/mongodb.svg";
import express from "../assets/img/express.svg";
import react from "../assets/img/react.svg";
import node from "../assets/img/node.svg";
import github from "../assets/img/github.svg";
import bootstrap from "../assets/img/bootstrap.svg";


export const Newsletter = ({ status, message, onValidated }) => {
  const [, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

 

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          {
            <div>
              <h2>Tools & Techs</h2>
              <br></br>
              <p>
                <img src={MongoDB} alt="MongoDB Icon" className="icon-style" />
                <img src={react} alt="MongoDB Icon" className="icon-style" />
                <img src={express} alt="MongoDB Icon" className="icon-style" />
                <img src={node} alt="MongoDB Icon" className="icon-style" />
                <img src={github} alt="MongoDB Icon" className="icon-style" />
                <img
                  src={bootstrap}
                  alt="MongoDB Icon"
                  className="icon-style"
                />
                <p>more coming soon ...</p>
              </p>
            </div>
          }
        </Row>
      </div>
    </Col>
  );
}
