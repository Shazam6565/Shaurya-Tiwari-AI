import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "3px",
              paddingBottom: "0px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get to know who <strong className="purple">I AM</strong>
            </h1>
          </Col>
          <Col md={6} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
        ABOUT <span className="purple"> ME </span>
    </h1>
    <p className="home-about-body">
        As a passionate <b className="purple">Software Engineer</b> with a Master's from FSU, 
        my journey in <b className="purple">Data Mining, Data Science, and Machine Learning </b> 
        has been marked by continuous learning and application. 
        <br /><br />
        My expertise spans <b className="purple">Data Analytics Tools</b> like 
        <b className="purple"> Microsoft Power BI, Azure Synapse Analytics,</b>  and Web Development frameworks
        such as <b className="purple">Django, Angular, React, and Flask, </b> enabling me to build solutions that tackle complex challenges.
        <br /><br />
        With experience at <b className="purple">C.O.A.P.S FSU</b> and <i>ACS Pvt. Ltd.,</i> 
        I've honed my skills in <b className="purple">high-traffic web environments and strategic data analysis</b>,
        contributing to tech-driven solutions with a focus on efficiency and innovation.
    </p>
</Col>
<Col md={6} className="home-about-description">
    <h2 style={{ fontSize: "2.4em" }}>
        MY <span className="purple">EXPERTISE</span>
    </h2>
    <p className="home-about-body">
        I excel in <b className="purple">Programming Languages</b> like <i>Python, C/C++, JavaScript,</i> and more,
        equipped to tackle diverse challenges across the tech spectrum.
        <br /><br />
        My projects, such as <i><b className="purple">Personalized Chatbots</b></i> and 
        <b className="purple"> Algorithmic Trading Strategies</b>, reflect my ability to apply 
        <i>cutting-edge techniques</i> for practical, real-world applications.
        <br /><br />
        I am eager to leverage my <b className="purple">data expertise</b> and 
        <i>web development prowess</i> in a full-time role, 
        driving forward with strategic analysis and innovative solutions.
    </p>
</Col>

        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
