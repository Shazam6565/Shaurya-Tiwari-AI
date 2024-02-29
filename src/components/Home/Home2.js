import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={6} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
        ABOUT <span className="purple"> ME </span>
    </h1>
    <p className="home-about-body">
        As a passionate <b className="purple">Software Engineer</b> with a Master's from FSU, 
        my journey in <i><b className="purple">Data Mining, Data Science, and Machine Learning</b></i> 
        has been marked by continuous learning and application. 
        <br /><br />
        My expertise spans <b className="purple">Data Analytics Tools</b> like 
        <i> Microsoft Power BI, Azure Synapse Analytics,</i> and <i><b className="purple">Web Development Tools</b> 
        such as Django, Angular, React, and Flask</i>, enabling me to build solutions that tackle complex challenges.
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

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shazam6565"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/elonmusk"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shauryatiwari/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shaurya.tiwari_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
