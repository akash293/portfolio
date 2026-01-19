import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import Particle from "../components/Particle";
import pdf from "../assets/akash.pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = 
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* Top Download Button */}
      <Row className="justify-content-center mb-3">
        <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload /> &nbsp;Download Resume
        </Button>
      </Row>

      {/* PDF Preview */}
      <Row className="resume justify-content-center">
        <Document file={pdf}>
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Row>

      {/* Bottom Download Button */}
      <Row className="justify-content-center mt-3">
        <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload /> &nbsp;Download Resume
        </Button>
      </Row>
    </Container>
  );
};

export default Resume;
