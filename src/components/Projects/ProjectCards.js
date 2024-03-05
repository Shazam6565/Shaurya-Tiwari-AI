import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Function to render the PDF inside the modal
  const renderPDFModal = () => (
    <Modal show={showModal} onHide={handleCloseModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>PDF Documentation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Here you can use an iframe or a PDF viewer component to display your PDF */}
        <iframe title="Documentations" src={props.pdfLink} width="100%" height="500px"></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "2px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        <Button onClick={handleOpenModal} style={{ marginLeft: "6px" }}>
          {"Documentation"}
        </Button>
      </Card.Body>
      {renderPDFModal()}
    </Card>
  );
}

export default ProjectCards;
