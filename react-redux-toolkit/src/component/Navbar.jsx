import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Navb = ()=>{
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container >
            <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to='/product' as={Link}>Products</Nav.Link>
                <Nav.Link to='/cart' as={Link}>Cart</Nav.Link>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
     
}

export default Navb