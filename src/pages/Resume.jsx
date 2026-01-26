import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import Particle from "../components/Particle";
import resumePdf from "../assets/akash.pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Akash_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container fluid className="resume-section">
      <Particle />

      <Row className="resume justify-content-center">
        <Document file={resumePdf}>
          <Page
            pageNumber={1}
            scale={width > 786 ? 1.7 : 0.6}
          />
        </Document>
      </Row>


      <Row className="justify-content-center download-btn p-3">
      <Button variant="primary" className="w-auto" onClick={handleDownload}>
  <AiOutlineDownload /> &nbsp;Download Resume
</Button>

      </Row>
    </Container>
  );
};

export default Resume;

