import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/currency.png";
import kickstart from "../assets/projects/ui.png";
import age from "../assets/projects/age.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Digital‑Clock"
              description="Digital‑Clock is a simple digital clock project built using HTML, CSS, JavaScript, and React. The project displays the current time in a web interface by combining traditional web technologies (HTML/CSS/JS) with a React app"
              ghLink="https://github.com/akash293/Digital-Clock"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Currency Converter"
              description="A simple React web application that converts currency values between different currencies using live or predefined exchange rates. Built with React and styled with CSS, this app allows users to enter an amount, select the currency to convert from, choose a target currency, and instantly see the converted result. The project is bootstrapped with Create React Ap"
              ghLink="https://github.com/akash293/currency-converter-in-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Cloud Design"
              description="A sample web design project demonstrating cloud-related front‑end UI or templates. possibly design assets, HTML/CSS templates or examples for cloud‑oriented web pages starter kit for learning/designing cloud UI layouts."
              ghLink="https://github.com/akash293/sample-cloud-web-design"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={age}
              isBlog={false}
              title="Age Calculator"
              description="Age Calculator is a web application that allows users to calculate their exact age based on their date of birth. It instantly displays the age in years, months, and days using accurate date calculations with a clean and user-friendly interface."
              ghLink="https://github.com/akash293/Age-calculator-using-React"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects