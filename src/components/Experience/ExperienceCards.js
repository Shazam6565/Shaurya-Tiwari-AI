import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "More Info"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains a website link, it will render the below component  */}

        {props.websiteLink && (
          <Button
            variant="primary"
            href={props.websiteLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Website"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;