import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import textEditorimg from "../assets/img/TextEditor.png";
import ChatAppimg from "../assets/img/ChatApp.png";
import projImg3 from "../assets/img/project-img3.png";
import screenerAppimg from "../assets/img/screenerApp.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import Munch from "../assets/img/Munch.png";
import FastMart from "../assets/img/FastMart.png";
import NewsPortal from "../assets/img/NewsPortal.png";


import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "MUNCH",
      description:
        "This is my web prog semester project. It is a full stack project",
      imgUrl: Munch,
      link: "https://github.com/harisalimughal/Munch",
    },
    {
      title: "HarisChatApp",
      description:
        "I develop this project during my internship at CodeClause. Made of websockets, express.js",
      imgUrl: ChatAppimg,
      link: "https://harischatapp.netlify.app/",
    },
    {
      title: "FastMart",
      description:
        "This is my personal project a product selling site designing for my university ",
      imgUrl: FastMart,
      link: "https://github.com/harisalimughal/FastMart",
    },
    {
      title: "NewsPortal",
      description:
        "I developed this project during my internship at CodeClause.",
      imgUrl: NewsPortal,
      link: "https://github.com/harisalimughal/CodeClauseInternship_NewsPortal",
    },
    {
      title: "Screener App",
      description:
        "I convert figma file to this app using html and css during my internship ",
      imgUrl: screenerAppimg,
      link: "https://6dm6vf-5000.csb.app/",
    },
    {
      title: "Haris' Text Editor",
      description:
        "I developed this project during my internship at CodeClause.",
      imgUrl: textEditorimg,
      link: "https://haristexteditor.netlify.app/",
    },
  ];


  const projects2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are my sample projects. As, I have developed a number of websites for many business startups. I have worked with clients globally and have provided products more than their expectations. So,Judge by yourself</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming Soon ...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
