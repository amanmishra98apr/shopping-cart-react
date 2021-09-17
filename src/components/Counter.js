import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Badge } from "react-bootstrap";

export const Counter = (props) => {
    // let count = 0;

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar <Badge bg="secondary">{props.totalCounts}</Badge></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
