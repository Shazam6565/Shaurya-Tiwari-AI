import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shaurya Tiwari </span>
            from <span className="purple"> Tallahassee, Florida</span>
            <br />
            I am currently pursuing my Masters in Computer Science and working part time at Center of Oceanic and Atmospheric Prediction Science as the lead web Developer.
            <br />
            I have completed my Bachelors in Technology in the field of Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jiu-jitsu
            </li>
            <li className="about-activity">
              <ImPointRight /> Boxing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you are not failing enough, you are not trying enough."{" "}
          </p>
          <footer className="blockquote-footer">Elon Musk</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
