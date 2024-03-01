import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { 
  DiJavascript1, 
  DiNodejs, 
  DiPython, 
  DiJava 
} from "react-icons/di";
import { FaPhp, FaSwift } from "react-icons/fa"; // PHP and Swift icons
import { SiCsharp, SiLatex} from "react-icons/si"; // C#, LaTeX, and Bash icons
// Note: For Matlab, no direct icon exists in `react-icons`, consider using a placeholder or a custom SVG

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Existing icons */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      {/* Added icons */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      {/* Placeholder for Matlab, consider using a generic icon or a custom SVG */}
      
      <Col xs={4} md={2} className="tech-icons">
        <SiLatex />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSwift />
      </Col>
      {/* Note: If you find icons for Matlab or other specific tools not covered, add them here */}
    </Row>
  );
}

export default Techstack;
